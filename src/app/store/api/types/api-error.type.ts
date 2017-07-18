export interface ApiError {
  httpStatus: number;
  code: string; // JetBlue internal error code
  message: string;
  guid: string; // Unique API error response identifier
}
