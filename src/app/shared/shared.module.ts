import { NgModule } from '@angular/core';
import { Connect, ConnectArray, ReactiveConnect } from '@angular-redux/form';

import { ControlIsValidDirective } from './control-is-valid';

const DECLARATIONS = [
  ControlIsValidDirective,
  Connect,
  ConnectArray,
  ReactiveConnect,
];

@NgModule({
  imports: [],
  declarations: [...DECLARATIONS],
  providers: [],
  exports: [...DECLARATIONS],
})
export class SharedModule {}
