const clientError = (req, res) => {
  res.status(404).send({
    message: 'Page Not Found',
    statusCode: 404,
  });
};

module.exports = clientError;
