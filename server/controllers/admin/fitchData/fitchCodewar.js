const axios = require('axios');
const applicant = require('../../../database/models/applicant');

const updateCodewarwPoint = (applicantId, codeWarsLink, callback) => {
  const applicantName = codeWarsLink.split('/')[4];
  axios
    .get(`https://www.codewars.com/api/v1/users/${applicantName}`)
    .then(({ data }) =>
      applicant.updateOne(
        { applicantId },
        { codeWarsKyu: data.ranks.languages.javascript.name },
        (err, result) => callback(err, result)
      )
    )
    .catch((err) => callback(err));
};

module.exports = updateCodewarwPoint;
