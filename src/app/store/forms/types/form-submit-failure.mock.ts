import { FormSubmitFailure } from './form-submit-failure.type';
import { validationErrorsMock } from './validation-errors.mock';

export const formSubmitFailureMock: FormSubmitFailure = {
  formName: 'Login Form',
  errors: validationErrorsMock,
};
