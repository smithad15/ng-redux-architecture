import { Observable } from 'rxjs/Observable';
import { Action } from './types';
import { ApiError } from '../api';

type EpicErrorHandler = (error: ApiError) => Observable<Action<ApiError>>;

export function createErrorAction(
  actionType: string,
  error: ApiError,
): Action<ApiError> {
  return {
    type: actionType,
    payload: error,
    error: true,
  };
}

export function epicActionError(actionType: string): EpicErrorHandler {
  return (error: ApiError) =>
    Observable.of(createErrorAction(actionType, error));
}
