
import LaunchDarkly from '@launchdarkly/node-server-sdk';
import {initFromServerSideClient } from '../dist/src/index.js';

const serverSideSDK = LaunchDarkly.init('sdk-5dddfac7-4507-4e44-9639-e803ccd35abf');

const clientSide = initFromServerSideClient(serverSideSDK, {
    kind: 'user',
    key: 'user-key',
    anonymous: true,
});


clientSide.waitUntilReady().then(() => {
    console.log("howdy from client land")
    console.log('widget', clientSide.variationDetail('release-widget', false))
    console.log(clientSide.allFlags())
});