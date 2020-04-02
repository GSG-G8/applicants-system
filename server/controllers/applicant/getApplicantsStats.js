const Applicant = require('../../database/models/applicant');

const getApplicantsStats = (req, res, next) => {
  Promise.all([
    Applicant.find({ accepted: true }).countDocuments(),
    Applicant.find({
      applicationSubmittedDate: { $exists: true, $ne: null },
    }).countDocuments(),
    Applicant.find({
      applicationSubmittedDate: null,
    }).countDocuments(),
  ])
    .then(([accepted, submitted, opened]) =>
      res.status(200).json({
        statusCode: 200,
        Data: {
          accepted,
          submitted,
          opened,
        },
      })
    )
    .catch(next);
};

module.exports = getApplicantsStats;
