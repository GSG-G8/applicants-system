const axios = require('axios');
const applicant = require('../../../database/models/applicant');

const updateCodewarwPoint = (_id, codeWarsLink, callback) => {
  const applicantProfile = codeWarsLink.split('/')[4];
  if (applicantProfile) {
    axios
      .get(`https://www.codewars.com/api/v1/users/${applicantProfile}`)
      .then(({ data }) =>
        applicant.updateOne(
          { _id },
          { codeWarsKyu: data.ranks.languages.javascript.name },
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
module.exports = updateCodewarwPoint;
