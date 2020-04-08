const Applicant = require('../../database/models/applicant');

const getApplicantsQuery = (req, res, next) => {
  const { submitted, cwscore = 9, fccpoints = 0, covered } = req.query;

  Applicant.find(
    {
      applicationSubmittedDate: submitted === 'true' ? { $ne: null } : null,
      freeCodeCampPoints: { $gte: fccpoints },
      codeWarsKyu: { $lt: cwscore },
      freeCodeCampTopics: !covered
        ? {
            $in: [true, false],
          }
        : covered,
    },
    (err, rows) => {
      if (err) {
        return res.status(400).json({ statusCode: 400, error: 'Bad Request' });
      }
      if (!rows.length) {
        return res
          .status(404)
          .json({ statusCode: 404, error: `No match applicants` });
      }
      return res.status(200).json({ statusCode: 200, data: rows });
    }
  ).catch(next);
};

module.exports = getApplicantsQuery;
