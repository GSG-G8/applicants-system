const applicant = require('../../database/models/applicant');
const updateCodewarwPoint = require('./fitchData/fitchCodewar');
const writToLog = require('./fitchData/writeToLog');
const updateFreeCodeCampPoint = require('./fitchData/fitchFreecodeCamp');

const updatePoints = (req, res) => {
  applicant
    .find()
    .then((data) =>
      data.map((element) => {
        const {
          _id,
          codeWarsLink,
          email,
          fullName,
          freeCodeCampLink,
        } = element;
        updateCodewarwPoint(_id, String(codeWarsLink), (err, result) => {
          if (err) {
            writToLog('codeware', { id: _id, fullName, email, codeWarsLink });
          }
        });
        updateFreeCodeCampPoint(
          _id,
          String(freeCodeCampLink),
          (err, result) => {
            if (err) {
              writToLog('free-code-camp', {
                id: _id,
                fullName,
                email,
                freeCodeCampLink,
              });
            }
          }
        );
      })
    )
    .then(() => {
      res.status(200).json({
        status: 'successfully',
        message: 'codewars and freecodecamp points are Updated successfully',
      });
    })
    .catch(() =>
      res.status(400).json({ status: 'failed', message: 'there is no data' })
    );
};

module.exports = updatePoints;
