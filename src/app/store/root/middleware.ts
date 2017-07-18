import { Injectable } from '@angular/core';
import { Middleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';

import { RootEpic } from './root.epic';
import { environment } from '../../../environments/environment';

@Injectable()
export class ReduxMiddleware {
  middleware: Middleware[];

  constructor(rootEpic: RootEpic) {
    const epicMiddleware = createEpicMiddleware(rootEpic.rootEpic);

    this.middleware = [
      epicMiddleware,
      createLogger({
        collapsed: true,
      }),
    ];

    if (!environment.production && module['hot']) {
      module['hot'].accept('./root.epic', () => {
        const { newRootEpic } = require('./root.epic');
        epicMiddleware.replaceEpic(newRootEpic);
      });
    }
  }
}
