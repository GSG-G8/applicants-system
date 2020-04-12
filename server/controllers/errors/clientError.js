const clientError = (req, res) => {
  res.status(404).redirect('/404');
};

module.exports = clientError;
