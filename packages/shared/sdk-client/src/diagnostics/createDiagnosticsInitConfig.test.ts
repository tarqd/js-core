import Configuration from '../configuration';
import createDiagnosticsInitConfig, {
  type DiagnosticsInitConfig,
} from './createDiagnosticsInitConfig';

describe('createDiagnosticsInitConfig', () => {
  let initConfig: DiagnosticsInitConfig;

  beforeEach(() => {
    initConfig = createDiagnosticsInitConfig(new Configuration());
  });

  test('defaults', () => {
    expect(initConfig).toEqual({
      allAttributesPrivate: false,
      bootstrapMode: false,
      customBaseURI: false,
      customEventsURI: false,
      customStreamURI: false,
      diagnosticRecordingIntervalMillis: 900000,
      eventsCapacity: 100,
      eventsFlushIntervalMillis: 2000,
      fetchGoalsDisabled: false,
      reconnectTimeMillis: 1000,
      sendEventsOnlyForVariation: false,
      streamingDisabled: true,
      usingSecureMode: false,
    });
  });

  test.only('non-default config', () => {
    const initWithCustomUris = createDiagnosticsInitConfig(
      new Configuration({
        baseUri: 'https://dev.ld.com',
        streamUri: 'https://stream.ld.com',
        eventsUri: 'https://events.ld.com',
        capacity: 1111,
        flushInterval: 2222,
        streamReconnectDelay: 3333,
        diagnosticRecordingInterval: 4444,
        stream: true,
        allAttributesPrivate: true,
        // hash: 'test-hash',
        bootstrap: 'localStorage',
        // fetchGoals: false,
        sendEventsOnlyForVariation: true,
      }),
    );
    expect(initWithCustomUris).toEqual({
      allAttributesPrivate: true,
      bootstrapMode: true,
      customBaseURI: true,
      customEventsURI: true,
      customStreamURI: true,
      diagnosticRecordingIntervalMillis: 4444,
      eventsCapacity: 1111,
      eventsFlushIntervalMillis: 2222,
      fetchGoalsDisabled: true,
      reconnectTimeMillis: 3333,
      sendEventsOnlyForVariation: true,
      streamingDisabled: false,
      usingSecureMode: true,
    });
  });
});
