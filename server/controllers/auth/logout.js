const logout = (req, res) => {
  res.clearCookie('applicant').status(200).json('Logout successfully');
};

module.exports = logout;
