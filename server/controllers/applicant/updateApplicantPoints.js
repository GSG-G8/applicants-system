const fetchCodewarsPoint = require('../fetchData/fetchCodewar');
const fetchFreeCodeCampPoint = require('../fetchData/fetchFreecodeCamp');
const applicant = require('../../database/models/applicant');

const updateApplicantpoints = (req, res, next) => {
  const { id } = req.params;
  applicant
    .findOne({ _id: id })
    .catch(() => next())
    .then((user) =>
      Promise.all([
        fetchCodewarsPoint(id, String(user.codeWarsLink)),
        fetchFreeCodeCampPoint(id, String(user.freeCodeCampLink)),
      ])
        .then((data) => {
          applicant
            .updateOne(
              { _id: id },
              {
                codeWarsKyu: data[0],
                freeCodeCampPoints: data[1].freeCodeCamp,
                freeCodeCampTopics: data[1].hasTarget,
              }
            )
            .catch(() =>
              res.status(400).json({
                status: 'failed',
                message: 'eror in fetching data',
              })
            )
            .then(() => {
              res.status(200).json({
                status: 200,
                message: 'update points done successfully',
                codeWarsKyu: `${data[0]}`,
                freeCodeCampPoints: `${data[1].freeCodeCamp}`,
                freeCodeCampTopics: `${data[1].hasTarget}`,
              });
            });
        })
        .catch(() => next())
    );
};
module.exports = updateApplicantpoints;
