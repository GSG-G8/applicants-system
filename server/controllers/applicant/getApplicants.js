const Applicant = require('../../database/models/applicant');

const getApplicants = (req, res) => {
  Applicant.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json(`Error: ${err}`));
};

module.exports = getApplicants;
