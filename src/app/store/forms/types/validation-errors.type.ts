type ValidationErrorMessage = string;

export interface ValidationErrors {
  readonly [errorCase: string]: ValidationErrorMessage;
}
