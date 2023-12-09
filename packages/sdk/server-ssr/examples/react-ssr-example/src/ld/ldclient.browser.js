import * as LDClient from '@launchdarkly/js-client-sdk'

const context = {
    kind: 'user',
    key: 'example',
    anonymous: true,
  };
  const client = LDClient.initialize('62ea8c4afac9b011945f6792', context);
  
  export default client;