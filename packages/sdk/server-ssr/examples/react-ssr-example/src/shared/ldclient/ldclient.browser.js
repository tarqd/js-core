import * as LDClient from 'launchdarkly-js-client-sdk'

const context = {
    kind: 'user',
    key: 'example',
    anonymous: true,
  };
  const client = LDClient.initialize('62ea8c4afac9b011945f6792', context, {
    stream: true,
    bootstrap: window.__LD_INIT || null
  });

  // for some reason if i dont add this the sdk goes into a loop of trying to reconnect forever
  client.on('change', () => {
    console.log('flags changed!');
  });

  
  export default client;