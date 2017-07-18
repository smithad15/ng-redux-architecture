import { apiReducer } from '../reducer';
import { AppState, createErrorAction } from '../../../root';
import { apiErrorMock } from '../../types';
import * as selectors from './api.selectors';
import * as AuthActions from '../../../auth/store/actions';

describe('ApiSelectors', () => {
  const initialState = apiReducer(undefined, { type: '' });

  it('should get the root Api state', () => {
    const state: AppState = { api: { ...initialState } };
    const expected = initialState;
    const actual = selectors.api(state);
    expect(actual).toEqual(expected);
  });

  it('should get the list of asked for actions', () => {
    const action = AuthActions.loginUser(undefined, undefined);
    const state: AppState = { api: { ...initialState, askedFor: [action] } };
    const expected = [action];
    const actual = selectors.askedFor(state);
    expect(actual).toEqual(expected);
  });

  it('should get the list of pending actions', () => {
    const action = AuthActions.loginUser(undefined, undefined);
    const state: AppState = { api: { ...initialState, pending: [action] } };
    const expected = [action];
    const actual = selectors.pending(state);
    expect(actual).toEqual(expected);
  });

  it('should get the list of current errors', () => {
    const action = createErrorAction(AuthActions.USER_LOGGED_IN, apiErrorMock);
    const state: AppState = { api: { ...initialState, errors: [action] } };
    const expected = [action];
    const actual = selectors.errors(state);
    expect(actual).toEqual(expected);
  });

  describe('should be able to determine if any actions are pending', () => {
    const action = AuthActions.loginUser(undefined, undefined);

    it('and return true if there are', () => {
      const state: AppState = { api: { ...initialState, pending: [action] } };
      const expected = true;
      const actual = selectors.hasPending(state);
      expect(actual).toEqual(expected);
    });

    it('and return false if there are not', () => {
      const state: AppState = { api: initialState };
      const expected = false;
      const actual = selectors.hasPending(state);
      expect(actual).toEqual(expected);
    });
  });

  describe('should be able to determine if a given action type is pending', () => {
    const action = AuthActions.loginUser(undefined, undefined);

    it('and return true if it is', () => {
      const state: AppState = { api: { ...initialState, pending: [action] } };
      const expected = true;
      const actual = selectors.actionIsPending(action.type)(state);
      expect(actual).toEqual(expected);
    });

    it('and return false if it is not', () => {
      const state: AppState = { api: initialState };
      const expected = false;
      const actual = selectors.actionIsPending(action.type)(state);
      expect(actual).toEqual(expected);
    });
  });

  describe('should be able to determine if a given action type has been asked for before', () => {
    const action = AuthActions.loginUser(undefined, undefined);

    it('and return true if it has', () => {
      const state: AppState = { api: { ...initialState, askedFor: [action] } };
      const expected = true;
      const actual = selectors.actionHasBeenAskedFor(action.type)(state);
      expect(actual).toEqual(expected);
    });

    it('and return false if it has not', () => {
      const state: AppState = { api: { ...initialState, askedFor: [] } };
      const expected = false;
      const actual = selectors.actionHasBeenAskedFor(action.type)(state);
      expect(actual).toEqual(expected);
    });
  });

  describe('should be able to determine if there are any errors', () => {
    const errorAction = createErrorAction(
      AuthActions.USER_LOGGED_IN,
      apiErrorMock,
    );

    it('and return true if there are', () => {
      const state: AppState = {
        api: { ...initialState, errors: [errorAction] },
      };
      const expected = true;
      const actual = selectors.hasErrors(state);
      expect(actual).toEqual(expected);
    });

    it('and return false if there are not', () => {
      const state: AppState = { api: { ...initialState } };
      const expected = false;
      const actual = selectors.hasErrors(state);
      expect(actual).toEqual(expected);
    });
  });

  describe('should be able to determing if a given action type has errored out', () => {
    const action = AuthActions.userLoggedIn(undefined);
    const errorAction = createErrorAction(
      AuthActions.USER_LOGGED_IN,
      apiErrorMock,
    );

    it('and return true if it has', () => {
      const state: AppState = {
        api: { ...initialState, errors: [errorAction] },
      };
      const expected = true;
      const actual = selectors.actionHasError(action.type)(state);
      expect(actual).toEqual(expected);
    });

    it('and return false if it has not', () => {
      const state: AppState = { api: { ...initialState } };
      const expected = false;
      const actual = selectors.actionHasError(action.type)(state);
      expect(actual).toEqual(expected);
    });
  });

  describe('should be able to return the error action that matches the resolved type', () => {
    const action = AuthActions.userLoggedIn(undefined);
    const errorAction = createErrorAction(
      AuthActions.USER_LOGGED_IN,
      apiErrorMock,
    );

    it('and return the acton if there is a match', () => {
      const state: AppState = {
        api: { ...initialState, errors: [errorAction] },
      };
      const expected = errorAction;
      const actual = selectors.getErrorAction(action.type)(state);
      expect(actual).toEqual(expected);
    });

    it('and return undefined if there is no match', () => {
      const state: AppState = { api: { ...initialState } };
      const expected = undefined;
      const actual = selectors.getErrorAction(action.type)(state);
      expect(actual).toEqual(expected);
    });
  });
});
