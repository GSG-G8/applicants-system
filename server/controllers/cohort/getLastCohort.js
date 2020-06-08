const cohorts = require('../../database/models/cohort');

const getLastCohort = (req, res, next) => {
  cohorts
    .find()
    .limit(1)
    .sort({ $natural: -1 })
    .then(([{ cohortGaza, cohortKhalil }]) => {
      res.status(200).json({ statusCode: 200, cohortGaza, cohortKhalil });
    })
    .catch((err) => {
      res.status(400).json({
        Error: err,
        message: 'Cohorts not found',
      });
    });
};

module.exports = getLastCohort;
