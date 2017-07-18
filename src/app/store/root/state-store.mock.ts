import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { AppState } from './types';

// Can't leverage the reducers due to circular dependency issues :(
const initialState: AppState = {
  api: {
    askedFor: [],
    pending: [],
    errors: [],
  },
};

/**
 * NOTE: This class should just be two spies. To ease the architecture
 * transition, the state BehaviourSubject has been added. Once all dependent
 * elements are converted to Redux, this BehaviourSubject should no longer be
 * needed in the test suite.
 */
export class MockStateStore {
  state = new BehaviorSubject<AppState>(initialState);
  performAction = jasmine.createSpy('performAction');

  constructor() {
    spyOn(this, 'getState').and.callThrough();
  }

  getState<T>(selector): Observable<T> {
    return this.state.map(selector);
  }
}
