import { createSelector } from 'reselect';

import { Selector } from '../../../../root';
import { ValidationSelector } from '../../types';

const zipCodeRegex = {
  US: /^\s*[0-9]{5}(?:-[0-9]{4})?\s*$/,
  CA: /^\s*[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]\s?\d[ABCEGHJKLMNPRSTVWXYZ]\d\s*$/i,
};

export const validZipCode = (
  zipCodeSelector: Selector<string>,
  countryCodeSelector: Selector<string>,
  fieldName: string,
): ValidationSelector =>
  createSelector(zipCodeSelector, countryCodeSelector, (zipCode, country) => {
    if (zipCodeRegex[country]) {
      return zipCodeRegex[country].test(zipCode)
        ? null
        : {
            zipCode: `${fieldName} is not a valid zip code.`,
          };
    }
    return null;
  });
