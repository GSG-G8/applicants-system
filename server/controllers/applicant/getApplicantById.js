const Applicant = require('../../database/models/applicant');

const getApplicantById = (req, res) => {
  Applicant.find({ _id: req.params.id })
    .then((applicant) => res.json(applicant))
    .catch(() => res.status(400).json(`user not exist`));
};

module.exports = getApplicantById;
