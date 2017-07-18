import { Directive, Input } from '@angular/core';
import { Validator, NG_ASYNC_VALIDATORS, NG_VALIDATORS } from '@angular/forms';

import { ValidationErrors } from '../../store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/debounceTime';

/**
 * Template directive to bind redux selector validation state to Angular
 * FormControl validation state.
 */
@Directive({
  selector: '[appControlIsValid]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: ControlIsValidDirective,
      multi: true,
    },
  ],
})
export class ControlIsValidDirective implements Validator {
  @Input() appControlIsValid: Observable<ValidationErrors>;

  constructor() {
    console.log('directive created');
  }

  validate(): Observable<ValidationErrors> {
    return selectorValidator(this.appControlIsValid)();
  }
}

export function selectorValidator(
  selector: Observable<ValidationErrors>,
): () => Observable<ValidationErrors> {
  return () =>
    selector
      .debounceTime(10)
      .do(value => {
        console.log('validate called', value);
      })
      .first();
}

// @Directive({
//   selector: '[appControlIsValid]',
//   providers: [
//     {
//       provide: NG_VALIDATORS,
//       useExisting: ControlIsValidDirective,
//       multi: true,
//     },
//   ],
// })
// export class ControlIsValidDirective implements Validator {
//   @Input() appControlIsValid: ValidationErrors;

//   constructor() {
//     console.log('directive created');
//   }

//   validate(): ValidationErrors {
//     return this.appControlIsValid;
//   }
// }
