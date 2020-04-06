const applicant = require('../../database/models/applicant');
const fetchCodewarsPoint = require('../fetchData/fetchCodewar');
const writToLog = require('../fetchData/writeToLog');
const fetchFreeCodeCampPoint = require('../fetchData/fetchFreecodeCamp');

const updatePoints = (req, res) => {
  applicant
    .find()
    .catch(() =>
      res
        .status(400)
        .json({ status: 'failed', message: 'There is no applicants' })
    )
    .then((data) => {
      data.map((element) => {
        const {
          _id,
          codeWarsLink,
          email,
          fullName,
          freeCodeCampLink,
        } = element;
        Promise.all([
          fetchCodewarsPoint(String(codeWarsLink)),
          fetchFreeCodeCampPoint(String(freeCodeCampLink)),
        ]).then((result) => {
          if (result[0].codewars && result[1].freecodecamp) {
            writToLog({
              result,
              _id,
              fullName,
              codeWarsLink,
              email,
              freeCodeCampLink,
            });
          } else {
            applicant.updateOne(
              { _id },
              {
                codeWarsKyu: result[0],
                freeCodeCampPoints: result[1].points,
                freeCodeCampTopics: result[1].hasTarget,
              }
            );
          }
        });
      });
      res.status(200).json({
        status: 200,
        message: 'Update points done successfuly',
      });
    });
};

module.exports = updatePoints;
