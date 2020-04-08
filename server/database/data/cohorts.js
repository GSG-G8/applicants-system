const Cohort = require('../models/cohort');

module.exports = async () => {
  const cohort = [
    {
      cohortGaza: 'G7',
      cohortKhalil: 'K1',
      cohortGazaStratTime: '2013-10-21T13:28:06.419Z',
      cohortGazaEndTime: '2013-10-21T13:28:06.419Z',
      cohortGazaDeadLine: '2013-10-21T13:28:06.419Z',
      cohortKhalilStratTime: '2013-10-21T13:28:06.419Z',
      cohortKhalilEndTime: '2013-10-21T13:28:06.419Z',
      cohortKhalilDeadLine: '2013-10-21T13:28:06.419Z',
    },
    {
      cohortGaza: 'G8',
      cohortKhalil: 'K2',
      cohortGazaStratTime: '2013-10-21T13:28:06.419Z',
      cohortGazaEndTime: '2013-10-21T13:28:06.419Z',
      cohortGazaDeadLine: '2013-10-21T13:28:06.419Z',
      cohortKhalilStratTime: '2013-10-21T13:28:06.419Z',
      cohortKhalilEndTime: '2013-10-21T13:28:06.419Z',
      cohortKhalilDeadLine: '2013-10-21T13:28:06.419Z',
    },
    {
      cohortGaza: 'G9',
      cohortKhalil: 'K3',
      cohortGazaStratTime: '2013-10-21T13:28:06.419Z',
      cohortGazaEndTime: '2013-10-21T13:28:06.419Z',
      cohortGazaDeadLine: '2013-10-21T13:28:06.419Z',
      cohortKhalilStratTime: '2013-10-21T13:28:06.419Z',
      cohortKhalilEndTime: '2013-10-21T13:28:06.419Z',
      cohortKhalilDeadLine: '2013-10-21T13:28:06.419Z',
    },
  ];
  await Cohort.create(cohort);
};
