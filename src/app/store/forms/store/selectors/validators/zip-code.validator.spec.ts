import { validZipCode } from './zip-code.validator';

describe('Zip Code Validator', () => {
  const fieldName = 'Zip Code';
  const error = { zipCode: 'Zip Code is not a valid zip code.' };

  describe('valid cases', () => {
    describe('when the country is the United States', () => {
      const countryCode = 'US';
      const countryCodeSelector = () => countryCode;

      describe('and the value is 5 digits', () => {
        const zipCode = '12345';
        const zipCodeSelector = () => zipCode;

        it('should return null', () => {
          const expected = null;
          const actual = validZipCode(
            zipCodeSelector,
            countryCodeSelector,
            fieldName,
          )({});
          expect(actual).toEqual(expected);
        });
      });
    });

    describe('when the country is Canada', () => {
      const countryCode = 'CA';
      const countryCodeSelector = () => countryCode;

      describe('and the value contains lower case letters', () => {
        const zipCode = 'm5v2l2';
        const zipCodeSelector = () => zipCode;

        it('should return null', () => {
          const expected = null;
          const actual = validZipCode(
            zipCodeSelector,
            countryCodeSelector,
            fieldName,
          )({});
          expect(actual).toEqual(expected);
        });
      });

      describe('and the value contains upper case letters', () => {
        const zipCode = 'M5V2L2';
        const zipCodeSelector = () => zipCode;

        it('should return null', () => {
          const expected = null;
          const actual = validZipCode(
            zipCodeSelector,
            countryCodeSelector,
            fieldName,
          )({});
          expect(actual).toEqual(expected);
        });
      });

      describe('and the value contains a space between the 3 digits and lower case letters', () => {
        const zipCode = 'm5v 2l2';
        const zipCodeSelector = () => zipCode;

        it('should return null', () => {
          const expected = null;
          const actual = validZipCode(
            zipCodeSelector,
            countryCodeSelector,
            fieldName,
          )({});
          expect(actual).toEqual(expected);
        });
      });

      describe('and the value contains a space between the 3 digits and upper case letters', () => {
        const zipCode = 'M5V 2L2';
        const zipCodeSelector = () => zipCode;

        it('should return null', () => {
          const expected = null;
          const actual = validZipCode(
            zipCodeSelector,
            countryCodeSelector,
            fieldName,
          )({});
          expect(actual).toEqual(expected);
        });
      });
    });

    describe('when the country is not in the known list', () => {
      const countryCode = 'foo';
      const countryCodeSelector = () => countryCode;
      const zipCode = '1abc2';
      const zipCodeSelector = () => zipCode;

      it('should return null', () => {
        const expected = null;
        const actual = validZipCode(
          zipCodeSelector,
          countryCodeSelector,
          fieldName,
        )({});
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('invalid cases', () => {
    describe('when the country is US', () => {
      const countryCode = 'US';
      const countryCodeSelector = () => countryCode;

      describe('and the value is less than 5 digits', () => {
        const zipCode = '123';
        const zipCodeSelector = () => zipCode;

        it('should return an error object with the correct message', () => {
          const expected = error;
          const actual = validZipCode(
            zipCodeSelector,
            countryCodeSelector,
            fieldName,
          )({});
          expect(actual).toEqual(expected);
        });
      });
    });

    describe('when the country is CA', () => {
      const countryCode = 'CA';
      const countryCodeSelector = () => countryCode;

      describe('and the value is only 3 digits', () => {
        const zipCode = '123';
        const zipCodeSelector = () => zipCode;

        it('should return an error object with the correct message', () => {
          const expected = error;
          const actual = validZipCode(
            zipCodeSelector,
            countryCodeSelector,
            fieldName,
          )({});
          expect(actual).toEqual(expected);
        });
      });
    });
  });
});
