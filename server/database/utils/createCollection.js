const {
  admin,
  applicant,
  cohort,
  project,
  registrationStep,
  technicalTask,
} = require('../models');

const createEmptyCollection = async () => {
  try {
    await admin.createCollection();
    await applicant.createCollection();
    await cohort.createCollection();
    await project.createCollection();
    await registrationStep.createCollection();
    await technicalTask.createCollection();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('creating collection Error', err);
    throw err;
  }
};

module.exports = createEmptyCollection;
