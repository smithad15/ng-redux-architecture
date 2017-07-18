import { isRequired } from './required.validator';

describe('Required Validator', () => {
  const fieldName = 'First Name';
  const error = { required: 'First Name is required.' };

  describe('valid cases', () => {
    describe('when the state is a string', () => {
      const value = 'hello';
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = isRequired(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the state is a number', () => {
      const value = 123;
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = isRequired(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the state is 0', () => {
      const value = 0;
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = isRequired(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the state is a date', () => {
      const value = new Date();
      const stateSelector = () => value;

      it('should return null', () => {
        const expected = null;
        const actual = isRequired(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });
  });

  describe('invalid cases', () => {
    describe('when the state is undefined', () => {
      const value = undefined;
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = isRequired(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the state is null', () => {
      const value = null;
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = isRequired(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the state is an empty string', () => {
      const value = '';
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = isRequired(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });

    describe('when the state is an empty array', () => {
      const value = [];
      const stateSelector = () => value;

      it('should return an error object with the correct message', () => {
        const expected = error;
        const actual = isRequired(stateSelector, fieldName)({});
        expect(actual).toEqual(expected);
      });
    });
  });
});
