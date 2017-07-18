import { createSelector } from 'reselect';

import { Selector } from '../../../../root';
import { ValidationSelector } from '../../types';

export const isMinLength = (
  stateSelector: Selector<string>,
  fieldName: string,
  minLength: number,
): ValidationSelector =>
  createSelector(
    stateSelector,
    state =>
      state.length >= minLength
        ? null
        : {
            minLength: `${fieldName} must be at least ${minLength} characters.`,
          },
  );
