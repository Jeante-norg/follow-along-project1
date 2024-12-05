class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    Error.captureStackTrace();
    this.statuscode = statuscode;
  }
} //predefined error object.

module.exports = ErrorHandler;
