class ErrorHandler extends error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
  }
}

export { ErrorHandler };
