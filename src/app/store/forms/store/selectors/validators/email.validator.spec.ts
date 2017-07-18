import { validEmail } from './email.validator';

describe('Email Validator', () => {
  const fieldName = 'Work';
  const error = { email: 'Work is not a valid email address.' };

  describe('valid cases', () => {
    describe('when a basic email is used', () => {
      const value = 'email@domain.com';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the username contains a dot', () => {
      const value = 'firstname.lastname@domain.com';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the username contains a + character', () => {
      const value = 'firstname+lastname@domain.com';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the username contains digits', () => {
      const value = 'user1234567890@domain.com';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the username contains an underscore', () => {
      const value = 'user_name@domain.com';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the username contains a dash', () => {
      const value = 'user-name@domain.com';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the domain contains a subdomain', () => {
      const value = 'email@subdomain.domain.com';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the domain is a valid IP address', () => {
      const value = 'email@123.123.123.123';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the domain is a valid IP address contained in [] brackets', () => {
      const value = 'email@[123.123.123.123]';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the domain contains a dash', () => {
      const value = 'email@domain-name.com';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the top level domain is .name', () => {
      const value = 'email@domain.name';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the top level domain contains a dot', () => {
      const value = 'email@domain.co.jp';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('invalid cases', () => {
    describe('when the @ symbol is missing', () => {
      const value = 'email.domain.com';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when all symbols are used for the username and domain', () => {
      const value = '#%^%#$@#$#.com';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the username is missing', () => {
      const value = '@domain.com';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when there is encoded html within the address', () => {
      const value = 'Joe Smith <email@domain.com>';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the @ symbol and domain are missing', () => {
      const value = 'plainaddress';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when there are two @ symbols', () => {
      const value = 'email@domain@domain.com';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the username has a leading dot', () => {
      const value = '.email@domain.com';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the username contains a trailing dot', () => {
      const value = 'email.@domain.com';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the username contains multiple dots in a row', () => {
      const value = 'email..email@domain.com';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the username contains Unicode characters', () => {
      const value = 'emailあいうえお@domain.com';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when extra text follows the email', () => {
      const value = 'email@domain.com (Joe Smith)';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the top level domain is missing', () => {
      const value = 'email@domain';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the domain starts with a dash', () => {
      const value = 'email@-domain.com';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the domain contains multiple dots in a row', () => {
      const value = 'email@domain..com';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = validEmail(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });
  });
});
