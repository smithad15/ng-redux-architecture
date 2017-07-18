import { ValidationErrors } from './validation-errors.type';

export interface FormSubmitFailure {
  readonly formName: string;
  readonly errors: ValidationErrors;
}
