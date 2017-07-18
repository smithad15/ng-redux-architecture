import { createSelector } from 'reselect';

import { AppState } from '../../../root';

export const api = (state: AppState) => state.api;
export const askedFor = (state: AppState) => api(state).askedFor;
export const pending = (state: AppState) => api(state).pending;
export const errors = (state: AppState) => api(state).errors;

export const hasPending = (state: AppState) => !!pending(state).length;
export const hasErrors = (state: AppState) => !!errors(state).length;

export const actionIsPending = (actionType: string) =>
  createSelector(
    pending,
    actions => !!actions.find(action => action.type === actionType),
  );

export const actionHasBeenAskedFor = (actionType: string) =>
  createSelector(
    askedFor,
    actions => !!actions.find(action => action.type === actionType),
  );

export const actionHasError = (actionType: string) =>
  createSelector(
    errors,
    actions => !!actions.find(action => action.type === actionType),
  );

export const getErrorAction = (actionType: string) =>
  createSelector(errors, actions =>
    actions.find(action => action.type === actionType),
  );
