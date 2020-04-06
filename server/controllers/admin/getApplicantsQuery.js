const Applicant = require('../../database/models/applicant');

const getApplicantsQuery = (req, res, next) => {
  const { submitted, cwscore, fccpoints = 0, covered } = req.query;

  Applicant.find(
    {
      $and: [
        {
          applicationSubmittedDate: submitted === 'true' ? { $ne: null } : null,
        },
        { freeCodeCampPoints: { $gte: fccpoints } },
        {
          codeWarsKyu: !cwscore
            ? {
                $in: [
                  '8kyu',
                  '7kyu',
                  '6kyu',
                  '5kyu',
                  '4kyu',
                  '3kyu',
                  '2kyu',
                  '1kyu',
                ],
              }
            : { $eq: cwscore },
        },
        {
          freeCodeCampTopics: !covered
            ? {
                $in: [true, false],
              }
            : covered,
        },
      ],
    },
    (err, rows) => {
      if (err) {
        return res.status(400).json({ statusCode: 400, error: err.message });
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
