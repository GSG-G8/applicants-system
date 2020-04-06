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
                $in: ['8kyu', '7kyu', '6kyu', '5kyu'],
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
          .json({ statusCode: 404, error: `Applicant not found` });
      }
      return res.status(200).json({ statusCode: 200, data: rows });
    }
  ).catch(next);
  // codeWarsKyu: {
  //   $in: ['8kyu', '7kyu', '6kyu', '5kyu'],
  // },
  // Applicant.find(
  //   {
  //     applicationSubmittedDate: submitted === 'true' ? { $ne: null } : null,
  //     freeCodeCampPoints: { $gt: fccpoints },
  //     codeWarsKyu: { $eq: cwscore },
  //     freeCodeCampTopics: { $eq: covered },
  //   },
  //   (err, rows) => {
  //     if (err) {
  //       return res.status(400).json({ statusCode: 400, error: err.message });
  //     }
  //     if (!rows.length) {
  //       return res
  //         .status(404)
  //         .json({ statusCode: 404, error: `Applicant not found` });
  //     }
  //     return res.status(200).json({ statusCode: 200, data: rows });
  //   }
  // ).catch(next);

  // if (req.query.submitted === 'true') {
  //   Applicant.find(
  //     {
  //       applicationSubmittedDate: { $ne: null },
  //       freeCodeCampPoints: { $gt: req.query.fccpoints || 0 },
  //       accepted: { $eq: req.query.accepted || true },
  //     },
  //     (err, rows) => {
  //       if (err) {
  //         return res.status(400).json({ statusCode: 400, error: err.message });
  //       }
  //       if (!rows.length) {
  //         return res
  //           .status(404)
  //           .json({ statusCode: 404, error: `Applicant not found` });
  //       }
  //       return res.status(200).json({ statusCode: 200, data: rows });
  //     }
  //   ).catch(next);
  // } else if (req.query.submitted === 'false') {
  //   Applicant.find(
  //     {
  //       applicationSubmittedDate: null,
  //       freeCodeCampPoints: { $gt: req.query.fccpoints || 0 },
  //       // accepted: { $eq: req.query.accepted || true },
  //     },
  //     (err, rows) => {
  //       if (err) {
  //         return res.status(400).json({ statusCode: 400, error: err.message });
  //       }
  //       if (!rows.length) {
  //         return res
  //           .status(404)
  //           .json({ statusCode: 404, error: `Applicant not found` });
  //       }
  //       return res.status(200).json({ statusCode: 200, data: rows });
  //     }
  //   ).catch(next);
  // }
};

module.exports = getApplicantsQuery;
