const server = (err, req, res, next) => {
  res.status(500).json('500', { title: 'internal server error 500', err });
};

module.exports = server;
