import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { FormStore, formStoreFactory } from '@angular-redux/form';

import { AppState } from './root';
import { ReduxEnhancers } from './root/enhancers';
import { ReduxMiddleware } from './root/middleware';
import { RootEpic } from './root/root.epic';
import { StateStore } from './root/state-store';
import { rootReducer, initState } from './root/root.reducer';

@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule],
  providers: [
    ReduxEnhancers,
    ReduxMiddleware,
    RootEpic,
    StateStore,
    {
      provide: FormStore,
      useFactory: formStoreFactory,
      deps: [NgRedux],
    },
  ],
})
export class StoreModule {
  constructor(
    ngRedux: NgRedux<AppState>,
    ngReduxRouter: NgReduxRouter,
    reduxMiddleware: ReduxMiddleware,
    reduxEnhancers: ReduxEnhancers,
  ) {
    ngRedux.configureStore(
      rootReducer,
      initState,
      reduxMiddleware.middleware,
      reduxEnhancers.enhancers,
    );

    ngReduxRouter.initialize();
  }
}
