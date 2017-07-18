import * as FormActions from './form.actions';
import { ValidationErrors } from '../../types';

describe('Form Actions', () => {
  it('should return an invalid form submit action', () => {
    const formName = 'Login Form';
    const errors: ValidationErrors = {
      required: 'Username required',
    };
    const expected = {
      type: FormActions.INVALID_FORM_SUBMIT,
      payload: { formName, errors },
    };
    const actual = FormActions.invalidFormSubmit(formName, errors);
    expect(actual).toEqual(expected);
  });
});
