const server = (err, req, res, next) => {
  res.status(500).json({ title: 'internal server error 500', err });
};

module.exports = server;
