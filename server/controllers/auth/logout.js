module.exports = (req, res) => {
  res.clearCookie('applicant').status(200).json('Logout successfully');
};
