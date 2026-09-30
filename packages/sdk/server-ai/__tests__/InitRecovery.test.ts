/**
 * Verifies how the AI client behaves when the underlying server SDK fails to initialize, and
 * which AI objects keep a snapshot of their config (so they miss later recovery and flag updates).
 *
 * Uses the real server-side LDClientImpl and the real StreamingProcessor; only the platform's
 * EventSource is faked so we can drive HTTP errors and stream payloads by hand. RunnerFactory is
 * stubbed so no model is called: each runner echoes back the config it was built from.
 */
import { LDClientImpl, LDContext } from '@launchdarkly/js-server-sdk-common';

import { initAi } from '../src';
import { ManagedAgentGraph } from '../src/api/ManagedAgentGraph';
import { RunnerFactory } from '../src/api/providers/RunnerFactory';

jest.mock('../src/api/providers/RunnerFactory');

const echoRunner = (describe: () => string) => ({
  run: jest.fn(async () => ({
    content: describe(),
    metrics: { success: true },
  })),
});

beforeEach(() => {
  (RunnerFactory.createModel as jest.Mock).mockImplementation(async (config: any) =>
    echoRunner(() => `model=${config.model?.name} system=${config.messages?.[0]?.content}`),
  );
  (RunnerFactory.createAgent as jest.Mock).mockImplementation(async (config: any) =>
    echoRunner(() => `model=${config.model?.name} instructions=${config.instructions}`),
  );
});

const context: LDContext = { kind: 'user', key: 'user-1' };
const MODEL_KEY = 'my-ai-config';
const JUDGED_KEY = 'judged-config';
const JUDGE_KEY = 'my-judge';
const AGENT_KEY = 'my-agent';
const CHILD_KEY = 'child-agent';
const GRAPH_KEY = 'my-graph';

// Minimal server-side flag whose single variation is `value`.
const flag = (key: string, value: unknown, version = 1) => ({
  key,
  version,
  on: true,
  fallthrough: { variation: 0 },
  offVariation: 0,
  variations: [value],
  targets: [],
  rules: [],
  prerequisites: [],
  salt: 'salt',
  trackEvents: false,
  trackEventsFallthrough: false,
  debugEventsUntilDate: null,
});

const completionValue = (model: string, prompt: string, extra: Record<string, unknown> = {}) => ({
  model: { name: model },
  provider: { name: 'openai' },
  messages: [{ role: 'system', content: prompt }],
  _ldMeta: {
    variationKey: 'v1',
    enabled: true,
    mode: 'completion',
    version: 1,
  },
  ...extra,
});

const agentValue = (model: string, instructions: string) => ({
  model: { name: model },
  provider: { name: 'openai' },
  instructions,
  _ldMeta: { variationKey: 'v1', enabled: true, mode: 'agent', version: 1 },
});

const judgeValue = {
  model: { name: 'judge-model' },
  provider: { name: 'openai' },
  messages: [{ role: 'system', content: 'judge this' }],
  evaluationMetricKey: 'relevance',
  _ldMeta: { variationKey: 'j1', enabled: true, mode: 'judge', version: 1 },
};

const graphValue = (enabled = true) => ({
  _ldMeta: { variationKey: 'g1', version: 1, enabled },
  root: AGENT_KEY,
  edges: { [AGENT_KEY]: [{ key: CHILD_KEY }] },
});

