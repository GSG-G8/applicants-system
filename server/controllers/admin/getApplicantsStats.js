const Applicant = require('../../database/models/applicant');

const getApplicantsStats = (req, res, next) => {
  Promise.all([
    Applicant.find({ accepted: true }).countDocuments(),
    Applicant.find({
      applicationSubmittedDate: { $ne: null },
    }).countDocuments(),
    Applicant.find({
      applicationSubmittedDate: null,
    }).countDocuments(),
    Applicant.find({}).countDocuments(),
  ])
    .then(([accepted, submitted, opened, all]) =>
      res.status(200).json({
        statusCode: 200,
        Data: {
          accepted,
          submitted,
          opened,
          all,
        },
      })
    )
    .catch(next);
};

module.exports = getApplicantsStats;
