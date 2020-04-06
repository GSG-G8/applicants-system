const axios = require('axios');

const updateCodewarwPoint = (codeWarsLink) => {
  const applicantProfile = codeWarsLink.split('/')[4];
  if (applicantProfile) {
    return axios
      .get(`https://www.codewars.com/api/v1/users/${applicantProfile}`)
      .then(({ data }) => data.ranks.languages.javascript.name)
      .catch(() => ({ eror: 'eror fetching codewars' }));
  }
  return { codewars: 'Wrong Link Profile' };
};
module.exports = updateCodewarwPoint;
