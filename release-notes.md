:robot: I have created a release *beep* *boop*
---


<details><summary>akamai-edgeworker-sdk-common: 2.0.38</summary>

## [2.0.38](https://github.com/tarqd/js-core/compare/akamai-edgeworker-sdk-common-v2.0.37...akamai-edgeworker-sdk-common-v2.0.38) (2026-09-29)


### Bug Fixes

* enabling eslint `ban-types` rule and fixed string typing ([#1313](https://github.com/tarqd/js-core/issues/1313)) ([f6d907f](https://github.com/tarqd/js-core/commit/f6d907f1a65abd0b41827f3c827e6dad896b16b1))
* explicit return types and TS6 source compatibility fixes ([#1418](https://github.com/tarqd/js-core/issues/1418)) ([9c131a2](https://github.com/tarqd/js-core/commit/9c131a2e731c97a7fd4cf7ec1fe11efbbf49d6fb))
* **perf:** reduce Akamai CryptoJS bundle size ([#1877](https://github.com/tarqd/js-core/issues/1877)) ([0b3e1ec](https://github.com/tarqd/js-core/commit/0b3e1ec66ae1272733d4fc80d5bd82f8c9d1cf17))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common bumped from ^2.21.6 to ^2.22.0
</details>

<details><summary>akamai-server-base-sdk: 3.0.39</summary>

## [3.0.39](https://github.com/tarqd/js-core/compare/akamai-server-base-sdk-v3.0.38...akamai-server-base-sdk-v3.0.39) (2026-09-29)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/akamai-edgeworker-sdk-common bumped from ^2.0.37 to ^2.0.38
</details>

<details><summary>akamai-server-edgekv-sdk: 1.4.41</summary>

## [1.4.41](https://github.com/tarqd/js-core/compare/akamai-server-edgekv-sdk-v1.4.40...akamai-server-edgekv-sdk-v1.4.41) (2026-09-29)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/akamai-edgeworker-sdk-common bumped from ^2.0.37 to ^2.0.38
    * @launchdarkly/js-server-sdk-common bumped from ^2.21.6 to ^2.22.0
</details>

<details><summary>client-testing-plugin: 2.0.0</summary>

## [2.0.0](https://github.com/tarqd/js-core/compare/client-testing-plugin-v1.0.19...client-testing-plugin-v2.0.0) (2026-09-29)


###   BREAKING CHANGES

* release `@launchdarkly/client-testing-plugin` ([#1755](https://github.com/tarqd/js-core/issues/1755))
* prerelease `@launchdarkly/client-testing-plugin` ([#1422](https://github.com/tarqd/js-core/issues/1422))

### Features

* prerelease `@launchdarkly/client-testing-plugin` ([#1422](https://github.com/tarqd/js-core/issues/1422)) ([d801e9e](https://github.com/tarqd/js-core/commit/d801e9e923f8c81e177e25c846cf7e76398cc36e))
* release `@launchdarkly/client-testing-plugin` ([#1755](https://github.com/tarqd/js-core/issues/1755)) ([9d44e25](https://github.com/tarqd/js-core/commit/9d44e25380d58b1510b510d5f2a5b6d4d05e58e9))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-client-sdk-common bumped from 1.32.2 to 1.33.0
  * devDependencies
    * @launchdarkly/js-client-sdk bumped from 4.10.4 to 5.0.0
    * @launchdarkly/react-sdk bumped from 4.1.21 to 4.2.0
  * peerDependencies
    * @launchdarkly/js-client-sdk bumped from ^4.9.1 to ^5.0.0
    * @launchdarkly/react-sdk bumped from ^4.1.4 to ^4.2.0
</details>

<details><summary>cloudflare-server-sdk: 2.7.40</summary>

## [2.7.40](https://github.com/tarqd/js-core/compare/cloudflare-server-sdk-v2.7.39...cloudflare-server-sdk-v2.7.40) (2026-09-29)


### Bug Fixes

* **cloudflare:** bundle tslib with esm module ([#1292](https://github.com/tarqd/js-core/issues/1292)) ([d7ed722](https://github.com/tarqd/js-core/commit/d7ed7229d277e6ff96929c279279d85b094d596f))
* Export LDMigrationError and LDMigrationTracker from the Cloudflare SDK ([#1988](https://github.com/tarqd/js-core/issues/1988)) ([33c5433](https://github.com/tarqd/js-core/commit/33c5433b44ff3664698d669ce8543dbaeedb42e6))
* remove `rollup-plugin-dts` dependency ([#1288](https://github.com/tarqd/js-core/issues/1288)) ([ea64b82](https://github.com/tarqd/js-core/commit/ea64b82a2c9d93d5c94fbc6e972cd9b5646b7cf1))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common-edge bumped from 2.6.35 to 2.6.36
</details>

<details><summary>fastly-server-sdk: 0.2.30</summary>

## [0.2.30](https://github.com/tarqd/js-core/compare/fastly-server-sdk-v0.2.29...fastly-server-sdk-v0.2.30) (2026-09-29)


### Bug Fixes

* Accept eventsUri option in Fastly SDK init() ([#1791](https://github.com/tarqd/js-core/issues/1791)) ([18deecd](https://github.com/tarqd/js-core/commit/18deecddc53714850a31a8d796720fb101535af2))
* Disable event processor background flush timers for edge clients ([#1797](https://github.com/tarqd/js-core/issues/1797)) ([bac7f81](https://github.com/tarqd/js-core/commit/bac7f81e07bcd0bbbf2abcfd15cb6ca7f3e512cb))
* Do not cache rejected KV loads in Fastly EdgeFeatureStore ([#1796](https://github.com/tarqd/js-core/issues/1796)) ([8f51339](https://github.com/tarqd/js-core/commit/8f51339c6d09d2ac6f86636f2b61ae4adeb7d16e))
* explicit return types and TS6 source compatibility fixes ([#1418](https://github.com/tarqd/js-core/issues/1418)) ([9c131a2](https://github.com/tarqd/js-core/commit/9c131a2e731c97a7fd4cf7ec1fe11efbbf49d6fb))
* Export BasicLogger, LDContext, and LDOptions from the Fastly SDK ([#1987](https://github.com/tarqd/js-core/issues/1987)) ([f5c3170](https://github.com/tarqd/js-core/commit/f5c3170469c8aee4d821f163116eb11492ce1999))


### Performance Improvements

* Import only used crypto-js submodules in Fastly SDK ([#1795](https://github.com/tarqd/js-core/issues/1795)) ([5c12f19](https://github.com/tarqd/js-core/commit/5c12f19f5c0b6a73ad12b8ca1e1450a38a45f9a0))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.21.6 to 2.22.0
</details>

<details><summary>jest: 2.0.0</summary>

## [2.0.0](https://github.com/tarqd/js-core/compare/jest-v1.0.31...jest-v2.0.0) (2026-09-29)


###   BREAKING CHANGES

* updating to major version 1 ([#1089](https://github.com/tarqd/js-core/issues/1089))

### Bug Fixes

* updating to major version 1 ([#1089](https://github.com/tarqd/js-core/issues/1089)) ([4c194d8](https://github.com/tarqd/js-core/commit/4c194d8112d39e3693688c0cbe0bc7ef27b67869))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/react-native-client-sdk bumped from ~10.20.4 to ~10.21.0
</details>

<details><summary>js-client-sdk: 5.0.0</summary>

## [5.0.0](https://github.com/tarqd/js-core/compare/js-client-sdk-v4.10.4...js-client-sdk-v5.0.0) (2026-09-29)


###   BREAKING CHANGES

* release js-client-sdk v4 ([#1093](https://github.com/tarqd/js-core/issues/1093))

### Features

* Add experimental FDv2 configuration (unused) ([#1169](https://github.com/tarqd/js-core/issues/1169)) ([c7130cc](https://github.com/tarqd/js-core/commit/c7130ccabe19a699b3c14dc949432ef1afb37b3d))
* add retry logic to FDv2 polling initializer ([#1230](https://github.com/tarqd/js-core/issues/1230)) ([fe8bd37](https://github.com/tarqd/js-core/commit/fe8bd375af48edfcfe83822bbbbe4546551c90d9))
* adding start() method to common client sdk package ([#1244](https://github.com/tarqd/js-core/issues/1244)) ([7f5f468](https://github.com/tarqd/js-core/commit/7f5f468f93eaa4655d1432af5e7bf8819104700a))
* **browser:** use shared readFlagsFromBootstrap from js-client-sdk-common ([#1107](https://github.com/tarqd/js-core/issues/1107)) ([68fe311](https://github.com/tarqd/js-core/commit/68fe311c5c655a831df69abbd8f0eb543cf9333d))
* Consolidate endpoint paths. Add FDv2 endpoints. ([#1125](https://github.com/tarqd/js-core/issues/1125)) ([297ef9d](https://github.com/tarqd/js-core/commit/297ef9d2793cdd750a9050674137257d6e18c809))
* expose setConnectionMode on browser SDK ([#1232](https://github.com/tarqd/js-core/issues/1232)) ([9019808](https://github.com/tarqd/js-core/commit/9019808edd5f78cbddd9b031da1589cbaa49938f))
* FDv2 contract test wiring, suppressions, and example app, cleanup configuration exports. ([#1225](https://github.com/tarqd/js-core/issues/1225)) ([c67c5f6](https://github.com/tarqd/js-core/commit/c67c5f65f92e39d2e311b26d025a4b90112f2e4f))
* **js-client-sdk:** add ability to customize storage impl ([#1404](https://github.com/tarqd/js-core/issues/1404)) ([77864cb](https://github.com/tarqd/js-core/commit/77864cb04f737c8aab4476422a2a2422c7be978c))
* move bootstrap capability to js-client-common (SDK-1874) ([#1113](https://github.com/tarqd/js-core/issues/1113)) ([baa8ab4](https://github.com/tarqd/js-core/commit/baa8ab43898be51a498c2a8238e466f5194c2698))
* Prepare FDv2 EAP for browser and React Native SDKs ([#1419](https://github.com/tarqd/js-core/issues/1419)) ([6ee9c51](https://github.com/tarqd/js-core/commit/6ee9c515fe9aaf999fd7f0eb722d6df9a2d208d8))
* release js-client-sdk v4 ([#1093](https://github.com/tarqd/js-core/issues/1093)) ([1457793](https://github.com/tarqd/js-core/commit/1457793489aeb94113e796b47a80c222975096c3))
* wire fdv1-fallback capability into node-client, browser, and react-native contract-test entities ([#1858](https://github.com/tarqd/js-core/issues/1858)) ([462c950](https://github.com/tarqd/js-core/commit/462c95098d2143802939cd010cfacd39e26a1c22))
* wire FDv2 data manager into BrowserClient ([#1222](https://github.com/tarqd/js-core/issues/1222)) ([0b855f0](https://github.com/tarqd/js-core/commit/0b855f0be6ad5fd086f293603d7880992d41452e))
* wire registerDebugOverrides through client common ([#1368](https://github.com/tarqd/js-core/issues/1368)) ([9011c2a](https://github.com/tarqd/js-core/commit/9011c2a76f7460770efe3c07b3e16338b647d9df))


### Bug Fixes

* add defensive cycle guard to prerequisite evaluation ([#1816](https://github.com/tarqd/js-core/issues/1816)) ([9426b42](https://github.com/tarqd/js-core/commit/9426b42dbb5e96914c62462ff7281ec6e24727b3))
* Allow 0 status code to be handled by the streaming error filter. ([d96b46b](https://github.com/tarqd/js-core/commit/d96b46b01331842647f71cccfaf70ab104029849))
* Automatically stream when individual flag event listeners are re& ([#1114](https://github.com/tarqd/js-core/issues/1114)) ([c15b7a8](https://github.com/tarqd/js-core/commit/c15b7a8aba3712f3b077722d0df11443b58d4e0c))
* correct typeof comparisons in browser SDK ([#1301](https://github.com/tarqd/js-core/issues/1301)) ([f4bd636](https://github.com/tarqd/js-core/commit/f4bd6369e03353f38abfdf1b4b8ef90aa7c79ffb))
* enabling eslint `ban-types` rule and fixed string typing ([#1313](https://github.com/tarqd/js-core/issues/1313)) ([f6d907f](https://github.com/tarqd/js-core/commit/f6d907f1a65abd0b41827f3c827e6dad896b16b1))
* Ensure FDv2 waits for network results instead of cached results. ([#1397](https://github.com/tarqd/js-core/issues/1397)) ([142da36](https://github.com/tarqd/js-core/commit/142da363702264debef25796f92760b8ec6ab342))
* FDv2 - Support dynamic reconnect URL for streaming. Handle 'error' event types for SSE. ([#1252](https://github.com/tarqd/js-core/issues/1252)) ([4ef6cdd](https://github.com/tarqd/js-core/commit/4ef6cdd3f07a15e9a6b3b831defcf41d10e6334b))
* Improve error handling for FDv2 streaming ([d96b46b](https://github.com/tarqd/js-core/commit/d96b46b01331842647f71cccfaf70ab104029849))
* **js-client-sdk:** better `undefined` handling ([#1303](https://github.com/tarqd/js-core/issues/1303)) ([4818678](https://github.com/tarqd/js-core/commit/4818678282bc6aa54aca00c2d1cb02d2a6b14bf8))
* **js-client-sdk:** switching context does not update streaming connection ([#1153](https://github.com/tarqd/js-core/issues/1153)) ([b894ac2](https://github.com/tarqd/js-core/commit/b894ac29b3d054f88d4e0c3ee24fcb59ea53cca9))
* Report data source state as valid after bootstrap ([#1203](https://github.com/tarqd/js-core/issues/1203)) ([b00889f](https://github.com/tarqd/js-core/commit/b00889fa4f8018b982bb252b1156c858cd48898e))
* **sdk-client:** `executeAfterTrack` ordering ([58e063b](https://github.com/tarqd/js-core/commit/58e063bad4651e25beea644425bea23a20f4870f))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-client-sdk-common bumped from 1.32.2 to 1.33.0
</details>

<details><summary>js-client-sdk-common: 1.33.0</summary>

## [1.33.0](https://github.com/tarqd/js-core/compare/js-client-sdk-common-v1.32.2...js-client-sdk-common-v1.33.0) (2026-09-29)


### Features

* Add experimental FDv2 configuration (unused) ([#1169](https://github.com/tarqd/js-core/issues/1169)) ([c7130cc](https://github.com/tarqd/js-core/commit/c7130ccabe19a699b3c14dc949432ef1afb37b3d))
* Add experimental FDv2 support for React Native. ([#1243](https://github.com/tarqd/js-core/issues/1243)) ([7ed2c08](https://github.com/tarqd/js-core/commit/7ed2c085cd35d35ffd6f48becb5a60f03b07ad1c))
* Add explicit disableCache setting. ([6be89dd](https://github.com/tarqd/js-core/commit/6be89dd16098264a8c75761628f716c1b7387cb7))
* add FDv1 fallback directive parsing and TTL data model ([#1781](https://github.com/tarqd/js-core/issues/1781)) ([4a213c3](https://github.com/tarqd/js-core/commit/4a213c31f8afc9f5713a60f3a5517ddbc8004cd5))
* Add FDv1 polling synchronizer for FDv2 fallback (SDK-1923) ([#1159](https://github.com/tarqd/js-core/issues/1159)) ([498216a](https://github.com/tarqd/js-core/commit/498216acc43ad007e6888b1fdd53892cd231a4a7))
* Add fdv2 mode configuration types and validation. ([#1135](https://github.com/tarqd/js-core/issues/1135)) ([6ee156c](https://github.com/tarqd/js-core/commit/6ee156c4e7055266d5e9d81afb43f4dd7d85f02d))
* Add FDv2 polling initializer/synchronizer ([#1130](https://github.com/tarqd/js-core/issues/1130)) ([6777fc6](https://github.com/tarqd/js-core/commit/6777fc6f7b501dd0547f6eb7cd8e0f26c72aad9d))
* Add FDv2 State Debouncer ([#1148](https://github.com/tarqd/js-core/issues/1148)) ([da3f72e](https://github.com/tarqd/js-core/commit/da3f72e2da800953582311fa640b7a63f166a35d))
* Add FDv2 streaming initializer/synchronizer ([#1131](https://github.com/tarqd/js-core/issues/1131)) ([6602bbc](https://github.com/tarqd/js-core/commit/6602bbc54ddb40ce9a2a3af7722a204d813144ed))
* Add FDv2DataSource composite data source orchestrator ([#1141](https://github.com/tarqd/js-core/issues/1141)) ([f02ae5a](https://github.com/tarqd/js-core/commit/f02ae5a3189d73022fb81221d532e95659da9f01))
* Add flag eval model for FDv2. ([#1124](https://github.com/tarqd/js-core/issues/1124)) ([028e63f](https://github.com/tarqd/js-core/commit/028e63f34eb0f11c5c0d8d078baf0ec378b9e8e0))
* Add mode resolution table for FDv2. ([#1146](https://github.com/tarqd/js-core/issues/1146)) ([ab2436d](https://github.com/tarqd/js-core/commit/ab2436dc677cfc923fba051aab649a2a7e959a3e))
* add retry logic to FDv2 polling initializer ([#1230](https://github.com/tarqd/js-core/issues/1230)) ([fe8bd37](https://github.com/tarqd/js-core/commit/fe8bd375af48edfcfe83822bbbbe4546551c90d9))
* adding start() method to common client sdk package ([#1244](https://github.com/tarqd/js-core/issues/1244)) ([7f5f468](https://github.com/tarqd/js-core/commit/7f5f468f93eaa4655d1432af5e7bf8819104700a))
* adding the implementation for main process client ([#1103](https://github.com/tarqd/js-core/issues/1103)) ([0abb86c](https://github.com/tarqd/js-core/commit/0abb86c6f6ed95a644e671ce967c4be5fd2ad9d4))
* Consolidate endpoint paths. Add FDv2 endpoints. ([#1125](https://github.com/tarqd/js-core/issues/1125)) ([297ef9d](https://github.com/tarqd/js-core/commit/297ef9d2793cdd750a9050674137257d6e18c809))
* expose setConnectionMode on browser SDK ([#1232](https://github.com/tarqd/js-core/issues/1232)) ([9019808](https://github.com/tarqd/js-core/commit/9019808edd5f78cbddd9b031da1589cbaa49938f))
* FDv2 Cache Initializer ([#1147](https://github.com/tarqd/js-core/issues/1147)) ([7d6299f](https://github.com/tarqd/js-core/commit/7d6299fc20dac864487b1f07f283c41e07bf73de))
* FDv2 contract test wiring, suppressions, and example app, cleanup configuration exports. ([#1225](https://github.com/tarqd/js-core/issues/1225)) ([c67c5f6](https://github.com/tarqd/js-core/commit/c67c5f65f92e39d2e311b26d025a4b90112f2e4f))
* FDv2 types, refined validators, and DataManager interface ([#1207](https://github.com/tarqd/js-core/issues/1207)) ([d7ccfc1](https://github.com/tarqd/js-core/commit/d7ccfc1a5359610d70751dc08e3b894bb7ecf334))
* FDv2DataManagerBase for mode switching and data source lifecycle ([#1210](https://github.com/tarqd/js-core/issues/1210)) ([8f8051c](https://github.com/tarqd/js-core/commit/8f8051ca769d214a5df09fdf0e71c25f2b98a7f7))
* FlagManager.applyChanges for FDv2 full/partial/none semantics ([#1208](https://github.com/tarqd/js-core/issues/1208)) ([d9a1bd7](https://github.com/tarqd/js-core/commit/d9a1bd7d24ea68e867496e93be0f3097b709392a))
* **js-client-sdk:** add ability to customize storage impl ([#1404](https://github.com/tarqd/js-core/issues/1404)) ([77864cb](https://github.com/tarqd/js-core/commit/77864cb04f737c8aab4476422a2a2422c7be978c))
* move bootstrap capability to js-client-common (SDK-1874) ([#1113](https://github.com/tarqd/js-core/issues/1113)) ([baa8ab4](https://github.com/tarqd/js-core/commit/baa8ab43898be51a498c2a8238e466f5194c2698))
* Move FDv1 fallback directive parsing to the shared package ([#1981](https://github.com/tarqd/js-core/issues/1981)) ([e7a3b66](https://github.com/tarqd/js-core/commit/e7a3b6647caf3210c9cea40e7818f164537aa50f))
* Prepare FDv2 EAP for browser and React Native SDKs ([#1419](https://github.com/tarqd/js-core/issues/1419)) ([6ee9c51](https://github.com/tarqd/js-core/commit/6ee9c515fe9aaf999fd7f0eb722d6df9a2d208d8))
* SourceFactoryProvider for declarative data source creation ([#1209](https://github.com/tarqd/js-core/issues/1209)) ([e254f77](https://github.com/tarqd/js-core/commit/e254f771761b3d0d61a745a1e06f99f6216ff63a))
* support per-mode FDv1 fallback configuration ([#1246](https://github.com/tarqd/js-core/issues/1246)) ([9956bce](https://github.com/tarqd/js-core/commit/9956bce2cc70642c63da79f904c5d5554892e046))
* support waitForNetworkResults in FDv2 data manager ([#1280](https://github.com/tarqd/js-core/issues/1280)) ([df7fa9e](https://github.com/tarqd/js-core/commit/df7fa9e571703132ffa697e8a005f31d7ab866dd))
* warn that payload filtering has no effect with FDv2 ([#1984](https://github.com/tarqd/js-core/issues/1984)) ([5e37aca](https://github.com/tarqd/js-core/commit/5e37aca49398ff01aa0c71b75d106699a1461cd3))
* wire FDv2 data manager into BrowserClient ([#1222](https://github.com/tarqd/js-core/issues/1222)) ([0b855f0](https://github.com/tarqd/js-core/commit/0b855f0be6ad5fd086f293603d7880992d41452e))
* wire registerDebugOverrides through client common ([#1368](https://github.com/tarqd/js-core/issues/1368)) ([9011c2a](https://github.com/tarqd/js-core/commit/9011c2a76f7460770efe3c07b3e16338b647d9df))


### Bug Fixes

* add defensive cycle guard to prerequisite evaluation ([#1816](https://github.com/tarqd/js-core/issues/1816)) ([9426b42](https://github.com/tarqd/js-core/commit/9426b42dbb5e96914c62462ff7281ec6e24727b3))
* Allow 0 status code to be handled by the streaming error filter. ([d96b46b](https://github.com/tarqd/js-core/commit/d96b46b01331842647f71cccfaf70ab104029849))
* Automatically stream when individual flag event listeners are re& ([#1114](https://github.com/tarqd/js-core/issues/1114)) ([c15b7a8](https://github.com/tarqd/js-core/commit/c15b7a8aba3712f3b077722d0df11443b58d4e0c))
* client side fdv2 payload type ([#1778](https://github.com/tarqd/js-core/issues/1778)) ([0b9fde5](https://github.com/tarqd/js-core/commit/0b9fde5d88dc0816937f5fb0baa6ca205388e53f))
* **common:** remove non-spec fields from FDv2 GoodbyeObject ([#1341](https://github.com/tarqd/js-core/issues/1341)) ([feb9aa7](https://github.com/tarqd/js-core/commit/feb9aa7f6217bc9b3a9794bc71867e14112ea928))
* enabling eslint `ban-types` rule and fixed string typing ([#1313](https://github.com/tarqd/js-core/issues/1313)) ([f6d907f](https://github.com/tarqd/js-core/commit/f6d907f1a65abd0b41827f3c827e6dad896b16b1))
* FDv2 - Support dynamic reconnect URL for streaming. Handle 'error' event types for SSE. ([#1252](https://github.com/tarqd/js-core/issues/1252)) ([4ef6cdd](https://github.com/tarqd/js-core/commit/4ef6cdd3f07a15e9a6b3b831defcf41d10e6334b))
* FDv2 -- cache initializer returns transfer-none on cache miss ([#1275](https://github.com/tarqd/js-core/issues/1275)) ([7bf3c31](https://github.com/tarqd/js-core/commit/7bf3c3122dc01146988d3722ff659f011967ea3d))
* FDv2 Only -- Adjust the behavior of initialization when only cache initializers are available. ([#1304](https://github.com/tarqd/js-core/issues/1304)) ([9a2b25a](https://github.com/tarqd/js-core/commit/9a2b25afd1507b2b6e42b85a32edea7a40be8bb0))
* Fix the calculation of the basis parameter for FDv2 streaming. (Does not affect FDv1). ([#1165](https://github.com/tarqd/js-core/issues/1165)) ([bbdd6c6](https://github.com/tarqd/js-core/commit/bbdd6c6f23fcc2a2fbd3ff72a39d872853ceef38))
* Improve error handling for FDv2 streaming ([d96b46b](https://github.com/tarqd/js-core/commit/d96b46b01331842647f71cccfaf70ab104029849))
* Max cached context enforcement wasn't working for 0. ([6be89dd](https://github.com/tarqd/js-core/commit/6be89dd16098264a8c75761628f716c1b7387cb7))
* migrate anonymous context namespace to general namespace ([#1312](https://github.com/tarqd/js-core/issues/1312)) ([afbed0f](https://github.com/tarqd/js-core/commit/afbed0f299808f21dd4a8aa5159fe8d31879e1b9))
* Preserve FDv2 protocol error listeners and stop misreporting server error frames ([#2028](https://github.com/tarqd/js-core/issues/2028)) ([3d80bef](https://github.com/tarqd/js-core/commit/3d80bef9f56872ed1c625ba1518aed2ebe30c1fd))
* rename FDv2 object kind from `flagEval` to `flag-eval` ([#1185](https://github.com/tarqd/js-core/issues/1185)) ([cd4b119](https://github.com/tarqd/js-core/commit/cd4b1190362373d9a16582dea0f65a786210e8e3))
* **sdk-client-common:** `identify()` bootstrap does not set flagstore in FDv2 ([#1837](https://github.com/tarqd/js-core/issues/1837)) ([574f816](https://github.com/tarqd/js-core/commit/574f8164ed930423c44d82d4c1ad210387bfc5b9))
* **sdk-client:** `executeAfterTrack` ordering ([58e063b](https://github.com/tarqd/js-core/commit/58e063bad4651e25beea644425bea23a20f4870f))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-sdk-common bumped from 2.27.0 to 2.28.0
</details>

<details><summary>js-sdk-common: 2.28.0</summary>

## [2.28.0](https://github.com/tarqd/js-core/compare/js-sdk-common-v2.27.0...js-sdk-common-v2.28.0) (2026-09-29)


### Features

* add a reusable retry state controller for RETRY-conformant backoff ([#2045](https://github.com/tarqd/js-core/issues/2045)) ([721b559](https://github.com/tarqd/js-core/commit/721b559ff15bb13e3344921de9539e2663d0f0c8))
* Add flag eval model for FDv2. ([#1124](https://github.com/tarqd/js-core/issues/1124)) ([028e63f](https://github.com/tarqd/js-core/commit/028e63f34eb0f11c5c0d8d078baf0ec378b9e8e0))
* Add isNullish utility to validators. ([#1137](https://github.com/tarqd/js-core/issues/1137)) ([0064365](https://github.com/tarqd/js-core/commit/0064365ba575e743c90370a9a48e56e0f232b973))
* Add oneOf validator to common validators. ([#1139](https://github.com/tarqd/js-core/issues/1139)) ([606fcf1](https://github.com/tarqd/js-core/commit/606fcf1919df8ad2aad35773c53df96a750a6c7d))
* add X-LaunchDarkly-Instance-Id header to server-node SDK (SDK-2358) ([#1377](https://github.com/tarqd/js-core/issues/1377)) ([814dc0b](https://github.com/tarqd/js-core/commit/814dc0bfd6b152385f3a758f9eeca37a0f9f08e8))
* FDv2 types, refined validators, and DataManager interface ([#1207](https://github.com/tarqd/js-core/issues/1207)) ([d7ccfc1](https://github.com/tarqd/js-core/commit/d7ccfc1a5359610d70751dc08e3b894bb7ecf334))
* Move FDv1 fallback directive parsing to the shared package ([#1981](https://github.com/tarqd/js-core/issues/1981)) ([e7a3b66](https://github.com/tarqd/js-core/commit/e7a3b6647caf3210c9cea40e7818f164537aa50f))
* Refactor FDV2 protocol handling. ([4570089](https://github.com/tarqd/js-core/commit/4570089cd478cc5811a9a1c207231a96fdb5b39a))


### Bug Fixes

* **common:** remove non-spec fields from FDv2 GoodbyeObject ([#1341](https://github.com/tarqd/js-core/issues/1341)) ([feb9aa7](https://github.com/tarqd/js-core/commit/feb9aa7f6217bc9b3a9794bc71867e14112ea928))
* enabling eslint `ban-types` rule and fixed string typing ([#1313](https://github.com/tarqd/js-core/issues/1313)) ([f6d907f](https://github.com/tarqd/js-core/commit/f6d907f1a65abd0b41827f3c827e6dad896b16b1))
* explicit return types and TS6 source compatibility fixes ([#1418](https://github.com/tarqd/js-core/issues/1418)) ([9c131a2](https://github.com/tarqd/js-core/commit/9c131a2e731c97a7fd4cf7ec1fe11efbbf49d6fb))
* FDv2 - Support dynamic reconnect URL for streaming. Handle 'error' event types for SSE. ([#1252](https://github.com/tarqd/js-core/issues/1252)) ([4ef6cdd](https://github.com/tarqd/js-core/commit/4ef6cdd3f07a15e9a6b3b831defcf41d10e6334b))
* Only redact anonymous contexts in custom events for server SDKs ([#1814](https://github.com/tarqd/js-core/issues/1814)) ([5a3b3fb](https://github.com/tarqd/js-core/commit/5a3b3fbc59e9a0b2d65221d65e54078ffa1bf433))
* Preserve FDv2 protocol error listeners and stop misreporting server error frames ([#2028](https://github.com/tarqd/js-core/issues/2028)) ([3d80bef](https://github.com/tarqd/js-core/commit/3d80bef9f56872ed1c625ba1518aed2ebe30c1fd))
* Redact anonymous context attributes in migration op and custom events ([#1809](https://github.com/tarqd/js-core/issues/1809)) ([c84ec48](https://github.com/tarqd/js-core/commit/c84ec485e33ef27cc34610ec838b5466f3a5c96e))
* **server-node:** honor x-ld-fd-fallback directive in FDv2 initializer phase ([#1342](https://github.com/tarqd/js-core/issues/1342)) ([a80eaca](https://github.com/tarqd/js-core/commit/a80eacaafa6174e5f1b4fe21ba11534fdf1f92a8))
* Stop format() from hanging on a trailing percent sign ([#2056](https://github.com/tarqd/js-core/issues/2056)) ([c5114ec](https://github.com/tarqd/js-core/commit/c5114ecf5dc32826f260744b0e4aa5c4a7f633d6))
</details>

<details><summary>js-server-sdk-common: 2.22.0</summary>

## [2.22.0](https://github.com/tarqd/js-core/compare/js-server-sdk-common-v2.21.6...js-server-sdk-common-v2.22.0) (2026-09-29)


### Features

* add X-LaunchDarkly-Instance-Id header to server-node SDK (SDK-2358) ([#1377](https://github.com/tarqd/js-core/issues/1377)) ([814dc0b](https://github.com/tarqd/js-core/commit/814dc0bfd6b152385f3a758f9eeca37a0f9f08e8))
* Refactor FDV2 protocol handling. ([4570089](https://github.com/tarqd/js-core/commit/4570089cd478cc5811a9a1c207231a96fdb5b39a))
* **sdk-server-common:** add support for custom base uris in FDv2 datasources  ([#1827](https://github.com/tarqd/js-core/issues/1827)) ([5d028c3](https://github.com/tarqd/js-core/commit/5d028c36ab308973957dff226839026994b70fd2))
* warn that payload filtering has no effect with FDv2 ([#1984](https://github.com/tarqd/js-core/issues/1984)) ([5e37aca](https://github.com/tarqd/js-core/commit/5e37aca49398ff01aa0c71b75d106699a1461cd3))


### Bug Fixes

* ability to handle FDv1 `flagValues` shorthand map to FDv2FiledataInitializer ([#1811](https://github.com/tarqd/js-core/issues/1811)) ([cbdaf6e](https://github.com/tarqd/js-core/commit/cbdaf6ec020e0567c640ce73c9978c1252c7ff35))
* custom featureStores in FDv2 does not get wrapped as TransactionalFeatureStore. ([#1812](https://github.com/tarqd/js-core/issues/1812)) ([c687a97](https://github.com/tarqd/js-core/commit/c687a9702db83d0b1093c8c794bee6bca89c856a))
* Disable event processor background flush timers for edge clients ([#1797](https://github.com/tarqd/js-core/issues/1797)) ([bac7f81](https://github.com/tarqd/js-core/commit/bac7f81e07bcd0bbbf2abcfd15cb6ca7f3e512cb))
* enabling eslint `ban-types` rule and fixed string typing ([#1313](https://github.com/tarqd/js-core/issues/1313)) ([f6d907f](https://github.com/tarqd/js-core/commit/f6d907f1a65abd0b41827f3c827e6dad896b16b1))
* explicit return types and TS6 source compatibility fixes ([#1418](https://github.com/tarqd/js-core/issues/1418)) ([9c131a2](https://github.com/tarqd/js-core/commit/9c131a2e731c97a7fd4cf7ec1fe11efbbf49d6fb))
* Log the cached-data evaluation warning only once per client ([#2015](https://github.com/tarqd/js-core/issues/2015)) ([0bb2164](https://github.com/tarqd/js-core/commit/0bb2164fb9e60817af3a5b11e714d14bc7681cdc))
* **node-server-sdk:** No FDv1 fallback when using custom datasystem ([#1088](https://github.com/tarqd/js-core/issues/1088)) ([5111112](https://github.com/tarqd/js-core/commit/5111112b6ddba8107edb8d455de0b1da114b2af6))
* Only redact anonymous contexts in custom events for server SDKs ([#1814](https://github.com/tarqd/js-core/issues/1814)) ([5a3b3fb](https://github.com/tarqd/js-core/commit/5a3b3fbc59e9a0b2d65221d65e54078ffa1bf433))
* **persistent-store:** add error logs for upsert ([#1985](https://github.com/tarqd/js-core/issues/1985)) ([5ff1cf2](https://github.com/tarqd/js-core/commit/5ff1cf240f6c197c38cc1caceabadf12b3c89ea5))
* Preserve FDv2 protocol error listeners and stop misreporting server error frames ([#2028](https://github.com/tarqd/js-core/issues/2028)) ([3d80bef](https://github.com/tarqd/js-core/commit/3d80bef9f56872ed1c625ba1518aed2ebe30c1fd))
* **sdk-server-common:** use subpath import for `semver` module ([#1885](https://github.com/tarqd/js-core/issues/1885)) ([2de6c8c](https://github.com/tarqd/js-core/commit/2de6c8cc39e6b7a4e4092af0731b2de124d56b94))
* server sdk could send user agent headers under a different header name ([#1860](https://github.com/tarqd/js-core/issues/1860)) ([669662a](https://github.com/tarqd/js-core/commit/669662a304c10bcb2b683e0c7ea990f43679916b))
* **server-node:** honor x-ld-fd-fallback directive in FDv2 initializer phase ([#1342](https://github.com/tarqd/js-core/issues/1342)) ([a80eaca](https://github.com/tarqd/js-core/commit/a80eacaafa6174e5f1b4fe21ba11534fdf1f92a8))
* Wire timeout option through to flag polling and event delivery requests ([#1760](https://github.com/tarqd/js-core/issues/1760)) ([e18998e](https://github.com/tarqd/js-core/commit/e18998eb339a7edc1e059c2f6832afe2739b0bd6))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-sdk-common bumped from 2.27.0 to 2.28.0
</details>

<details><summary>js-server-sdk-common-edge: 2.6.36</summary>

## [2.6.36](https://github.com/tarqd/js-core/compare/js-server-sdk-common-edge-v2.6.35...js-server-sdk-common-edge-v2.6.36) (2026-09-29)


### Bug Fixes

* explicit return types and TS6 source compatibility fixes ([#1418](https://github.com/tarqd/js-core/issues/1418)) ([9c131a2](https://github.com/tarqd/js-core/commit/9c131a2e731c97a7fd4cf7ec1fe11efbbf49d6fb))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.21.6 to 2.22.0
</details>

<details><summary>node-client-sdk: 5.0.0</summary>

## [5.0.0](https://github.com/tarqd/js-core/compare/node-client-sdk-v4.1.4...node-client-sdk-v5.0.0) (2026-09-29)


###   BREAKING CHANGES

* `identify()` resolves an identify result and no longer throws
* The on-disk persistent cache format changed; v3 cache data will not be read by v4 and the anonymous key will be regenerated on first identify.
* pre-release `@launchdarkly/node-client-sdk` as `0.1.0` ([#1757](https://github.com/tarqd/js-core/issues/1757))

### BREAKING-CHANGE

* The package name changed from `launchdarkly-node-client-sdk` to `@launchdarkly/node-client-sdk`. ([4116d2f](https://github.com/tarqd/js-core/commit/4116d2f4cee34d0c2b8041b2b2a93a2a61820471))


### Features

* `identify()` resolves an identify result and no longer throws ([4116d2f](https://github.com/tarqd/js-core/commit/4116d2f4cee34d0c2b8041b2b2a93a2a61820471))
* Add FDv2 data system support to NodeClient ([#1775](https://github.com/tarqd/js-core/issues/1775)) ([3ea0f33](https://github.com/tarqd/js-core/commit/3ea0f3398d25e8881775937a6ce2872242e4cbcc))
* Add useMobileKey option to NodeOptions ([4116d2f](https://github.com/tarqd/js-core/commit/4116d2f4cee34d0c2b8041b2b2a93a2a61820471))
* Evaluation, identify, and track hooks ([4116d2f](https://github.com/tarqd/js-core/commit/4116d2f4cee34d0c2b8041b2b2a93a2a61820471))
* Inspector support for flag and context state ([4116d2f](https://github.com/tarqd/js-core/commit/4116d2f4cee34d0c2b8041b2b2a93a2a61820471))
* **node-client-sdk:** adding ability to override storage implementation ([#1753](https://github.com/tarqd/js-core/issues/1753)) ([a04ec92](https://github.com/tarqd/js-core/commit/a04ec9215e069b7195c6e7aba21c09b39c607837))
* **node-client-sdk:** adding support for mobile usage ([#1768](https://github.com/tarqd/js-core/issues/1768)) ([71d47a7](https://github.com/tarqd/js-core/commit/71d47a70d303df349592a1573eb927d983673782))
* Plugin extension surface with `applicationInfo` metadata ([4116d2f](https://github.com/tarqd/js-core/commit/4116d2f4cee34d0c2b8041b2b2a93a2a61820471))
* pre-release `@launchdarkly/node-client-sdk` as `0.1.0` ([#1757](https://github.com/tarqd/js-core/issues/1757)) ([e14e6f9](https://github.com/tarqd/js-core/commit/e14e6f91148e1c7b65756cb653a45ebad883d1d6))
* Runtime connection-mode control via `setConnectionMode` ([4116d2f](https://github.com/tarqd/js-core/commit/4116d2f4cee34d0c2b8041b2b2a93a2a61820471))
* Storage configuration with file-backed default and custom-implementation override ([4116d2f](https://github.com/tarqd/js-core/commit/4116d2f4cee34d0c2b8041b2b2a93a2a61820471))
* support client side secure mode with client side id ([4116d2f](https://github.com/tarqd/js-core/commit/4116d2f4cee34d0c2b8041b2b2a93a2a61820471))
* support wrapper header ([4116d2f](https://github.com/tarqd/js-core/commit/4116d2f4cee34d0c2b8041b2b2a93a2a61820471))
* TLS configuration via `tlsParams` ([4116d2f](https://github.com/tarqd/js-core/commit/4116d2f4cee34d0c2b8041b2b2a93a2a61820471))
* wire fdv1-fallback capability into node-client, browser, and react-native contract-test entities ([#1858](https://github.com/tarqd/js-core/issues/1858)) ([462c950](https://github.com/tarqd/js-core/commit/462c95098d2143802939cd010cfacd39e26a1c22))


### Bug Fixes

* **node-client-sdk:** adding docs to clarify FDv2 datasystem will ignore `initialConnectionMode` ([#1835](https://github.com/tarqd/js-core/issues/1835)) ([b43c784](https://github.com/tarqd/js-core/commit/b43c78460a738b38eabc8b72698ca86cf1faafd3))
* **node-client-sdk:** better handling for bad filesystem states ([#1799](https://github.com/tarqd/js-core/issues/1799)) ([8f58b35](https://github.com/tarqd/js-core/commit/8f58b3515f004070034561c804dcb7586471906b))
* **node-client-sdk:** correct sdk_metadata.json entry and restore userAgentBase ([#1840](https://github.com/tarqd/js-core/issues/1840)) ([5da9ef6](https://github.com/tarqd/js-core/commit/5da9ef63716d7b5aa24c2199149ea32ef8f76d57))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-client-sdk-common bumped from 1.32.2 to 1.33.0
</details>

<details><summary>node-server-sdk: 9.14.0</summary>

## [9.14.0](https://github.com/tarqd/js-core/compare/node-server-sdk-v9.13.8...node-server-sdk-v9.14.0) (2026-09-29)


### Features

* add a custom proxyAgent option to the Node server SDK ([#1438](https://github.com/tarqd/js-core/issues/1438)) ([c74dae7](https://github.com/tarqd/js-core/commit/c74dae74e01fa2f36ec91086f53658d4644d9c9f))
* add X-LaunchDarkly-Instance-Id header to server-node SDK (SDK-2358) ([#1377](https://github.com/tarqd/js-core/issues/1377)) ([814dc0b](https://github.com/tarqd/js-core/commit/814dc0bfd6b152385f3a758f9eeca37a0f9f08e8))
* **sdk-server-common:** add support for custom base uris in FDv2 datasources  ([#1827](https://github.com/tarqd/js-core/issues/1827)) ([5d028c3](https://github.com/tarqd/js-core/commit/5d028c36ab308973957dff226839026994b70fd2))


### Bug Fixes

* add SOCKS proxy example and fixes warning logging and proxyAuth reporting ([#1786](https://github.com/tarqd/js-core/issues/1786)) ([a5b42ca](https://github.com/tarqd/js-core/commit/a5b42ca3bf7d0672bf303cf47036ea801f6b9093))
* enabling eslint `ban-types` rule and fixed string typing ([#1313](https://github.com/tarqd/js-core/issues/1313)) ([f6d907f](https://github.com/tarqd/js-core/commit/f6d907f1a65abd0b41827f3c827e6dad896b16b1))
* **sdk-client:** `executeAfterTrack` ordering ([58e063b](https://github.com/tarqd/js-core/commit/58e063bad4651e25beea644425bea23a20f4870f))
* **sdk-server-common:** use subpath import for `semver` module ([#1885](https://github.com/tarqd/js-core/issues/1885)) ([2de6c8c](https://github.com/tarqd/js-core/commit/2de6c8cc39e6b7a4e4092af0731b2de124d56b94))
* **server-node:** honor x-ld-fd-fallback directive in FDv2 initializer phase ([#1342](https://github.com/tarqd/js-core/issues/1342)) ([a80eaca](https://github.com/tarqd/js-core/commit/a80eacaafa6174e5f1b4fe21ba11534fdf1f92a8))
* Wire timeout option through to flag polling and event delivery requests ([#1760](https://github.com/tarqd/js-core/issues/1760)) ([e18998e](https://github.com/tarqd/js-core/commit/e18998eb339a7edc1e059c2f6832afe2739b0bd6))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.21.6 to 2.22.0
</details>

<details><summary>node-server-sdk-dynamodb: 6.2.45</summary>

## [6.2.45](https://github.com/tarqd/js-core/compare/node-server-sdk-dynamodb-v6.2.44...node-server-sdk-dynamodb-v6.2.45) (2026-09-29)


### Bug Fixes

* **node-server-sdk-dynamodb:** remove unnecessary ioredis package ([#1306](https://github.com/tarqd/js-core/issues/1306)) ([5d6c86e](https://github.com/tarqd/js-core/commit/5d6c86ec3d6c37abaccf3e88f62735113a0fe966))
* **persistent-store:** add error logs for upsert ([#1985](https://github.com/tarqd/js-core/issues/1985)) ([5ff1cf2](https://github.com/tarqd/js-core/commit/5ff1cf240f6c197c38cc1caceabadf12b3c89ea5))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/node-server-sdk bumped from 9.13.8 to 9.14.0
  * peerDependencies
    * @launchdarkly/node-server-sdk bumped from >=9.11.3 to >=9.14.0
</details>

<details><summary>node-server-sdk-otel: 1.3.32</summary>

## [1.3.32](https://github.com/tarqd/js-core/compare/node-server-sdk-otel-v1.3.31...node-server-sdk-otel-v1.3.32) (2026-09-29)


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/node-server-sdk bumped from 9.13.8 to 9.14.0
  * peerDependencies
    * @launchdarkly/node-server-sdk bumped from >=9.11.3 to >=9.14.0
</details>

<details><summary>node-server-sdk-redis: 4.2.44</summary>

## [4.2.44](https://github.com/tarqd/js-core/compare/node-server-sdk-redis-v4.2.43...node-server-sdk-redis-v4.2.44) (2026-09-29)


### Bug Fixes

* **persistent-store:** add error logs for upsert ([#1985](https://github.com/tarqd/js-core/issues/1985)) ([5ff1cf2](https://github.com/tarqd/js-core/commit/5ff1cf240f6c197c38cc1caceabadf12b3c89ea5))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/node-server-sdk bumped from 9.13.8 to 9.14.0
  * peerDependencies
    * @launchdarkly/node-server-sdk bumped from >=9.11.3 to >=9.14.0
</details>

<details><summary>openfeature-cloudflare-server: 1.0.0</summary>

## [1.0.0](https://github.com/tarqd/js-core/compare/openfeature-cloudflare-server-v1.0.2...openfeature-cloudflare-server-v1.0.0) (2026-09-29)


###   BREAKING CHANGES

* Promote @launchdarkly/openfeature-cloudflare-server to stable v1 ([#1873](https://github.com/tarqd/js-core/issues/1873))

### Features

* Promote @launchdarkly/openfeature-cloudflare-server to stable v1 ([#1873](https://github.com/tarqd/js-core/issues/1873)) ([4f9b349](https://github.com/tarqd/js-core/commit/4f9b3496e81d5d2d552a4e36c870f913137703fd))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/openfeature-js-server-common bumped from 2.0.3 to 3.0.0
  * devDependencies
    * @launchdarkly/cloudflare-server-sdk bumped from 2.7.39 to 2.7.40
  * peerDependencies
    * @launchdarkly/cloudflare-server-sdk bumped from ^2.7.0 to ^2.7.40
</details>

<details><summary>openfeature-js-server-common: 3.0.0</summary>

## [3.0.0](https://github.com/tarqd/js-core/compare/openfeature-js-server-common-v2.0.3...openfeature-js-server-common-v3.0.0) (2026-09-29)


###   BREAKING CHANGES

* Map LaunchDarkly evaluation reasons to OpenFeature reasons ([#1887](https://github.com/tarqd/js-core/issues/1887))
* Map the WRONG_TYPE error kind to TYPE_MISMATCH ([#1888](https://github.com/tarqd/js-core/issues/1888))
* release `@launchdarkly/openfeature-js-server-common` ([#1754](https://github.com/tarqd/js-core/issues/1754))

### Features

* Populate OpenFeature flag metadata from the evaluation reason ([#1869](https://github.com/tarqd/js-core/issues/1869)) ([d5bdaeb](https://github.com/tarqd/js-core/commit/d5bdaebb515a5357cbdc6da52b5b911bc4af7351))
* release `@launchdarkly/openfeature-js-server-common` ([#1754](https://github.com/tarqd/js-core/issues/1754)) ([f83f6db](https://github.com/tarqd/js-core/commit/f83f6db16b6c77f1cbc5cfeb4dfd47b7c17b71bf))


### Bug Fixes

* Map LaunchDarkly evaluation reasons to OpenFeature reasons ([#1887](https://github.com/tarqd/js-core/issues/1887)) ([70291f4](https://github.com/tarqd/js-core/commit/70291f4862384f18ef4e9bf11045c7f4df73a116))
* Map the WRONG_TYPE error kind to TYPE_MISMATCH ([#1888](https://github.com/tarqd/js-core/issues/1888)) ([2d60942](https://github.com/tarqd/js-core/commit/2d60942d15812fea1cf82be72101492422da813d))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-sdk-common bumped from 2.27.0 to 2.28.0
</details>

<details><summary>openfeature-node-server: 3.0.0</summary>

## [3.0.0](https://github.com/tarqd/js-core/compare/openfeature-node-server-v2.0.7...openfeature-node-server-v3.0.0) (2026-09-29)


###   BREAKING CHANGES

* Map LaunchDarkly evaluation reasons to OpenFeature reasons ([#1887](https://github.com/tarqd/js-core/issues/1887))

### Features

* openfeature-node-server migration ([#1767](https://github.com/tarqd/js-core/issues/1767)) ([22fb0b2](https://github.com/tarqd/js-core/commit/22fb0b230412e97e930cb6c7414e98beb37f587a))
* Populate OpenFeature flag metadata from the evaluation reason ([#1869](https://github.com/tarqd/js-core/issues/1869)) ([d5bdaeb](https://github.com/tarqd/js-core/commit/d5bdaebb515a5357cbdc6da52b5b911bc4af7351))


### Bug Fixes

* Map LaunchDarkly evaluation reasons to OpenFeature reasons ([#1887](https://github.com/tarqd/js-core/issues/1887)) ([70291f4](https://github.com/tarqd/js-core/commit/70291f4862384f18ef4e9bf11045c7f4df73a116))
* **openfeature-node-server:** identify floor for node server sdk peer dep ([#1787](https://github.com/tarqd/js-core/issues/1787)) ([d42203a](https://github.com/tarqd/js-core/commit/d42203a9d32c1f0d8365a09471bf33712580719c))
* **openfeature-node-server:** updating public README and CHANGELOG ([#1782](https://github.com/tarqd/js-core/issues/1782)) ([e55c1db](https://github.com/tarqd/js-core/commit/e55c1db37857bae2fd6c556f31a0e04cb9988494))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/openfeature-js-server-common bumped from 2.0.3 to 3.0.0
  * devDependencies
    * @launchdarkly/node-server-sdk bumped from 9.13.8 to 9.14.0
  * peerDependencies
    * @launchdarkly/node-server-sdk bumped from ^9.0.0 to ^9.14.0
</details>

<details><summary>react-native-client-sdk: 10.21.0</summary>

## [10.21.0](https://github.com/tarqd/js-core/compare/react-native-client-sdk-v10.20.4...react-native-client-sdk-v10.21.0) (2026-09-29)


### Features

* Add experimental FDv2 configuration (unused) ([#1169](https://github.com/tarqd/js-core/issues/1169)) ([c7130cc](https://github.com/tarqd/js-core/commit/c7130ccabe19a699b3c14dc949432ef1afb37b3d))
* Add experimental FDv2 support for React Native. ([#1243](https://github.com/tarqd/js-core/issues/1243)) ([7ed2c08](https://github.com/tarqd/js-core/commit/7ed2c085cd35d35ffd6f48becb5a60f03b07ad1c))
* Consolidate endpoint paths. Add FDv2 endpoints. ([#1125](https://github.com/tarqd/js-core/issues/1125)) ([297ef9d](https://github.com/tarqd/js-core/commit/297ef9d2793cdd750a9050674137257d6e18c809))
* move bootstrap capability to js-client-common (SDK-1874) ([#1113](https://github.com/tarqd/js-core/issues/1113)) ([baa8ab4](https://github.com/tarqd/js-core/commit/baa8ab43898be51a498c2a8238e466f5194c2698))
* Prepare FDv2 EAP for browser and React Native SDKs ([#1419](https://github.com/tarqd/js-core/issues/1419)) ([6ee9c51](https://github.com/tarqd/js-core/commit/6ee9c515fe9aaf999fd7f0eb722d6df9a2d208d8))
* **react-native:** adding debug override plugin support ([#1410](https://github.com/tarqd/js-core/issues/1410)) ([99a96d2](https://github.com/tarqd/js-core/commit/99a96d2d73a98264e551074f66fb5d10155042c6))
* **react-native:** no storage fallback to in-memory map ([#1281](https://github.com/tarqd/js-core/issues/1281)) ([cc86eab](https://github.com/tarqd/js-core/commit/cc86eabe18fd524472c7cf36847c0d757aecc6d1))
* wire fdv1-fallback capability into node-client, browser, and react-native contract-test entities ([#1858](https://github.com/tarqd/js-core/issues/1858)) ([462c950](https://github.com/tarqd/js-core/commit/462c95098d2143802939cd010cfacd39e26a1c22))


### Bug Fixes

* Honor urlBuilder on React Native EventSource reconnect ([#1420](https://github.com/tarqd/js-core/issues/1420)) ([93bd3f8](https://github.com/tarqd/js-core/commit/93bd3f84d1c824fe1bea94f7760c586349c3dc3e))
* **react-native:** `package.json` should declare esm format ([#1322](https://github.com/tarqd/js-core/issues/1322)) ([149ae73](https://github.com/tarqd/js-core/commit/149ae73c623cf7ccac6f7d7346059a80e8044280))
* **sdk-client:** `executeAfterTrack` ordering ([58e063b](https://github.com/tarqd/js-core/commit/58e063bad4651e25beea644425bea23a20f4870f))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-client-sdk-common bumped from 1.32.2 to 1.33.0
</details>

<details><summary>react-sdk: 4.2.0</summary>

## [4.2.0](https://github.com/tarqd/js-core/compare/react-sdk-v4.1.21...react-sdk-v4.2.0) (2026-09-29)


### Features

* adding isomorphic provider to bridge client and server ([#1218](https://github.com/tarqd/js-core/issues/1218)) ([d766f39](https://github.com/tarqd/js-core/commit/d766f39c0d178cc66c80644c3cecddb6e7131c93))
* **js-client-sdk:** add ability to customize storage impl ([#1404](https://github.com/tarqd/js-core/issues/1404)) ([77864cb](https://github.com/tarqd/js-core/commit/77864cb04f737c8aab4476422a2a2422c7be978c))
* pre-release of `@launchdarkly/react-sdk` ([#1201](https://github.com/tarqd/js-core/issues/1201)) ([69f4790](https://github.com/tarqd/js-core/commit/69f47902f5327d3d7c7f1bbca66a3d0ff95e7452))
* release-react-sdk-v4 ([#1238](https://github.com/tarqd/js-core/issues/1238)) ([a0eb24d](https://github.com/tarqd/js-core/commit/a0eb24d05e34237c852d039ead46f33e31a95c4c))
* support static client component rendering ([#1227](https://github.com/tarqd/js-core/issues/1227)) ([6b3a100](https://github.com/tarqd/js-core/commit/6b3a1001844cdeccb378a402283673bf35760369))


### Bug Fixes

* adding wrapper name for react client ([#1199](https://github.com/tarqd/js-core/issues/1199)) ([f92a8f9](https://github.com/tarqd/js-core/commit/f92a8f9d9b7f15c344745be13ce16d6a03a0c126))
* Bump vercel SDK to latest  ([#1832](https://github.com/tarqd/js-core/issues/1832)) ([b0167a2](https://github.com/tarqd/js-core/commit/b0167a20b3ac599a231946b03efd9f790cf27d39))
* **deps:** update dependency next to v16.1.5 [security] ([#1164](https://github.com/tarqd/js-core/issues/1164)) ([929a385](https://github.com/tarqd/js-core/commit/929a385568b7b25e2340c5e7b4f654e6b6d8d907))
* **deps:** update dependency next to v16.1.7 [security] ([#1196](https://github.com/tarqd/js-core/issues/1196)) ([1572be1](https://github.com/tarqd/js-core/commit/1572be1adbb25eb12102e5f03dd058d62423afb3))
* **deps:** update dependency next to v16.2.11 [security] ([#1822](https://github.com/tarqd/js-core/issues/1822)) ([19454cd](https://github.com/tarqd/js-core/commit/19454cd5a2b9fc3729f05ab40f5091ba070a16b0))
* **deps:** update dependency next to v16.2.3 [security] ([#1263](https://github.com/tarqd/js-core/issues/1263)) ([10f582a](https://github.com/tarqd/js-core/commit/10f582a460342f6352735b1cd3f93af1f57ba303))
* **deps:** update dependency next to v16.2.6 [security] ([#1374](https://github.com/tarqd/js-core/issues/1374)) ([24487f4](https://github.com/tarqd/js-core/commit/24487f49d2f0b87d50af18d807b98a3dc5b11b8f))
* react prerelease docs ([#1215](https://github.com/tarqd/js-core/issues/1215)) ([bc69bdd](https://github.com/tarqd/js-core/commit/bc69bdd16f423aa84d23c255a13c6b959fa4446e))
* **react-sdk:** `basicLogger` was not re-exported causing compile time errors ([#1843](https://github.com/tarqd/js-core/issues/1843)) ([459c891](https://github.com/tarqd/js-core/commit/459c891a718ad52d2f34a7b6b9b53e3c858459cc))
* **react-sdk:** double evaluation on client side init ([#1229](https://github.com/tarqd/js-core/issues/1229)) ([6a4c42f](https://github.com/tarqd/js-core/commit/6a4c42f1bc2e73efa16b1317d10dbc6026d53628))
* **sdk-client:** `executeAfterTrack` ordering ([58e063b](https://github.com/tarqd/js-core/commit/58e063bad4651e25beea644425bea23a20f4870f))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-client-sdk bumped from ^4.10.4 to ^5.0.0
    * @launchdarkly/js-server-sdk-common bumped from ^2.21.6 to ^2.22.0
</details>

<details><summary>server-sdk-ai: 3.0.0</summary>

## [3.0.0](https://github.com/tarqd/js-core/compare/server-sdk-ai-v2.0.8...server-sdk-ai-v3.0.0) (2026-09-29)


###   BREAKING CHANGES

* Make AgentGraph traversal topological ([#1830](https://github.com/tarqd/js-core/issues/1830))
* Remove bedrock-specific tracker method ([#1385](https://github.com/tarqd/js-core/issues/1385))
* Remove `LDAIClient.agent`  use `LDAIClient.agentConfig` instead
* Remove `LDAIClient.agents`  use `LDAIClient.agentConfigs` instead
* Remove `LDAIClient.createChat`  use `LDAIClient.createModel` instead
* Remove `LDAIClient.initChat`  use `LDAIClient.createModel` instead
* Remove `ChatResponse` type and the `api/chat` module  use `RunnerResult` from `api/model` instead
* Change `Judge.evaluateMessages` parameter type from `ChatResponse` to `RunnerResult` (method retained per AI SDK spec Requirement 1.1.3)
* Remove `evaluationMetricKeys` (plural) field from `LDAIJudgeConfig` and `LDAIJudgeConfigDefault`  use `evaluationMetricKey` (singular) instead
* Remove `LDAIConfigTracker.trackOpenAIMetrics`  use `tracker.trackMetricsOf(getAIMetricsFromResponse, fn)` from `@launchdarkly/server-sdk-ai-openai` instead
* Remove `LDAIConfigTracker.trackVercelAISDKGenerateTextMetrics`  use `tracker.trackMetricsOf(getAIMetricsFromResponse, fn)` from `@launchdarkly/server-sdk-ai-vercel` instead
* Remove `createOpenAiUsage` helper  use `getAIMetricsFromResponse` from `@launchdarkly/server-sdk-ai-openai` instead
* Remove `createVercelAISDKTokenUsage` helper  use `getAIMetricsFromResponse`  from `@launchdarkly/server-sdk-ai-vercel` instead
* Remove `LDAIClient.config`  use `LDAIClient.completionConfig` instead
* Rename LDAIMetrics.usage and LDAIGraphMetrics.usage to .tokens ([#1366](https://github.com/tarqd/js-core/issues/1366))
* Remove AIProvider deprecated methods and create*/init* aliases (AIC-2388) ([#1363](https://github.com/tarqd/js-core/issues/1363))
* Build judge input as string and strip legacy judge config messages ([#1364](https://github.com/tarqd/js-core/issues/1364))
* Use LDAIGraphMetricSummary for graph metric summary ([#1362](https://github.com/tarqd/js-core/issues/1362))
* Flatten JudgeResponse and EvalScore into new LDJudgeResult ([#1284](https://github.com/tarqd/js-core/issues/1284))
* Add per-execution runId, at-most-once tracking, and cross-process tracker resumption ([#1270](https://github.com/tarqd/js-core/issues/1270))

### Features

* add Evaluator class for judge orchestration ([#1331](https://github.com/tarqd/js-core/issues/1331)) ([54faa69](https://github.com/tarqd/js-core/commit/54faa69aa28333f92d943de79307611fc05e2cbe))
* add ManagedAgent with evaluations support ([#1334](https://github.com/tarqd/js-core/issues/1334)) ([7f09c46](https://github.com/tarqd/js-core/commit/7f09c46cdec808ce9ebeb6487e6a2fa4fc817cbc))
* add ManagedGraphResult, GraphMetricSummary, and ManagedAgentGraph ([#1335](https://github.com/tarqd/js-core/issues/1335)) ([09fa1db](https://github.com/tarqd/js-core/commit/09fa1dbb134ea43ab8664b5e7903eb85883a0ac2))
* Add per-execution runId, at-most-once tracking, and cross-process tracker resumption ([#1270](https://github.com/tarqd/js-core/issues/1270)) ([fc25ab7](https://github.com/tarqd/js-core/commit/fc25ab7bd9577dbd1ea9826547793366a4e6814b))
* add region to model type ([#1423](https://github.com/tarqd/js-core/issues/1423)) ([7db5df5](https://github.com/tarqd/js-core/commit/7db5df587812e8d9b0140d2b389f16d341d55cd7))
* Add root-level tools map with customParameters to AI Config types ([#1295](https://github.com/tarqd/js-core/issues/1295)) ([487182b](https://github.com/tarqd/js-core/commit/487182b6a078b2aaf3868706d8f3c2709e8cc11c))
* Change `Judge.evaluateMessages` parameter type from `ChatResponse` to `RunnerResult` (method retained per AI SDK spec Requirement 1.1.3) ([86951b0](https://github.com/tarqd/js-core/commit/86951b0f66eed3f374d06c40e858dca04a837fda))
* Flatten JudgeResponse and EvalScore into new LDJudgeResult ([#1284](https://github.com/tarqd/js-core/issues/1284)) ([aba1221](https://github.com/tarqd/js-core/commit/aba1221d3b3d9f4eff44d805ed1c5e9f4d088e4a))
* Implement agent graph definitions ([#1282](https://github.com/tarqd/js-core/issues/1282)) ([e7d08e5](https://github.com/tarqd/js-core/commit/e7d08e5e3b84020e543fd54d40a8530ddc514f20))
* implements _template methods for fetching non-interpolated config ([#1774](https://github.com/tarqd/js-core/issues/1774)) ([d808ca8](https://github.com/tarqd/js-core/commit/d808ca8c0bc1abb1061de1e2ee989c929ac1cc53))
* introduce ManagedResult, RunnerResult, and LDAIMetricSummary ([#1332](https://github.com/tarqd/js-core/issues/1332)) ([5040122](https://github.com/tarqd/js-core/commit/5040122a5c6de88691820f02528550b983a14e58))
* Remove `ChatResponse` type and the `api/chat` module  use `RunnerResult` from `api/model` instead ([86951b0](https://github.com/tarqd/js-core/commit/86951b0f66eed3f374d06c40e858dca04a837fda))
* Remove `createOpenAiUsage` helper  use `getAIMetricsFromResponse` from `@launchdarkly/server-sdk-ai-openai` instead ([86951b0](https://github.com/tarqd/js-core/commit/86951b0f66eed3f374d06c40e858dca04a837fda))
* Remove `createVercelAISDKTokenUsage` helper  use `getAIMetricsFromResponse`  from `@launchdarkly/server-sdk-ai-vercel` instead ([86951b0](https://github.com/tarqd/js-core/commit/86951b0f66eed3f374d06c40e858dca04a837fda))
* Remove `evaluationMetricKeys` (plural) field from `LDAIJudgeConfig` and `LDAIJudgeConfigDefault`  use `evaluationMetricKey` (singular) instead ([86951b0](https://github.com/tarqd/js-core/commit/86951b0f66eed3f374d06c40e858dca04a837fda))
* Remove `LDAIClient.agent`  use `LDAIClient.agentConfig` instead ([86951b0](https://github.com/tarqd/js-core/commit/86951b0f66eed3f374d06c40e858dca04a837fda))
* Remove `LDAIClient.agents`  use `LDAIClient.agentConfigs` instead ([86951b0](https://github.com/tarqd/js-core/commit/86951b0f66eed3f374d06c40e858dca04a837fda))
* Remove `LDAIClient.config`  use `LDAIClient.completionConfig` instead ([86951b0](https://github.com/tarqd/js-core/commit/86951b0f66eed3f374d06c40e858dca04a837fda))
* Remove `LDAIClient.createChat`  use `LDAIClient.createModel` instead ([86951b0](https://github.com/tarqd/js-core/commit/86951b0f66eed3f374d06c40e858dca04a837fda))
* Remove `LDAIClient.initChat`  use `LDAIClient.createModel` instead ([86951b0](https://github.com/tarqd/js-core/commit/86951b0f66eed3f374d06c40e858dca04a837fda))
* Remove `LDAIConfigTracker.trackOpenAIMetrics`  use `tracker.trackMetricsOf(getAIMetricsFromResponse, fn)` from `@launchdarkly/server-sdk-ai-openai` instead ([86951b0](https://github.com/tarqd/js-core/commit/86951b0f66eed3f374d06c40e858dca04a837fda))
* Remove `LDAIConfigTracker.trackVercelAISDKGenerateTextMetrics`  use `tracker.trackMetricsOf(getAIMetricsFromResponse, fn)` from `@launchdarkly/server-sdk-ai-vercel` instead ([86951b0](https://github.com/tarqd/js-core/commit/86951b0f66eed3f374d06c40e858dca04a837fda))
* Remove AIProvider deprecated methods and create*/init* aliases (AIC-2388) ([#1363](https://github.com/tarqd/js-core/issues/1363)) ([ad66314](https://github.com/tarqd/js-core/commit/ad66314e403b83976987c54da9c6c70308c25078))
* Remove bedrock-specific tracker method ([#1385](https://github.com/tarqd/js-core/issues/1385)) ([f7dbee8](https://github.com/tarqd/js-core/commit/f7dbee806a15e8b9d5a6b7b49a461e16e5e757fe))
* Rename LDAIMetrics.usage and LDAIGraphMetrics.usage to .tokens ([#1366](https://github.com/tarqd/js-core/issues/1366)) ([ff932b7](https://github.com/tarqd/js-core/commit/ff932b74c10307519dc9f913a4330a5b7d79438d))
* Replace OpenAIProvider with Runner protocol implementation (AIC-2388) ([#1337](https://github.com/tarqd/js-core/issues/1337)) ([e32a955](https://github.com/tarqd/js-core/commit/e32a955c583db1bc382e2e0f3f459d459bc35984))
* **server-ai:** stamp modelKey and modelVersion on AI usage events (AIC-2858) ([#1794](https://github.com/tarqd/js-core/issues/1794)) ([a91a1e7](https://github.com/tarqd/js-core/commit/a91a1e7927262dcdbe1098b33095f529c48f7e8c))
* simplify evaluation schema to flat score/reasoning shape ([#1286](https://github.com/tarqd/js-core/issues/1286)) ([c132e9f](https://github.com/tarqd/js-core/commit/c132e9f44c8113cc5b795edfa6330f26c38081a6))
* Support fall back to model.parameters.tools when root tools absent ([#1330](https://github.com/tarqd/js-core/issues/1330)) ([2c65c61](https://github.com/tarqd/js-core/commit/2c65c61d1fd4df9b13d1e9b2f3bd055d4a77ec22))


### Bug Fixes

* Add support for graph metric tracking ([#1269](https://github.com/tarqd/js-core/issues/1269)) ([034a89d](https://github.com/tarqd/js-core/commit/034a89d3a8d8b718aecb459190f94f6e2ab14a3d))
* Build judge input as string and strip legacy judge config messages ([#1364](https://github.com/tarqd/js-core/issues/1364)) ([c90034b](https://github.com/tarqd/js-core/commit/c90034b58a3b75d92269e7c485f38f1266208f08))
* Improve usage reporting ([#1108](https://github.com/tarqd/js-core/issues/1108)) ([7a003b7](https://github.com/tarqd/js-core/commit/7a003b78d7de2f91bc9f58b231fb5f660eb09329))
* Make AgentGraph traversal topological ([#1830](https://github.com/tarqd/js-core/issues/1830)) ([d240b07](https://github.com/tarqd/js-core/commit/d240b07bd584f282b8588bfe111c1361e09d2328))
* Make defaultValue optional with a disabled default ([#1144](https://github.com/tarqd/js-core/issues/1144)) ([e46769b](https://github.com/tarqd/js-core/commit/e46769b872727cf6a1539f60a7e467c701769daf))
* Make judge runners non-multi-turn ([#1383](https://github.com/tarqd/js-core/issues/1383)) ([3d8f488](https://github.com/tarqd/js-core/commit/3d8f488354a5ed590859c7fe96429a2ab9f79c01))
* Move ManagedAgentGraph alongside other managed types ([#1384](https://github.com/tarqd/js-core/issues/1384)) ([22dd76d](https://github.com/tarqd/js-core/commit/22dd76d61a830d7ad37ae0136b59d1971973b424))
* Remove pre-release caution note from server-ai README ([#1387](https://github.com/tarqd/js-core/issues/1387)) ([0bafcbf](https://github.com/tarqd/js-core/commit/0bafcbfc22d5c39c3664d38bdb47183824a068e5))
* **server-ai:** unpin peer depedency reference ([#1788](https://github.com/tarqd/js-core/issues/1788)) ([dbc2bd5](https://github.com/tarqd/js-core/commit/dbc2bd5d8af9bcd7e4ffdc3e439cb6e4c7985a38))
* Update pre-release usage guidance ([#1098](https://github.com/tarqd/js-core/issues/1098)) ([07e3b5e](https://github.com/tarqd/js-core/commit/07e3b5ec500fb6d064d7d449e891b58054ac4af5))
* Use LDAIGraphMetricSummary for graph metric summary ([#1362](https://github.com/tarqd/js-core/issues/1362)) ([76a4bf2](https://github.com/tarqd/js-core/commit/76a4bf278999c81b27ce1aa29a3c1cb42e113fbc))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.21.6 to 2.22.0
  * peerDependencies
    * @launchdarkly/js-server-sdk-common bumped from ^2.0.0 to ^2.22.0
</details>

<details><summary>server-sdk-ai-langchain: 0.9.0</summary>

## [0.9.0](https://github.com/tarqd/js-core/compare/server-sdk-ai-langchain-v0.8.18...server-sdk-ai-langchain-v0.9.0) (2026-09-29)


###   BREAKING CHANGES

* Rename LDAIMetrics.usage and LDAIGraphMetrics.usage to .tokens ([#1366](https://github.com/tarqd/js-core/issues/1366))
* Remove AIProvider deprecated methods and create*/init* aliases (AIC-2388) ([#1363](https://github.com/tarqd/js-core/issues/1363))
* Build judge input as string and strip legacy judge config messages ([#1364](https://github.com/tarqd/js-core/issues/1364))
* Add optional OTEL LLM instrumentation to provider packages ([#1122](https://github.com/tarqd/js-core/issues/1122))

### Features

* Add optional OTEL LLM instrumentation to provider packages ([#1122](https://github.com/tarqd/js-core/issues/1122)) ([1ca3ce7](https://github.com/tarqd/js-core/commit/1ca3ce7b42e274d4f2c9e338fab6996eaf1fd1be))
* Bump to LangChain 1.0 and drop community package requirement ([#1311](https://github.com/tarqd/js-core/issues/1311)) ([f5a1c29](https://github.com/tarqd/js-core/commit/f5a1c295e51ff07e9003109a873709ea14dad343))
* Remove AIProvider deprecated methods and create*/init* aliases (AIC-2388) ([#1363](https://github.com/tarqd/js-core/issues/1363)) ([ad66314](https://github.com/tarqd/js-core/commit/ad66314e403b83976987c54da9c6c70308c25078))
* Rename LDAIMetrics.usage and LDAIGraphMetrics.usage to .tokens ([#1366](https://github.com/tarqd/js-core/issues/1366)) ([ff932b7](https://github.com/tarqd/js-core/commit/ff932b74c10307519dc9f913a4330a5b7d79438d))
* Replace LangChainProvider with Runner protocol implementation (AIC-2388) ([#1338](https://github.com/tarqd/js-core/issues/1338)) ([113a0d2](https://github.com/tarqd/js-core/commit/113a0d289ce764a3301140b2b14123ce5da9b42e))
* Support conversation history directly in AI Provider model runners ([#1371](https://github.com/tarqd/js-core/issues/1371)) ([b246631](https://github.com/tarqd/js-core/commit/b246631bfcaf7155dec52a1580cf4ffb329ebfaa))


### Bug Fixes

* Build judge input as string and strip legacy judge config messages ([#1364](https://github.com/tarqd/js-core/issues/1364)) ([c90034b](https://github.com/tarqd/js-core/commit/c90034b58a3b75d92269e7c485f38f1266208f08))
* Bump peer dependencies ([#1128](https://github.com/tarqd/js-core/issues/1128)) ([85e8f43](https://github.com/tarqd/js-core/commit/85e8f4383bfc34e2d52d016f7ae20c8aa5dab912))
* Make judge runners non-multi-turn ([#1383](https://github.com/tarqd/js-core/issues/1383)) ([3d8f488](https://github.com/tarqd/js-core/commit/3d8f488354a5ed590859c7fe96429a2ab9f79c01))
* Update pre-release usage guidance ([#1098](https://github.com/tarqd/js-core/issues/1098)) ([07e3b5e](https://github.com/tarqd/js-core/commit/07e3b5ec500fb6d064d7d449e891b58054ac4af5))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/server-sdk-ai bumped from ^2.0.8 to ^3.0.0
  * peerDependencies
    * @launchdarkly/server-sdk-ai bumped from ^1.1.1 to ^3.0.0
</details>

<details><summary>server-sdk-ai-openai: 0.8.0</summary>

## [0.8.0](https://github.com/tarqd/js-core/compare/server-sdk-ai-openai-v0.7.18...server-sdk-ai-openai-v0.8.0) (2026-09-29)


###   BREAKING CHANGES

* Rename LDAIMetrics.usage and LDAIGraphMetrics.usage to .tokens ([#1366](https://github.com/tarqd/js-core/issues/1366))
* Remove AIProvider deprecated methods and create*/init* aliases (AIC-2388) ([#1363](https://github.com/tarqd/js-core/issues/1363))
* Build judge input as string and strip legacy judge config messages ([#1364](https://github.com/tarqd/js-core/issues/1364))
* Add optional OTEL LLM instrumentation to provider packages ([#1122](https://github.com/tarqd/js-core/issues/1122))

### Features

* Add optional OTEL LLM instrumentation to provider packages ([#1122](https://github.com/tarqd/js-core/issues/1122)) ([1ca3ce7](https://github.com/tarqd/js-core/commit/1ca3ce7b42e274d4f2c9e338fab6996eaf1fd1be))
* Remove AIProvider deprecated methods and create*/init* aliases (AIC-2388) ([#1363](https://github.com/tarqd/js-core/issues/1363)) ([ad66314](https://github.com/tarqd/js-core/commit/ad66314e403b83976987c54da9c6c70308c25078))
* Rename LDAIMetrics.usage and LDAIGraphMetrics.usage to .tokens ([#1366](https://github.com/tarqd/js-core/issues/1366)) ([ff932b7](https://github.com/tarqd/js-core/commit/ff932b74c10307519dc9f913a4330a5b7d79438d))
* Replace OpenAIProvider with Runner protocol implementation (AIC-2388) ([#1337](https://github.com/tarqd/js-core/issues/1337)) ([e32a955](https://github.com/tarqd/js-core/commit/e32a955c583db1bc382e2e0f3f459d459bc35984))
* Support conversation history directly in AI Provider model runners ([#1371](https://github.com/tarqd/js-core/issues/1371)) ([b246631](https://github.com/tarqd/js-core/commit/b246631bfcaf7155dec52a1580cf4ffb329ebfaa))


### Bug Fixes

* Build judge input as string and strip legacy judge config messages ([#1364](https://github.com/tarqd/js-core/issues/1364)) ([c90034b](https://github.com/tarqd/js-core/commit/c90034b58a3b75d92269e7c485f38f1266208f08))
* Bump peer dependencies ([#1128](https://github.com/tarqd/js-core/issues/1128)) ([85e8f43](https://github.com/tarqd/js-core/commit/85e8f4383bfc34e2d52d016f7ae20c8aa5dab912))
* Make judge runners non-multi-turn ([#1383](https://github.com/tarqd/js-core/issues/1383)) ([3d8f488](https://github.com/tarqd/js-core/commit/3d8f488354a5ed590859c7fe96429a2ab9f79c01))
* Update pre-release usage guidance ([#1098](https://github.com/tarqd/js-core/issues/1098)) ([07e3b5e](https://github.com/tarqd/js-core/commit/07e3b5ec500fb6d064d7d449e891b58054ac4af5))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.21.6 to 2.22.0
    * @launchdarkly/server-sdk-ai bumped from ^2.0.8 to ^3.0.0
  * peerDependencies
    * @launchdarkly/server-sdk-ai bumped from ^1.1.1 to ^3.0.0
</details>

<details><summary>server-sdk-ai-vercel: 0.8.0</summary>

## [0.8.0](https://github.com/tarqd/js-core/compare/server-sdk-ai-vercel-v0.7.18...server-sdk-ai-vercel-v0.8.0) (2026-09-29)


###   BREAKING CHANGES

* Rename LDAIMetrics.usage and LDAIGraphMetrics.usage to .tokens ([#1366](https://github.com/tarqd/js-core/issues/1366))
* Remove AIProvider deprecated methods and create*/init* aliases (AIC-2388) ([#1363](https://github.com/tarqd/js-core/issues/1363))
* Build judge input as string and strip legacy judge config messages ([#1364](https://github.com/tarqd/js-core/issues/1364))
* Add optional OTEL LLM instrumentation to provider packages ([#1122](https://github.com/tarqd/js-core/issues/1122))

### Features

* Add optional OTEL LLM instrumentation to provider packages ([#1122](https://github.com/tarqd/js-core/issues/1122)) ([1ca3ce7](https://github.com/tarqd/js-core/commit/1ca3ce7b42e274d4f2c9e338fab6996eaf1fd1be))
* Remove AIProvider deprecated methods and create*/init* aliases (AIC-2388) ([#1363](https://github.com/tarqd/js-core/issues/1363)) ([ad66314](https://github.com/tarqd/js-core/commit/ad66314e403b83976987c54da9c6c70308c25078))
* Rename LDAIMetrics.usage and LDAIGraphMetrics.usage to .tokens ([#1366](https://github.com/tarqd/js-core/issues/1366)) ([ff932b7](https://github.com/tarqd/js-core/commit/ff932b74c10307519dc9f913a4330a5b7d79438d))
* replace VercelProvider with Runner protocol implementation (AIC-2388) ([#1339](https://github.com/tarqd/js-core/issues/1339)) ([d5a62de](https://github.com/tarqd/js-core/commit/d5a62def46b683d4c2e7de0c16ee7fc82e40b66a))
* Support conversation history directly in AI Provider model runners ([#1371](https://github.com/tarqd/js-core/issues/1371)) ([b246631](https://github.com/tarqd/js-core/commit/b246631bfcaf7155dec52a1580cf4ffb329ebfaa))


### Bug Fixes

* add zod devDependency to Vercel provider (peer dep of ai v5) ([aab6226](https://github.com/tarqd/js-core/commit/aab62262800dfc0b9d4c3c6f9ee71a3f63519959))
* Build judge input as string and strip legacy judge config messages ([#1364](https://github.com/tarqd/js-core/issues/1364)) ([c90034b](https://github.com/tarqd/js-core/commit/c90034b58a3b75d92269e7c485f38f1266208f08))
* Bump peer dependencies ([#1128](https://github.com/tarqd/js-core/issues/1128)) ([85e8f43](https://github.com/tarqd/js-core/commit/85e8f4383bfc34e2d52d016f7ae20c8aa5dab912))
* Make judge runners non-multi-turn ([#1383](https://github.com/tarqd/js-core/issues/1383)) ([3d8f488](https://github.com/tarqd/js-core/commit/3d8f488354a5ed590859c7fe96429a2ab9f79c01))
* Update pre-release usage guidance ([#1098](https://github.com/tarqd/js-core/issues/1098)) ([07e3b5e](https://github.com/tarqd/js-core/commit/07e3b5ec500fb6d064d7d449e891b58054ac4af5))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/server-sdk-ai bumped from ^2.0.8 to ^3.0.0
  * peerDependencies
    * @launchdarkly/server-sdk-ai bumped from ^1.1.1 to ^3.0.0
</details>

<details><summary>shopify-oxygen-sdk: 0.1.28</summary>

## [0.1.28](https://github.com/tarqd/js-core/compare/shopify-oxygen-sdk-v0.1.27...shopify-oxygen-sdk-v0.1.28) (2026-09-29)


### Bug Fixes

* enabling eslint `ban-types` rule and fixed string typing ([#1313](https://github.com/tarqd/js-core/issues/1313)) ([f6d907f](https://github.com/tarqd/js-core/commit/f6d907f1a65abd0b41827f3c827e6dad896b16b1))
* explicit return types and TS6 source compatibility fixes ([#1418](https://github.com/tarqd/js-core/issues/1418)) ([9c131a2](https://github.com/tarqd/js-core/commit/9c131a2e731c97a7fd4cf7ec1fe11efbbf49d6fb))
* **oxygen-sdk:** document event sending and align event sending logic with other edge sdks ([#1844](https://github.com/tarqd/js-core/issues/1844)) ([86ed0ad](https://github.com/tarqd/js-core/commit/86ed0adff8209d49725d6d10acb9f6b03c02239c))
* server sdk could send user agent headers under a different header name ([#1860](https://github.com/tarqd/js-core/issues/1860)) ([669662a](https://github.com/tarqd/js-core/commit/669662a304c10bcb2b683e0c7ea990f43679916b))
* **shopify:** standardizing the pre-release banner ([#1268](https://github.com/tarqd/js-core/issues/1268)) ([82adddb](https://github.com/tarqd/js-core/commit/82adddb56bcd752954a0107ff3983cf57d1bdb26))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.21.6 to 2.22.0
</details>

<details><summary>vercel-server-sdk: 1.3.63</summary>

## [1.3.63](https://github.com/tarqd/js-core/compare/vercel-server-sdk-v1.3.62...vercel-server-sdk-v1.3.63) (2026-09-29)


### Bug Fixes

* Bump vercel SDK to latest  ([#1832](https://github.com/tarqd/js-core/issues/1832)) ([b0167a2](https://github.com/tarqd/js-core/commit/b0167a20b3ac599a231946b03efd9f790cf27d39))
* **sdk-server-common:** use subpath import for `semver` module ([#1885](https://github.com/tarqd/js-core/issues/1885)) ([2de6c8c](https://github.com/tarqd/js-core/commit/2de6c8cc39e6b7a4e4092af0731b2de124d56b94))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common-edge bumped from 2.6.35 to 2.6.36
</details>

<details><summary>vue-client-sdk: 4.0.0</summary>

## [4.0.0](https://github.com/tarqd/js-core/compare/vue-client-sdk-v3.0.2...vue-client-sdk-v4.0.0) (2026-09-29)


###   BREAKING CHANGES

* Implicit anonymous-user fallback removed; context is now required in LDVuePluginOptions and createLDProvider.

### Features

* Bootstrap support to eliminate initialization waterfall ([d3b97a8](https://github.com/tarqd/js-core/commit/d3b97a8c3c8e00774b6edcba07f0d6542233a4a2))
* createClient for programmatic client creation (BYO client pattern) ([d3b97a8](https://github.com/tarqd/js-core/commit/d3b97a8c3c8e00774b6edcba07f0d6542233a4a2))
* LDVueClient type extending base LDClient with Vue lifecycle helpers ([d3b97a8](https://github.com/tarqd/js-core/commit/d3b97a8c3c8e00774b6edcba07f0d6542233a4a2))
* Multi-environment support via createLDVueInstanceKey ([d3b97a8](https://github.com/tarqd/js-core/commit/d3b97a8c3c8e00774b6edcba07f0d6542233a4a2))
* Provider component API: createLDProvider, createLDProviderWithClient ([d3b97a8](https://github.com/tarqd/js-core/commit/d3b97a8c3c8e00774b6edcba07f0d6542233a4a2))
* Provider slots for initialization states (default, initializing, failed) ([d3b97a8](https://github.com/tarqd/js-core/commit/d3b97a8c3c8e00774b6edcba07f0d6542233a4a2))
* Reactive flag keys (MaybeRefOrGetter&lt;string&gt;) on all variation composables ([d3b97a8](https://github.com/tarqd/js-core/commit/d3b97a8c3c8e00774b6edcba07f0d6542233a4a2))
* startOptions for controlling initialization timeout ([d3b97a8](https://github.com/tarqd/js-core/commit/d3b97a8c3c8e00774b6edcba07f0d6542233a4a2))
* Typed variation composables: useBoolVariation, useStringVariation, ([d3b97a8](https://github.com/tarqd/js-core/commit/d3b97a8c3c8e00774b6edcba07f0d6542233a4a2))
* useInitializationStatus replaces useLDReady with richer status object ([d3b97a8](https://github.com/tarqd/js-core/commit/d3b97a8c3c8e00774b6edcba07f0d6542233a4a2))
* Variation detail composables for each type (useBoolVariationDetail, etc.) ([d3b97a8](https://github.com/tarqd/js-core/commit/d3b97a8c3c8e00774b6edcba07f0d6542233a4a2))
* Wire packages/sdk/vue into release-please as an active prerelease ([#1850](https://github.com/tarqd/js-core/issues/1850)) ([4f5ef29](https://github.com/tarqd/js-core/commit/4f5ef292f873103db10e06df338c90ca5b791a7e))


### Bug Fixes

* **vue-sdk:** re-export `LDPlugin` from base impl ([#1897](https://github.com/tarqd/js-core/issues/1897)) ([e21f484](https://github.com/tarqd/js-core/commit/e21f4842f2f1f5e3223e35e26cb82bb171681f2f))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-client-sdk bumped from 4.10.4 to 5.0.0
</details>

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).