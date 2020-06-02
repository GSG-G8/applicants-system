const Step = require('../models/registrationStep');

module.exports = async () => {
  const step = [
    {
      title: '1-',
      details: 'Submit an application as soon as they open!',
    },
    {
      title: '2-',
      details: 'Complete technical tasks soon as you can',
    },
    {
      title: '3-',
      details:
        'Onsite Technical Test & Interviews in July for the top applicants',
    },
    {
      title: '4-',
      details:
        'Week 0 (Trial Week) in late July for those who pass the tests/interviews',
    },
    {
      title: '5-',
      details: 'Final Selection in early August',
    },
  ];
  await Step.create(step);
};
