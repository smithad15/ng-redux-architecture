import { createSelector } from 'reselect';

import { Selector } from '../../../../root';
import { ValidationSelector } from '../../types';

const emailRegex = /^\s*[\w+%-]+(\.[\w+%-]+)*@\[?\w+(\.[\w-]+)*[\w-]*\.[A-Za-z0-9]{2,}\]?\s*$/;

export const validEmail = (
  stateSelector: Selector<string>,
  fieldName: string,
): ValidationSelector =>
  createSelector(
    stateSelector,
    state =>
      emailRegex.test(state)
        ? null
        : {
            email: `${fieldName} is not a valid email address.`,
          },
  );

/* regex breakdown:
    -starts with word character or +, %, -
    -if there is a period in the email, needs to be followed by a word charachter or +, %, -
    -the email must contain one @ symbol
    -the content after the @ symbol can be contained in a bracket grouping []
    -a word character must follow the @ symbol
    -after a word character, . and - can be inlcluded post the @ symbol
    -all periods must be followed by a word character or -
    -an email must contain a period at some point after the @ symbol
    -an email must end with 2 or more alphanumeric characters after the final period
*/