const allFlags = () => ({
  [MODEL_KEY]: flag(MODEL_KEY, completionValue('real-model', 'hello')),
  [JUDGED_KEY]: flag(
    JUDGED_KEY,
    completionValue('real-model', 'hello', {
      judgeConfiguration: { judges: [{ key: JUDGE_KEY, samplingRate: 1 }] },
    }),
  ),
  [JUDGE_KEY]: flag(JUDGE_KEY, judgeValue),
  [AGENT_KEY]: flag(AGENT_KEY, agentValue('real-model', 'be helpful')),
  [CHILD_KEY]: flag(CHILD_KEY, agentValue('child-model', 'be a child')),
  [GRAPH_KEY]: flag(GRAPH_KEY, graphValue()),
});

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
      sdkData: () => ({
        name: 'test',
        version: '0.0.0',
        userAgentBase: 'Test',
      }),
    },
    crypto: {
      createHash: () => ({ update: () => ({ digest: () => 'hash' }) }),
      createHmac: () => ({ update: () => ({ digest: () => 'hmac' }) }),
      randomUUID: () => 'uuid',
    },
    requests: {
      fetch: jest.fn(() => new Promise(() => {})),
      getEventSourceCapabilities: () => ({
        readTimeout: true,
        headers: true,
        customMethod: true,
      }),
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
            const retry = options.errorFilter({
              status,
              message: `HTTP ${status}`,
            });
            // A real EventSource stops for good when the filter says not to retry.
            if (!retry) source.closed = true;
            return retry;
          },
          put: (flags) => {
            if (source.closed) return;
            listeners.put?.({
              data: JSON.stringify({ data: { flags, segments: {} } }),
            });
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

const modelFallback = {
  enabled: true,
  model: { name: 'fallback-model' },
  provider: { name: 'openai' },
  messages: [{ role: 'system' as const, content: 'fallback' }],
};

const agentFallback = {
  enabled: true,
  model: { name: 'fallback-model' },
  provider: { name: 'openai' },
  instructions: 'fallback',
};

describe('AI client after a failed SDK init', () => {
  let ldClient: LDClientImpl;
  afterEach(() => ldClient?.close());

  describe('config calls', () => {
    it('recover once the stream recovers from recoverable errors (503) and a waitForInitialization timeout', async () => {
      const made = makeClient();
      ({ ldClient } = made);
      const { stream, aiClient } = made;

      // Stream gets 503s; SDK decides to retry each time.
      expect(stream.failWith(503)).toBe(true);
      expect(stream.failWith(503)).toBe(true);

      // The app's init wait times out.
      await expect(ldClient.waitForInitialization({ timeout: 0.05 })).rejects.toThrow(/timed out/i);
      expect(ldClient.initialized()).toBe(false);

      // Evaluate while not ready -> default (disabled) config.
      expect((await aiClient.completionConfig(MODEL_KEY, context)).enabled).toBe(false);
      expect((await aiClient.agentConfig(AGENT_KEY, context)).enabled).toBe(false);

      // Stream recovers and delivers data.
      stream.put(allFlags());
      expect(ldClient.initialized()).toBe(true);

      // Same AI client instance, no re-init: now returns the real config.
      const after = await aiClient.completionConfig(MODEL_KEY, context);
      expect(after.enabled).toBe(true);
      expect(after.model?.name).toBe('real-model');
      expect(after.messages?.[0].content).toBe('hello');
      expect((await aiClient.agentConfig(AGENT_KEY, context)).instructions).toBe('be helpful');

      // A timeout only rejects that caller's wait; waiting again after recovery resolves.
      await expect(ldClient.waitForInitialization({ timeout: 0.05 })).resolves.toBe(ldClient);
    });

    it('do not recover after an unrecoverable error (401): client stays failed, stream stops', async () => {
      const made = makeClient();
      ({ ldClient } = made);
      const { stream, aiClient } = made;
      const waiting = ldClient.waitForInitialization({ timeout: 1 });

      // SDK gives up on a 401.
      expect(stream.failWith(401)).toBe(false);
      await expect(waiting).rejects.toThrow(/Authentication failed/);
      expect(stream.closed).toBe(true);

      // Any later "recovery" can't reach the SDK because the stream is closed.
      stream.put(allFlags());
      expect(ldClient.initialized()).toBe(false);

      // Unlike a timeout, a failed init keeps rejecting.
      await expect(ldClient.waitForInitialization({ timeout: 1 })).rejects.toThrow(
        /Authentication failed/,
      );

      for (let i = 0; i < 3; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        expect((await aiClient.completionConfig(MODEL_KEY, context)).enabled).toBe(false);
      }
      expect((await aiClient.agentGraph(GRAPH_KEY, context)).enabled).toBe(false);
    });
  });

  describe('createModel / ManagedModel.run', () => {
    it('with no default returns no model while not ready, and a working model after recovery', async () => {
      const made = makeClient();
      ({ ldClient } = made);
      const { stream, aiClient } = made;
      expect(stream.failWith(503)).toBe(true);

      expect(await aiClient.createModel(MODEL_KEY, context)).toBeUndefined();

      stream.put(allFlags());

      const model = await aiClient.createModel(MODEL_KEY, context);
      expect((await model!.run('hi')).content).toBe('model=real-model system=hello');
    });

    it('a model created while not ready keeps the fallback on every run, even after recovery', async () => {
      const made = makeClient();
      ({ ldClient } = made);
      const { stream, aiClient } = made;
      expect(stream.failWith(503)).toBe(true);

      const stale = await aiClient.createModel(MODEL_KEY, context, modelFallback);
      expect((await stale!.run('one')).content).toBe('model=fallback-model system=fallback');

      stream.put(allFlags());
      expect(ldClient.initialized()).toBe(true);

      // Same instance: run() never re-evaluates the flag, so it stays on the fallback.
      for (let i = 0; i < 3; i += 1) {
        // eslint-disable-next-line no-await-in-loop
        const res = await stale!.run(`again ${i}`);
        expect(res.content).toBe('model=fallback-model system=fallback');
        expect(res.metrics.success).toBe(true);
      }
      // Fallback configs are tracked with an empty variation key.
      expect(stale!.getConfig().createTracker().getTrackData().variationKey).toBe('');

      // A new createModel after recovery picks up the real config.
      const fresh = await aiClient.createModel(MODEL_KEY, context, modelFallback);
      expect((await fresh!.run('hi')).content).toBe('model=real-model system=hello');
    });

    it('a model created after init does not see later flag changes, including the flag being turned off', async () => {
      const made = makeClient();
      ({ ldClient } = made);
      const { stream, aiClient } = made;
      stream.put(allFlags());

      const model = await aiClient.createModel(MODEL_KEY, context);
      expect((await model!.run('a')).content).toBe('model=real-model system=hello');

      stream.put({
        ...allFlags(),
        [MODEL_KEY]: flag(MODEL_KEY, completionValue('new-model', 'updated prompt'), 2),
      });
      expect((await aiClient.completionConfig(MODEL_KEY, context)).model?.name).toBe('new-model');
      expect((await model!.run('b')).content).toBe('model=real-model system=hello');

      // Turning an AI Config off serves its disabled variation.
      stream.put({
        ...allFlags(),
        [MODEL_KEY]: {
          ...flag(MODEL_KEY, completionValue('new-model', 'updated prompt'), 3),
          on: false,
          offVariation: 1,
          variations: [
            completionValue('new-model', 'updated prompt'),
            {
              _ldMeta: {
                variationKey: 'off',
                enabled: false,
                mode: 'completion',
                version: 1,
              },
            },
          ],
        },
      });
      expect((await aiClient.completionConfig(MODEL_KEY, context)).enabled).toBe(false);
      expect((await model!.run('c')).content).toBe('model=real-model system=hello');
    });
  });

  describe('createAgent / ManagedAgent.run', () => {
    it('an agent created while not ready keeps the fallback on every run, even after recovery', async () => {
      const made = makeClient();
      ({ ldClient } = made);
      const { stream, aiClient } = made;
      expect(stream.failWith(503)).toBe(true);

      const stale = await aiClient.createAgent(AGENT_KEY, context, agentFallback);
      stream.put(allFlags());

      expect((await stale!.run('hi')).content).toBe('model=fallback-model instructions=fallback');
      const fresh = await aiClient.createAgent(AGENT_KEY, context, agentFallback);
      expect((await fresh!.run('hi')).content).toBe('model=real-model instructions=be helpful');
    });
  });

  describe('judges attached to a config', () => {
    const judgeKeys = async (result: { evaluations: Promise<any[]> }) =>
      (await result.evaluations).map((e) => e.judgeConfigKey);

    it('a judge that was unavailable when the model was created is never run by that model', async () => {
      const made = makeClient();
      ({ ldClient } = made);
      const { stream, aiClient } = made;

      // The judged config is available but its judge's config is not (e.g. not yet delivered).
      const { [JUDGE_KEY]: _judge, ...withoutJudge } = allFlags();
      stream.put(withoutJudge);

      const model = await aiClient.createModel(JUDGED_KEY, context);
      expect(await judgeKeys(await model!.run('a'))).toEqual([]);

      // Judge config arrives.
      stream.put(allFlags());

      // Existing model: judges were built once, at creation, so the judge never runs.
      expect(await judgeKeys(await model!.run('b'))).toEqual([]);

      // New model picks it up.
      const fresh = await aiClient.createModel(JUDGED_KEY, context);
      expect(await judgeKeys(await fresh!.run('c'))).toEqual([JUDGE_KEY]);
    });
  });

  describe('agentGraph / ManagedAgentGraph', () => {
    it('resolves to a disabled graph while not ready (no default is possible), and an enabled graph after recovery', async () => {
      const made = makeClient();
      ({ ldClient } = made);
      const { stream, aiClient } = made;
      expect(stream.failWith(503)).toBe(true);

      const stale = await aiClient.agentGraph(GRAPH_KEY, context);
      expect(stale.enabled).toBe(false);

      stream.put(allFlags());

      // The definition resolved while not ready stays disabled.
      expect(stale.enabled).toBe(false);

      const fresh = await aiClient.agentGraph(GRAPH_KEY, context);
      expect(fresh.enabled).toBe(true);
      expect(fresh.rootNode().getKey()).toBe(AGENT_KEY);
      expect(fresh.getNode(CHILD_KEY)?.getConfig().instructions).toBe('be a child');
    });

    it('a graph is disabled if any child agent config is unavailable at resolve time, and stays so', async () => {
      const made = makeClient();
      ({ ldClient } = made);
      const { stream, aiClient } = made;

      const { [CHILD_KEY]: _child, ...withoutChild } = allFlags();
      stream.put(withoutChild);

      const partial = await aiClient.agentGraph(GRAPH_KEY, context);
      expect(partial.enabled).toBe(false);

      stream.put(allFlags());
      expect(partial.enabled).toBe(false);
      expect((await aiClient.agentGraph(GRAPH_KEY, context)).enabled).toBe(true);
    });

    it('a held graph (and ManagedAgentGraph) does not see node updates or the graph being disabled', async () => {
      const made = makeClient();
      ({ ldClient } = made);
      const { stream, aiClient } = made;
      stream.put(allFlags());

      const graph = await aiClient.agentGraph(GRAPH_KEY, context);
      const managed = new ManagedAgentGraph(graph);
      const seen: string[] = [];
      const runner = async (def: any) => {
        seen.push(`${def.enabled}:${def.getNode(CHILD_KEY)?.getConfig().instructions}`);
        return {
          content: 'done',
          metrics: { success: true, path: [], nodeMetrics: {} },
        } as any;
      };

      await managed.run(runner);

      // Child node's instructions change, then the whole graph is disabled.
      stream.put({
        ...allFlags(),
        [CHILD_KEY]: flag(CHILD_KEY, agentValue('child-model', 'new child instructions'), 2),
      });
      await managed.run(runner);

      stream.put({
        ...allFlags(),
        [GRAPH_KEY]: flag(GRAPH_KEY, graphValue(false), 3),
      });
      await managed.run(runner);

      expect(seen).toEqual(['true:be a child', 'true:be a child', 'true:be a child']);
      expect(graph.getNode(CHILD_KEY)?.getConfig().instructions).toBe('be a child');
      expect((await aiClient.agentGraph(GRAPH_KEY, context)).enabled).toBe(false);
    });
  });
});
