const errorMiddleware = (req, res, err, next) => {
  err.message ||= "Internal server error";
  err.statusCode ||= 500;

  return req.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

const TryCatch = (passedFunc) => async (req, res, next) => {
  try {
    await passedFunc(req, res, next);
  } catch (error) {
    next(error);
  }
}; // arrow function returning a asycn function

//export
export { errorMiddleware, TryCatch };
