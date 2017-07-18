import { validCreditCardNumber } from './credit-card-number.validator';

describe('Credit Card Number Validator', () => {
  const fieldName = 'Credit Card';
  const error = {
    creditCardNumber: 'Credit Card is not a valid credit card number.',
  };

  describe('valid cases', () => {
    describe('when the string is a valid Luhn number', () => {
      const value = '4444333322221111';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validCreditCardNumber(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('invalid cases', () => {
    describe('when the string is an invalid Luhn number', () => {
      const value = '4444333322221112';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validCreditCardNumber(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });
  });
});
