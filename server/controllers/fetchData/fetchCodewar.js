const axios = require('axios');
const writeToLog = require('./writeToLog');

const codewarsPoints = (id, codeWarsLink) => {
  const applicantProfile = codeWarsLink.split('/')[4];
  if (applicantProfile) {
    return axios
      .get(`https://www.codewars.com/api/v1/users/${applicantProfile}`)
      .then(({ data }) => data.ranks.languages.javascript.name)
      .catch(() => ({ error: 'Error in fetching codewars' }));
  }
  writeToLog({
    type: 'Codewars',
    error: 'Wrong Link Profile',
    id,
  });
  return 'null';
};
module.exports = codewarsPoints;
