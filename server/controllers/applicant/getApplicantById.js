const Applicant = require('../../database/models/applicant');

const getApplicantById = (req, res, next) => {
  Applicant.findById(req.params.id, (err, applicant) => {
    if (err) res.status(400).json({ err: "Applicant doesn't exist" });
    else res.status(200).json({ user: applicant });
  }).catch(next);
};

module.exports = getApplicantById;
