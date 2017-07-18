import { ValidationErrors } from '../../../types';

export function combineValidationErrors(
  ...validationErrors: ValidationErrors[]
): ValidationErrors {
  return validationErrors.reduce((acc, error) => {
    if (error == null) {
      return acc;
    }

    if (acc == null) {
      return error;
    } else {
      return Object.assign({}, acc, error);
    }
  }, null);
}
