import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { Action, AppState } from './types';

type Selector<T> = (appState: AppState) => T;

/**
 * This class is a thin wrapper around NgRedux for easier testing and to help
 * facilitate the rest of the application to be composed of pure functions.
 */
@Injectable()
export class StateStore {
  constructor(private ngRedux: NgRedux<AppState>) {}

  getState<S>(selector: Selector<S>): Observable<S> {
    return this.ngRedux.select<S>(selector);
  }

  performAction(action: Action<any, any>) {
    this.ngRedux.dispatch(action);
  }
}
