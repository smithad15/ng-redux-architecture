/**
 * WARNING: We have NOT fully figured out the redux flow, and as such
 * DO NOT add to this file as the implementation is probably wrong.
 */

import { Injectable } from '@angular/core';
import { combineEpics, Epic } from 'redux-observable';

import { Action, AppState } from './types';

@Injectable()
export class RootEpic {
  rootEpic: Epic<Action<any>, AppState>;

  constructor() {
    this.rootEpic = combineEpics<Action<any>, AppState>();
  }
}
