const Applicant = require('../../database/models/applicant');

const getApplicantsStats = (req, res, next) => {
  Applicant.find({}, (err, applicants) => {
    if (err) {
      return res.status(400).json({ statusCode: 400, error: 'Bad Request' });
    }
    if (!applicants.length) {
      return res.status(404).json({ statusCode: 404, error: `Data not found` });
    }
    return true;
  });
  Promise.all([
    Applicant.find({ accepted: true }).countDocuments(),
    Applicant.find({
      applicationSubmittedDate: { $exists: true, $ne: null },
    }).countDocuments(),
    Applicant.find({
      applicationSubmittedDate: null,
    }).countDocuments(),
  ])
    .then((results) => {
      const [accepted, submitted, notSubmitted] = results;
      return res.status(200).json({
        statusCode: 200,
        Data: {
          'Number of accepted': accepted,
          'Number of submitted': submitted,
          'Number of opened': notSubmitted,
        },
      });
    })
    .catch(next);
};

module.exports = getApplicantsStats;
