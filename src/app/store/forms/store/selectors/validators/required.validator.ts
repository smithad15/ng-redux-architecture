import { createSelector } from 'reselect';

import { Selector } from '../../../../root';
import { ValidationSelector } from '../../types';

export const isRequired = (
  stateSelector: Selector<any>,
  fieldName: string,
): ValidationSelector =>
  createSelector(
    stateSelector,
    state =>
      isValid(state) ? null : { required: `${fieldName} is required.` },
  );

function isValid(value: any): boolean {
  if (value === 0) {
    return true;
  }

  if (Array.isArray(value)) {
    return !!value.length;
  }

  return !!value;
}
