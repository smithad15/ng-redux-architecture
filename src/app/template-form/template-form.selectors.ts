import * as FormSelectors from '../store/forms/store/selectors';
import { AppState } from '../store';
import { createSelector } from 'reselect';

export const templateForm = (state: AppState) =>
  state.template || {};
export const name = (state: AppState) => templateForm(state).name;
export const email = (state: AppState) => templateForm(state).email;

export const nameIsValid = FormSelectors.isRequired(name, 'Name');
export const emailIsValid = createSelector(
  FormSelectors.isRequired(email, 'Email'),
  FormSelectors.validEmail(email, 'Email'),
  (required, validEmail) => (required ? required : validEmail),
);
