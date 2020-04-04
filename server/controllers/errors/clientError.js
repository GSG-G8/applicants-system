const client = (req, res) => {
  res.status(404).json({ title: 'page not found 404' });
};

module.exports = client;
