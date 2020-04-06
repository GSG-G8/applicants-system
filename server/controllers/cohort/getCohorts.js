const cohorts = require('../../database/models/cohort');

const getCohorts = (req, res, next) => {
  cohorts
    .find({}, (err, rows) => {
      if (err) {
        return res.status(400).json({ statusCode: 400, error: 'Bad Request' });
      }
      if (!rows.length) {
        return res
          .status(404)
          .json({ statusCode: 404, error: `Cohorts not found` });
      }
      return res.status(200).json({ statusCode: 200, data: rows });
    })
    .catch(next);
};

module.exports = getCohorts;
