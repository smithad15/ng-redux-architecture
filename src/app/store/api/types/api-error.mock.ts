import { ApiError } from './api-error.type';

export const apiErrorMock: ApiError = {
  httpStatus: 404,
  code: 'BAD_ERROR',
  message: 'You did something wrong',
  guid: '123abc',
};
