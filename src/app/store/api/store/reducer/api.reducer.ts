import { combineReducers } from 'redux';
import { invertObj } from 'ramda';

import { ApiState } from '../types';
import { Action } from '../../../root';
import { pendingToResolvedActionTypeMap } from './pending-to-resolved-action-type-map.const';
import { ApiError } from '../../types';

const initialState: ApiState = {
  askedFor: [],
  pending: [],
  errors: [],
};

const pendingActionTypes = Object.keys(pendingToResolvedActionTypeMap);
const resolutionActionTypes = Object.values(pendingToResolvedActionTypeMap);
const resolvedToPendingActionTypeMap = invertObj(
  pendingToResolvedActionTypeMap,
);

export const apiReducer = combineReducers<ApiState>({
  askedFor,
  pending,
  errors,
});

function askedFor(state = initialState.askedFor, action: Action): Action[] {
  if (isPendingAction(action.type)) {
    return [...state, action];
  }
  return state;
}

function pending(state = initialState.pending, action: Action): Action[] {
  if (isPendingAction(action.type)) {
    return [...state, action];
  }

  if (isResolutionAction(action.type)) {
    return state.filter(removePendingAction(action.type));
  }

  return state;
}

function errors(
  state = initialState.errors,
  action: Action<ApiError>,
): Action<ApiError>[] {
  if (action.error) {
    return [...state, action];
  }

  if (isPendingAction(action.type)) {
    return state.filter(removeErrorAction(action.type));
  }

  return state;
}

function isPendingAction(actionType: string): boolean {
  return pendingActionTypes.includes(actionType);
}

function isResolutionAction(actionType: string): boolean {
  return resolutionActionTypes.includes(actionType);
}

function removePendingAction(actionType: string) {
  return pendingAction =>
    pendingAction.type !== resolvedToPendingActionTypeMap[actionType];
}

function removeErrorAction(actionType: string) {
  return errorAction =>
    errorAction.type !== pendingToResolvedActionTypeMap[actionType];
}
