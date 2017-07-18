import { validPhoneNumber } from './phone-number.validator';

describe('Phone Number Validator', () => {
  const fieldName = 'Home';
  const error = {
    phoneNumber: 'Home is not a valid phone number.',
  };

  describe('valid cases', () => {
    describe('when the string contains 7 digits', () => {
      const value = '1234567';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validPhoneNumber(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the string contains 13 digits', () => {
      const value = '1234567890123';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validPhoneNumber(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the string starts with a + symbol', () => {
      const value = '+1234567890';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validPhoneNumber(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the string is separated by dashes', () => {
      const value = '1-234-567-8901';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validPhoneNumber(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the string is separated by dots', () => {
      const value = '1.234.567.8901';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validPhoneNumber(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the string is separated by spaces', () => {
      const value = '1 234 567 8901';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validPhoneNumber(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the area code is surrounded by round brackets', () => {
      const value = '(234)5678901';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validPhoneNumber(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the string is separated by spaces dashes and brackets', () => {
      const value = '1 (234) 567-8901';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validPhoneNumber(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('invalid cases', () => {
    describe('when the string has less than 7 digits', () => {
      const value = '123456';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validPhoneNumber(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the string has more than 13 digits', () => {
      const value = '12345678901234';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validPhoneNumber(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the string contains dashes in the wrong spots', () => {
      const value = '12-34567';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validPhoneNumber(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the string contains letters', () => {
      const value = '12a34567';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validPhoneNumber(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the string contains characters other than allowed separations', () => {
      const value = '!1234567';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validPhoneNumber(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });
  });
});
