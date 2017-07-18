// import { apiReducer } from './api.reducer';
// import { ApiState } from '../types';
// import { createErrorAction } from '../../../root';
// import { apiErrorMock } from '../../types';

// describe('ApiReducer', () => {
//   const reducer = apiReducer;
//   const initialState = reducer(undefined, { type: '' });

//   it('should return an initial state', () => {
//     const expected: ApiState = {
//       askedFor: [],
//       pending: [],
//       errors: [],
//     };
//     expect(initialState).toEqual(expected);
//   });

//   describe('when an action is called that starts an async process', () => {
//     const action = AuthActions.loginUser(undefined, undefined);
//     const loginErrorAction = createErrorAction(
//       AuthActions.USER_LOGGED_IN,
//       apiErrorMock,
//     );
//     const errorAction = createErrorAction(
//       'MOCK_ASYNC_RESOLVE_TYPE',
//       apiErrorMock,
//     );
//     const state: ApiState = {
//       ...initialState,
//       errors: [loginErrorAction, errorAction],
//     };

//     it('should add that action to the askedFor collection', () => {
//       const expected = [action];
//       const actual = reducer(undefined, action).askedFor;
//       expect(actual).toEqual(expected);
//     });

//     it('should add that action to the pending collection', () => {
//       const expected = [action];
//       const actual = reducer(undefined, action).pending;
//       expect(actual).toEqual(expected);
//     });

//     it('should remove any corresponding error actions from the errors collection', () => {
//       const expected = [errorAction];
//       const actual = reducer(state, action).errors;
//       expect(actual).toEqual(expected);
//     });
//   });

//   describe('when an action is called that does not start an async process', () => {
//     const action = { type: 'SOME_SYNC_ACTION' };

//     it('should not add that action to the askedFor collection', () => {
//       const expected = [];
//       const actual = reducer(undefined, action).askedFor;
//       expect(actual).toEqual(expected);
//     });

//     it('should not add that action to the pending collection', () => {
//       const expected = [];
//       const actual = reducer(undefined, action).pending;
//       expect(actual).toEqual(expected);
//     });
//   });

//   describe('when an action is called that resolves an async process', () => {
//     const action = AuthActions.userLoggedIn(undefined);
//     const pendingAction = AuthActions.loginUser(undefined, undefined);
//     const state: ApiState = {
//       ...initialState,
//       pending: [pendingAction],
//       askedFor: [pendingAction],
//     };

//     it('should keep the action inside the askedFor collection', () => {
//       const expected = [pendingAction];
//       const actual = reducer(state, action).askedFor;
//       expect(actual).toEqual(expected);
//     });

//     it('should remove the corresponding pending action from the collection', () => {
//       const expected = [];
//       const actual = reducer(state, action).pending;
//       expect(actual).toEqual(expected);
//     });
//   });

//   describe('when an error action is called', () => {
//     const action = createErrorAction(AuthActions.USER_LOGGED_IN, apiErrorMock);

//     it('should add the error to the errors collection', () => {
//       const expected = [action];
//       const actual = reducer(undefined, action).errors;
//       expect(actual).toEqual(expected);
//     });
//   });
// });
