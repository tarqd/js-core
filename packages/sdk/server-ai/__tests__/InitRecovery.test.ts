/**
 * Verifies how the AI client behaves when the underlying server SDK fails to initialize.
 *
 * Uses the real server-side LDClientImpl and the real StreamingProcessor; only the platform's
 * EventSource is faked so we can drive HTTP errors and stream payloads by hand.
 */
import { LDClientImpl, LDContext } from '@launchdarkly/js-server-sdk-common';

import { initAi } from '../src';

const context: LDContext = { kind: 'user', key: 'user-1' };
const FLAG_KEY = 'my-ai-config';

const aiFlag = {
  key: FLAG_KEY,
  version: 1,
  on: true,
  fallthrough: { variation: 0 },
  offVariation: 0,
  variations: [
    {
      model: { name: 'real-model' },
      provider: { name: 'openai' },
      messages: [{ role: 'system', content: 'hello' }],
      _ldMeta: { variationKey: 'v1', enabled: true, mode: 'completion', version: 1 },
    },
  ],
  targets: [],
  rules: [],
  prerequisites: [],
  salt: 'salt',
  trackEvents: false,
  trackEventsFallthrough: false,
  debugEventsUntilDate: null,
};

interface FakeEventSource {
  // Simulates an HTTP error on the stream. Returns what the SDK's errorFilter decided
  // (true = SDK wants to retry, false = SDK gave up).
  failWith(status: number): boolean;
  // Simulates the stream delivering a full data set.
  put(flags: Record<string, unknown>): void;
  closed: boolean;
}

function makePlatform() {
  const sources: FakeEventSource[] = [];
  const platform: any = {
    info: {
      platformData: () => ({}),
      sdkData: () => ({ name: 'test', version: '0.0.0', userAgentBase: 'Test' }),
    },
    crypto: {
      createHash: () => ({ update: () => ({ digest: () => 'hash' }) }),
      createHmac: () => ({ update: () => ({ digest: () => 'hmac' }) }),
      randomUUID: () => 'uuid',
    },
    requests: {
      fetch: jest.fn(() => new Promise(() => {})),
      getEventSourceCapabilities: () => ({ readTimeout: true, headers: true, customMethod: true }),
      createEventSource: (_url: string, options: any) => {
        const listeners: Record<string, (e: any) => void> = {};
        const source: any = {
          closed: false,
          addEventListener: (name: string, fn: (e: any) => void) => {
            listeners[name] = fn;
          },
          close: () => {
            source.closed = true;
          },
        };
        const fake: FakeEventSource = {
          get closed() {
            return source.closed;
          },
          failWith: (status: number) => {
            const retry = options.errorFilter({ status, message: `HTTP ${status}` });
            // A real EventSource stops for good when the filter says not to retry.
            if (!retry) source.closed = true;
            return retry;
          },
          put: (flags) => {
            if (source.closed) return;
            listeners.put?.({ data: JSON.stringify({ data: { flags, segments: {} } }) });
          },
        };
        sources.push(fake);
        return source;
      },
    },
  };
  return { platform, sources };
}

function makeClient() {
  const { platform, sources } = makePlatform();
  const ldClient = new LDClientImpl(
    'sdk-key',
    platform,
    {
      sendEvents: false,
      diagnosticOptOut: true,
      logger: { debug() {}, info() {}, warn() {}, error() {} },
    },
    {
      onError: jest.fn(),
      onFailed: jest.fn(),
      onReady: jest.fn(),
      onUpdate: jest.fn(),
      hasEventListeners: () => false,
    },
  );
  return { ldClient, stream: sources[0], aiClient: initAi(ldClient) };
}

const getConfig = (aiClient: ReturnType<typeof initAi>) =>
  aiClient.completionConfig(FLAG_KEY, context, { enabled: false });

describe('AI client after a failed SDK init', () => {
  let ldClient: LDClientImpl;
  afterEach(() => ldClient?.close());

  it('recovers once the stream recovers from recoverable errors (503) and a waitForInitialization timeout', async () => {
    const made = makeClient();
    ({ ldClient } = made);
    const { stream, aiClient } = made;

    // Stream gets 503s; SDK decides to retry each time.
    expect(stream.failWith(503)).toBe(true);
    expect(stream.failWith(503)).toBe(true);

    // The app's init wait times out.
    await expect(ldClient.waitForInitialization({ timeout: 0.05 })).rejects.toThrow(/timed out/i);
    expect(ldClient.initialized()).toBe(false);

    // Invoke while not ready -> default (disabled) config.
    const before = await getConfig(aiClient);
    expect(before.enabled).toBe(false);

    // Stream recovers and delivers data.
    stream.put({ [FLAG_KEY]: aiFlag });
    expect(ldClient.initialized()).toBe(true);

    // Same AI client instance, no re-init: now returns the real config.
    const after = await getConfig(aiClient);
    expect(after.enabled).toBe(true);
    expect(after.model?.name).toBe('real-model');
    expect(after.messages?.[0].content).toBe('hello');

    // A timeout only rejects that caller's wait; waiting again after recovery resolves.
    await expect(ldClient.waitForInitialization({ timeout: 0.05 })).resolves.toBe(ldClient);
  });

  it('does not recover after an unrecoverable error (401): client stays failed, stream stops', async () => {
    const made = makeClient();
    ({ ldClient } = made);
    const { stream, aiClient } = made;
    const waiting = ldClient.waitForInitialization({ timeout: 1 });

    // SDK gives up on a 401.
    expect(stream.failWith(401)).toBe(false);
    await expect(waiting).rejects.toThrow(/Authentication failed/);
    expect(stream.closed).toBe(true);

    // Any later "recovery" can't reach the SDK because the stream is closed.
    stream.put({ [FLAG_KEY]: aiFlag });
    expect(ldClient.initialized()).toBe(false);

    // Unlike a timeout, a failed init keeps rejecting.
    await expect(ldClient.waitForInitialization({ timeout: 1 })).rejects.toThrow(
      /Authentication failed/,
    );

    for (let i = 0; i < 3; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const config = await getConfig(aiClient);
      expect(config.enabled).toBe(false);
    }
  });
});
