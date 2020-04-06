const axios = require('axios');
const topics = require('./topics');

const FreeCodeCampPoint = (freecodeCampLink) => {
  const applicantProfile = freecodeCampLink.split('/')[3];
  if (applicantProfile) {
    return axios
      .get(
        `https://api.freecodecamp.org/api/users/get-public-profile?username=${applicantProfile}`
      )
      .then(({ data }) => {
        const { points } = data.entities.user[`${applicantProfile}`];
        const { completedChallenges } = data.entities.user[
          `${applicantProfile}`
        ];
        let hasTarget;
        if (points >= 200) {
          const completed = completedChallenges.map(({ id }) => id);
          topics.map((element) => {
            if (!completed.includes(element)) {
              hasTarget = false;
              return 0;
            }
          });
          if (hasTarget !== false) {
            hasTarget = true;
          }
        } else hasTarget = false;
        return { points, hasTarget };
      })
      .catch(() => ({ eror: 'eror fetching freecodecamp' }));
  }
  return { points: 'Wrong Link Profile', hasTarget: false };
};
module.exports = FreeCodeCampPoint;
