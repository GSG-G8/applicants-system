const Applicant = require('../../database/models/applicant');

const getApplicantById = (req, res) => {
  Applicant.find({ _id: req.params.id })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

module.exports = getApplicantById;
