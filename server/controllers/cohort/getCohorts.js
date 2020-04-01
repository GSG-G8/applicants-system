const cohort = require('../../database/models/cohort');

module.exports = (req, res, next) => {
  cohort
    .find({})
    .then((rows) =>
      res.status(200).json({
        statusCode: 200,
        data: rows,
      })
    )
    .catch(next);
};
