const mongoose = require('mongoose');
const dbConnection = require('./dbConnection');
const createCollection = require('./utils/createCollection');
const resetDatabase = require('./utils/resetDatabase');

const {
  admin,
  applicant,
  cohort,
  project,
  registrationStep,
  technicalTask,
} = require('./data');

const buildDatabase = () =>
  new Promise((resolve, reject) => {
    dbConnection
      .then(async () => {
        await resetDatabase();
        await createCollection();
        await admin();
        await project();
        await cohort();
        await applicant();
        await registrationStep();
        await technicalTask();
      })
      .then(resolve)
      .catch(reject);
  });

buildDatabase()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Database was built successfully !');
    mongoose.disconnect();
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
    mongoose.disconnect();
  });
