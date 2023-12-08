import { LDContext } from '@launchdarkly/js-server-sdk-common';
import LaunchDarkly from '@launchdarkly/node-server-sdk';
import {TestData} from '@launchdarkly/node-server-sdk/integrations'
import LDSSRClient from '../src';

it('initializes from a server-side SDK', async () => {
  const td = new TestData();
  td.update(td.flag('some-flag').booleanFlag().on(true).fallthroughVariation(0).offVariation(1));
  const sourceClient = LaunchDarkly.init('sdk_key', { offline: true, updateProcessor: td.getFactory() });


  const ssr = new LDSSRClient(sourceClient, {
    kind: 'user',
    key: 'foo',
    anonymous: true
  })

  await ssr.waitForInitialization()
  expect(ssr.variation('some-flag', false)).toBe(true)
});
