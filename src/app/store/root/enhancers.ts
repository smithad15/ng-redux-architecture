import { Injectable, Inject } from '@angular/core';
import { DevToolsExtension } from '@angular-redux/store';
import { GenericStoreEnhancer } from 'redux';

import { environment } from '../../../environments/environment';

@Injectable()
export class ReduxEnhancers {
  enhancers: GenericStoreEnhancer[];

  constructor(
    devTools: DevToolsExtension,
  ) {
    this.enhancers = [];

    if (!environment.production && devTools.isEnabled()) {
      this.enhancers.push(devTools.enhancer());
    }
  }
}
