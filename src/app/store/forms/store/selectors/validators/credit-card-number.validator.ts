import { createSelector } from 'reselect';
import { reverse } from 'ramda';

import { Selector } from '../../../../root';
import { ValidationSelector } from '../../types';

/*
 * based on algorithm as described by
 * https://en.wikipedia.org/wiki/Luhn_algorithm
 */
function luhnValidate(num: string | number): boolean {
  let sum = 0;
  let odd = true;
  const evenArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
  for (const strNum of reverse(num.toString() as any)) {
    const n = Number(strNum);
    sum += odd ? n : evenArr[n];
    odd = !odd;
  }

  return sum % 10 === 0;
}

export const validCreditCardNumber = (
  stateSelector: Selector<string>,
  fieldName: string,
): ValidationSelector =>
  createSelector(
    stateSelector,
    state =>
      luhnValidate(state)
        ? null
        : {
            creditCardNumber: `${fieldName} is not a valid credit card number.`,
          },
  );
