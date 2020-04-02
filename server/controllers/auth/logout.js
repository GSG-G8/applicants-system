const logout = (req, res) => {
  res
    .clearCookie('applicant')
    .status(200)
    .json({ status: 'done', message: 'Logout Successfully' });
};

module.exports = logout;
