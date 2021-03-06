const axios = require('axios');
const topics = require('./getTopicsId');
const writeToLog = require('./writeToLog');

const FreeCodeCampPoint = (id, freecodeCampLink) => {
  const applicantProfile = freecodeCampLink.split('/')[3].toLowerCase();
  if (applicantProfile) {
    return axios
      .get(
        `https://api.freecodecamp.org/api/users/get-public-profile?username=${applicantProfile}`
      )
      .then(({ data }) => {
        const freeCodeCamp = data.entities.user[`${applicantProfile}`].points;
        const { completedChallenges } = data.entities.user[
          `${applicantProfile}`
        ];
        let hasTarget;
        if (freeCodeCamp >= 200) {
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
        return { freeCodeCamp, hasTarget };
      })
      .catch(() => ({ error: 'Error in fetching freecodecamp' }));
  }
  writeToLog({
    type: 'freecodecamp',
    error: 'Wrong Link Profile',
    id,
  });
  return { freeCodeCamp: 0, hasTarget: false };
};

module.exports = FreeCodeCampPoint;
