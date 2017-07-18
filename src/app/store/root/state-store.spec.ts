import { StateStore } from './state-store';
import { MockNgRedux } from './ng-redux.mock';

describe('StateStore', () => {
  let stateStore: StateStore;
  let ngRedux: MockNgRedux;

  beforeEach(() => {
    ngRedux = new MockNgRedux();
    stateStore = new StateStore(ngRedux as any);
  });

  it('should dispatch an action to the store', () => {
    const action = { type: 'FOO' };
    stateStore.performAction(action);
    expect(ngRedux.dispatch).toHaveBeenCalledWith(action);
  });

  it('should be able to select a piece of state from the store', () => {
    const selector = state => state;
    stateStore.getState(selector);
    expect(ngRedux.select).toHaveBeenCalledWith(selector);
  });
});
