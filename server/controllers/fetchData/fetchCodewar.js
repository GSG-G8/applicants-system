const axios = require('axios');
const writToLog = require('./writeToLog');

const codewarsPoints = (id, codeWarsLink) => {
  const applicantProfile = codeWarsLink.split('/')[4];
  if (applicantProfile) {
    return axios
      .get(`https://www.codewars.com/api/v1/users/${applicantProfile}`)
      .then(({ data }) => data.ranks.languages.javascript.name)
      .catch(() => ({ eror: 'eror fetching codewars' }));
  }
  writToLog({
    type: 'Codewars',
    error: 'Wrong Link Profile',
    id,
  });
  return 'null';
};
module.exports = codewarsPoints;
