/* eslint-disable max-classes-per-file */

/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { EventEmitter } from 'events';

import {
  BasicLogger,
  LDContext,
  LDEvaluationDetail,
  LDEvaluationDetailTyped,
  LDEvaluationReason,
  LDFlagSet,
  LDLogger,
} from '@launchdarkly/js-sdk-common';
import { LDFlagsState } from '@launchdarkly/js-server-sdk-common';

import { LDClient as LDClientCommon } from './api/LDClient';
import { LDServerSideClient } from './server-api/LDClient';

class DummyFlagState implements LDFlagsState {
  valid: boolean;
  constructor() {
    this.valid = false;
  }

  getFlagValue(key: string) {
    return null;
  }
  getFlagReason(key: string): LDEvaluationReason | null {
    return null;
  }
  allValues(): LDFlagSet {
    return {};
  }
  toJSON(): object {
    return {};
  }
}

function errorReason(flagState: LDFlagsState): LDEvaluationReason {
  return {
    kind: 'ERROR',
    errorKind: flagState.valid ? 'UNKNOWN_FLAG' : 'CLIENT_NOT_READY',
  };
}
export default class LDSSRClient implements LDClientCommon {
  logger: LDLogger;

  private emitter: EventEmitter;
  private flagState: DummyFlagState;
  private context: LDContext;
  private initPromise: Promise<void>;
  constructor(
    private readonly sourceClient: LDServerSideClient,
    context: LDContext,
    logger?: LDLogger,
  ) {
    this.sourceClient = sourceClient;
    this.logger = logger || new BasicLogger({});
    this.emitter = new EventEmitter();
    this.flagState = new DummyFlagState();

    this.context = context;
    if (!this.context) {
      throw new Error('context is required');
    }
    this.initPromise = this.sourceClient
      .waitForInitialization()
      .then(() => this.onInitialized())
      .finally(() => this.emitter.emit('ready'));
    this.sourceClient.on('update', ({ key }) => {
      const previousState = this.flagState;
      this.sourceClient
        .allFlagsState(this.context, {
          withReasons: true,
          clientSideOnly: true,
        })
        .then((state) => {
          this.flagState = state;
          this.emitter.emit(
            `change:${key}`,
            state.getFlagValue(key),
            previousState.getFlagValue(key),
          );
          this.emitter.emit('change', state.allValues());
        });
    });
  }
  off(key: string, callback: (...args: any[]) => void, context?: any): void {
    this.emitter.off(key, callback);
  }
  on(key: string, callback: (...args: any[]) => void, context?: any): void {
    this.emitter.on(key, callback);
  }

  private onInitialized(): Promise<void> {
    return this.sourceClient
      .allFlagsState(this.context, {
        withReasons: true,
        clientSideOnly: true,
      })
      .then((state) => {
        const oldFlagState = this.flagState;
        this.flagState = state;
        // compare old and new flag state
        const oldValues = oldFlagState.allValues();
        const newValues = state.allValues();
        const changedKeys = Object.keys(newValues).filter(
          (key) => oldValues[key] !== newValues[key],
        );
        const newKeys = Object.keys(newValues).filter((key) => !(key in oldValues));
        const removedKeys = Object.keys(oldValues).filter((key) => !(key in newValues));
        // emit events
        changedKeys.forEach((key) => {
          this.emitter.emit(`change:${key}`, newValues[key], oldValues[key]);
        });
        newKeys.forEach((key) => {
          this.emitter.emit(`new:${key}`, newValues[key]);
        });
        removedKeys.forEach((key) => {
          this.emitter.emit(`delete:${key}`, undefined, oldValues[key]);
        });
        this.emitter.emit('change', newValues);
      });
  }

  allFlags(): LDFlagSet {
    return this.flagState.allValues();
  }
  boolVariation(key: string, defaultValue: boolean): boolean {
    return this.flagState.getFlagValue(key) ?? defaultValue;
  }
  boolVariationDetail(key: string, defaultValue: boolean): LDEvaluationDetailTyped<boolean> {
    const result = this.flagState.getFlagValue(key);
    if (result === null) {
      return {
        value: defaultValue,
        variationIndex: null,
        reason: errorReason(this.flagState),
      };
    }
    return result as LDEvaluationDetailTyped<boolean>;
  }
  close(): void {
    // no op
  }
  flush(): Promise<{ error?: Error | undefined; result: boolean }> {
    return Promise.resolve({ result: true });
  }
  getContext(): LDContext {
    return this.context;
  }
  identify(context: LDContext, hash?: string | undefined): Promise<void> {
    return this.sourceClient.allFlagsState(context).then((state) => {
      this.flagState = state;
      this.onInitialized();
    });
  }
  jsonVariation(key: string, defaultValue: unknown): unknown {
    return this.flagState.getFlagValue(key) ?? defaultValue;
  }
  jsonVariationDetail(key: string, defaultValue: unknown): LDEvaluationDetailTyped<unknown> {
    return this.variationDetail(key, defaultValue) as LDEvaluationDetailTyped<unknown>;
  }

  numberVariation(key: string, defaultValue: number): number {
    return this.flagState.getFlagValue(key) ?? defaultValue;
  }
  numberVariationDetail(key: string, defaultValue: number): LDEvaluationDetailTyped<number> {
    return this.variationDetail(key, defaultValue) as LDEvaluationDetailTyped<number>;
  }

  setStreaming(value?: boolean | undefined): void {
    // no op
    // TODO should prevent getting updates if streaming is false
  }
  stringVariation(key: string, defaultValue: string): string {
    return this.flagState.getFlagValue(key) ?? defaultValue;
  }
  stringVariationDetail(key: string, defaultValue: string): LDEvaluationDetailTyped<string> {
    return this.variationDetail(key, defaultValue) as LDEvaluationDetailTyped<string>;
  }
  track(key: string, data?: any, metricValue?: number | undefined): void {
    this.sourceClient.track(key, this.context, data, metricValue);
  }
  variation(key: string, defaultValue?: any) {
    return this.flagState.getFlagValue(key) ?? defaultValue;
  }
  variationDetail(key: string, defaultValue?: any): LDEvaluationDetail {
    const result = this.flagState.getFlagReason(key);
    if (result === null) {
      return {
        value: defaultValue,
        variationIndex: null,
        reason: errorReason(this.flagState),
      };
    }
    return {
      value: this.flagState.getFlagValue(key),
      variationIndex: null,
      reason: result,
    };
  }
  waitForInitialization(): Promise<void> {
    return this.initPromise;
  }
  waitUntilReady(): Promise<void> {
    return this.initPromise.catch(() => {});
  }
}

export function initFromServerSideClient( // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sourceClient: LDServerSideClient,
  context: LDContext,
  logger?: LDLogger,
): LDSSRClient {
  return new LDSSRClient(sourceClient, context, logger);
}
