const fetchCodewarsPoint = require('../fetchData/fetchCodewar');
const fetchFreeCodeCampPoint = require('../fetchData/fetchFreecodeCamp');
const applicant = require('../../database/models/applicant');

const fetchPoint = (req, res, next) => {
  const { id } = req.params;
  applicant
    .findOne({ _id: id })
    .catch(() =>
      res
        .status(400)
        .json({ status: 'failed', message: 'There is no data for this id' })
    )
    .then((user) =>
      Promise.all([
        fetchCodewarsPoint(String(user.codeWarsLink)),
        fetchFreeCodeCampPoint(String(user.freeCodeCampLink)),
      ]).then((data) => {
        if (data[0].eror && data[1].eror) {
          res.status(400).json({
            status: 'failed',
            message: 'eror in fetching data',
          });
        } else
          applicant.updateOne(
            { _id: id },
            {
              codeWarsKyu: data[0],
              freeCodeCampPoints: data[1],
            }
          );
        res.status(200).json({
          status: 200,
          message: 'update points done successfully',
          data,
        });
      })
    );
};
module.exports = fetchPoint;
