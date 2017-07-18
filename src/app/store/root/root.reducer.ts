/**
 * WARNING: We have NOT fully figured out the redux flow, and as such
 * DO NOT add to this file as the implementation is probably wrong.
 */

import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';
import { defaultFormReducer, composeReducers } from '@angular-redux/form';

import { AppState, Action } from './types';
import { apiReducer } from '../api';

export const initState: AppState = {};

// Note: If you're adding something new to the store (this reducer),
// make sure to add the new state to session/local storage if needed.
// See `store.service.ts`

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers<AppState>({
    api: apiReducer,
    route: routerReducer,
  }),
);
