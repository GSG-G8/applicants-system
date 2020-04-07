const applicant = require('../../database/models/applicant');
const fetchCodewarsPoint = require('../fetchData/fetchCodewar');
const writToLog = require('../fetchData/writeToLog');
const fetchFreeCodeCampPoint = require('../fetchData/fetchFreecodeCamp');

const updatePoints = (req, res, next) => {
  applicant
    .find()
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
          fetchCodewarsPoint(_id, String(codeWarsLink)),
          fetchFreeCodeCampPoint(_id, String(freeCodeCampLink)),
        ]).then((result) => {
          applicant
            .updateOne(
              { _id },
              {
                codeWarsKyu: result[0],
                freeCodeCampPoints: result[1].freeCodeCamp,
                freeCodeCampTopics: result[1].hasTarget,
              }
            )
            .catch(() => {
              writToLog({
                ERORR: result,
                _id,
                fullName,
                email,
              });
            });
        });
      });
    })
    .then(() =>
      res.status(200).json({
        status: 200,
        message: 'Update points done successfuly',
      })
    )
    .catch(() => next());
};

module.exports = updatePoints;
