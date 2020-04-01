const cohorts = require('../../database/models/cohort');

module.exports = (req, res, next) => {
  cohorts
    .find({})
    .then((rows) =>
      res.status(200).json({
        statusCode: 200,
        data: rows,
      })
    )
    .catch(next);
};
