const fs = require('fs');
const { join } = require('path');
const applicant = require('../../database/models/applicant');
const updateCodewarwPoint = require('./fitchData/fitchCodewar');

const updatePoints = (req, res) => {
  applicant
    .find()
    .then((data) =>
      data.map((element) => {
        const { _id, codeWarsLink, email, fullName } = element;
        updateCodewarwPoint(_id, String(codeWarsLink), (err, result) => {
          if (err) {
            const logEror = JSON.stringify({
              type: 'codeware',
              id: _id,
              fullName,
              email,
              codeWarsLink,
            });
            fs.writeFileSync(
              join(__dirname, 'fitchData', 'bugs.log'),
              `\n ${logEror}`,
              {
                flag: 'a',
              }
            );
          }
        });
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
