import { Action } from './types';
import { epicActionError, createErrorAction } from './action.utils';
import { apiErrorMock, ApiError } from '../api';

describe('Action Utils', () => {
  describe('createErrorAction()', () => {
    it('should return an error action', () => {
      const error = apiErrorMock;
      const actionType = 'actionType';
      const expectedAction = {
        type: actionType,
        payload: error,
        error: true,
      };
      const actualAction = createErrorAction(actionType, error);
      expect(actualAction).toEqual(expectedAction);
    });
  });

  describe('epicActionError()', () => {
    it('should create error action object', () => {
      const actionType = 'actionType';
      const error = apiErrorMock;

      const actionObject$ = epicActionError(actionType)(error);
      const expectedActionObject: Action<ApiError> = {
        type: actionType,
        payload: error,
        error: true,
      };

      actionObject$.subscribe(actualActionObject => {
        expect(actualActionObject).toEqual(expectedActionObject);
      });
    });
  });
});
