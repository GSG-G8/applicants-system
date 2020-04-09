const Cohort = require('../models/cohort');

module.exports = async () => {
  const cohort = [
    {
      cohortGaza: 'G7',
      cohortKhalil: 'K1',
      cohortGazaStartTime: '2013-10-21T13:28:06.419Z',
      cohortGazaEndTime: '2013-10-21T13:28:06.419Z',
      applicationGazaDeadLine: '2013-10-21T13:28:06.419Z',
      cohortKhalilStartTime: '2013-10-21T13:28:06.419Z',
      cohortKhalilEndTime: '2013-10-21T13:28:06.419Z',
      applicationKhalilDeadLine: '2013-10-21T13:28:06.419Z',
    },
    {
      cohortGaza: 'G8',
      cohortKhalil: 'K2',
      cohortGazaStartTime: '2013-10-21T13:28:06.419Z',
      cohortGazaEndTime: '2013-10-21T13:28:06.419Z',
      applicationGazaDeadLine: '2013-10-21T13:28:06.419Z',
      cohortKhalilStartTime: '2013-10-21T13:28:06.419Z',
      cohortKhalilEndTime: '2013-10-21T13:28:06.419Z',
      applicationKhalilDeadLine: '2013-10-21T13:28:06.419Z',
    },
    {
      cohortGaza: 'G9',
      cohortKhalil: 'K3',
      cohortGazaStartTime: '2013-10-21T13:28:06.419Z',
      cohortGazaEndTime: '2013-10-21T13:28:06.419Z',
      applicationGazaDeadLine: '2013-10-21T13:28:06.419Z',
      cohortKhalilStartTime: '2013-10-21T13:28:06.419Z',
      cohortKhalilEndTime: '2013-10-21T13:28:06.419Z',
      applicationKhalilDeadLine: '2013-10-21T13:28:06.419Z',
    },
  ];
  await Cohort.create(cohort);
};
