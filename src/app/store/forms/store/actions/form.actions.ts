import { Action } from '../../../root';
import { FormSubmitFailure, ValidationErrors } from '../../types';

export const INVALID_FORM_SUBMIT = 'FORMS--INVALID_FORM_SUBMIT';

export function invalidFormSubmit(
  formName: string,
  errors: ValidationErrors,
): Action<FormSubmitFailure> {
  return {
    type: INVALID_FORM_SUBMIT,
    payload: {
      formName,
      errors,
    },
  };
}
