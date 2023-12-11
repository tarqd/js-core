import LaunchDarkly from '@launchdarkly/node-server-sdk';
import {initFromServerSideClient} from '../../../../../dist/src/index.js';

const client = LaunchDarkly.init('sdk-67ffb816-7eea-4642-864b-ce48865b8009');
const context = {
    kind: 'user',
    key: 'example',
    isSSR: true
  };


const clientSide = initFromServerSideClient(client, context);

clientSide.on('ready', () => {
    console.log('flags', clientSide.allFlags());
})


export default clientSide;

export function getServerSideClient() {
    return client;
}


