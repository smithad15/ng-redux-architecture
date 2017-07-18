import { isMinLength } from './min-length.validator';

describe('Min Length Validator', () => {
  const fieldName = 'First Name';
  const numChars = 5;
  const error = { minLength: 'First Name must be at least 5 characters.' };

  describe('valid cases', () => {
    describe('when the string is longer than the given length', () => {
      const value = 'bonjour';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = isMinLength(stateSelector, fieldName, numChars)({});
        expect(actual).toEqual(expected);
      });
    });
    describe('when the string is exactly the given length', () => {
      const value = 'hello';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = isMinLength(stateSelector, fieldName, numChars)({});
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('invalid cases', () => {
    describe('when the string is shorter than the given length', () => {
      const value = 'hi';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = isMinLength(stateSelector, fieldName, numChars)({});
        expect(actual).toEqual(expected);
      });
    });
  });
});
