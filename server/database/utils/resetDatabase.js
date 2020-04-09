const {
  admin,
  applicant,
  cohort,
  project,
  registrationStep,
  technicalTask,
} = require('../models');

const resetDatabase = async () => {
  try {
    await admin.deleteMany();
    await applicant.deleteMany();
    await cohort.deleteMany();
    await project.deleteMany();
    await registrationStep.deleteMany();
    await technicalTask.deleteMany();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('database resting Error', err);
    throw err;
  }
};

module.exports = resetDatabase;
