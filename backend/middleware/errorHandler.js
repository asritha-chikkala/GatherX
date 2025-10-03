const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  console.log(err);

  res.status(error.statusCode || 500).json({
    message: error.message || 'Server Error'
  });
};

module.exports = errorHandler;