const applicant = require('../../database/models/applicant');
const updateCodewarwPoint = require('./fitchData/fitchCodewar');

const updatePoints = (req, res) => {
  applicant
    .find()
    .then((data) =>
      data.map((element) => {
        const { _id, codeWarsLink } = element;
        updateCodewarwPoint(_id, String(codeWarsLink), () => {});
      })
    )
    .then(() => {
      res.status(200).json({
        status: 'successfully',
        message: 'codewars points Updated',
      });
    })
    .catch(() =>
      res.status(400).json({ status: 'failed', message: 'there is no data' })
    );
};

module.exports = updatePoints;
