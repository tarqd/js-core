import LaunchDarkly from '@launchdarkly/node-server-sdk';
import {initFromServerSideSDK} from '../../../../dist/src/index.js';

const client = LaunchDarkly.init('sdk-67ffb816-7eea-4642-864b-ce48865b8009');

const clientSide = initFromServerSideSDK(client);
export default clientSide;


