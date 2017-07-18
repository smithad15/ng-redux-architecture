import { createSelector } from 'reselect';

import { Selector } from '../../../../root';
import { ValidationSelector } from '../../types';

const phoneNumberRegex = /^\s*(\+?\d{1,3}[.-\s]?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}\s*$/;

export const validPhoneNumber = (
  stateSelector: Selector<string>,
  fieldName: string,
): ValidationSelector =>
  createSelector(
    stateSelector,
    state =>
      phoneNumberRegex.test(state)
        ? null
        : {
            phoneNumber: `${fieldName} is not a valid phone number.`,
          },
  );

/*
 regex breakdown:
 -a phone number can start with a country code
 -a country code can begin with a + symbol
 -a country code is 1-3 digits long
 -a space character, . , or - can divide phone sections
 -a phone number can have an area code
 -an area code is 3 digits long
 -an area code can be enclosed in parenthesis ()
 -a phone number has at least 7 digits

 positive test cases:
 - +12345678901
 - (234) 567-8901
 - +1 234-567-8901
 - 1 (234) 567-8901
 - 1234567
 - 1234567890
 - (123)456-7897
 - 1-234-567-8901
 - 1.234.567.8901
 */
