const axios = require('axios');
const applicant = require('../../../database/models/applicant');

const updateFreeCodeCampPoint = (_id, freecodeCampLink, callback) => {
  const applicantProfile = freecodeCampLink.split('/')[3];
  if (applicantProfile) {
    axios
      .get(
        `https://api.freecodecamp.org/api/users/get-public-profile?username=${applicantProfile}`
      )
      .then(({ data }) =>
        applicant.updateOne(
          { _id },
          {
            freeCodeCampPoints:
              data.entities.user[`${applicantProfile}`].points,
          },
          (err, result) => {
            if (err) callback(err);
          }
        )
      )
      .catch((err) => callback(err));
  } else {
    callback('err');
  }
};
module.exports = updateFreeCodeCampPoint;
