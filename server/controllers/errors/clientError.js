const clientError = (req, res) => {
  res
    .status(404)
    .send({ error: { code: 404, msg: 'Page Not Found' }, data: null });
};

module.exports = clientError;
