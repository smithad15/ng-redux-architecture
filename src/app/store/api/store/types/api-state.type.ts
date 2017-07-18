import { Action } from '../../../root';
import { ApiError } from '../../types';

export interface ApiState {
  readonly askedFor: Action<any, any>[];
  readonly pending: Action<any, any>[];
  readonly errors: Action<ApiError, any>[];
}
