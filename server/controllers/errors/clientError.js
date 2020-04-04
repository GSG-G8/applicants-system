const client = (req, res) => {
  res.status(404).json('404', { title: 'page not found 404' });
};

module.exports = client;
