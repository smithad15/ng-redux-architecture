import { ActionsObservable } from 'redux-observable';
import { MiddlewareAPI } from 'redux';
import { Observable } from 'rxjs/Observable';

import { AppState } from './app-state.type';
import { Action } from './action.type';
import { ApiError } from '../../api';

/**
 * Adjustment of Epic type from redux-observable to decouple the incoming action
 * type and the outgoing action type. Also includes some type references for
 * convenience.
 */
export type Epic<In, Out = any> = (
  action$: ActionsObservable<In>,
  store?: MiddlewareAPI<AppState>,
) => Observable<Action<ApiError> | Out>;
