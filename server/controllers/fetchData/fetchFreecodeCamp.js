const axios = require('axios');

const FreeCodeCampPoint = (freecodeCampLink) => {
  const applicantProfile = freecodeCampLink.split('/')[3];
  if (applicantProfile) {
    return axios
      .get(
        `https://api.freecodecamp.org/api/users/get-public-profile?username=${applicantProfile}`
      )
      .then(({ data }) => data.entities.user[`${applicantProfile}`].points)
      .catch(() => ({ eror: 'eror fetching freecodecamp' }));
  }
  return { freecodecamp: 'Wrong Link Profile' };
};
module.exports = FreeCodeCampPoint;
