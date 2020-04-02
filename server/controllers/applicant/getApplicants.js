const Applicant = require('../../database/models/applicant');

const getApplicants = (req, res) => {
  Applicant.find()
    .then((applicants) => res.json(applicants))
    .catch(() => res.status(400).json('bad request'));
};

module.exports = getApplicants;
