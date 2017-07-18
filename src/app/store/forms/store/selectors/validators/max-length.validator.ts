import { createSelector } from 'reselect';

import { Selector } from '../../../../root';
import { ValidationSelector } from '../../types';

export const isMaxLength = (
  stateSelector: Selector<string>,
  fieldName: string,
  maxLength: number,
): ValidationSelector =>
  createSelector(
    stateSelector,
    state =>
      state.length <= maxLength
        ? null
        : {
            maxLength: `${fieldName} must be no more than ${maxLength} characters.`,
          },
  );
