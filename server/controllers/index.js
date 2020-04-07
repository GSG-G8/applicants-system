const applicant = require('./applicant');
const cohorts = require('./cohort/getCohorts');
const admin = require('./admin');
const errors = require('./errors');
const tasks = require('./task/getTasks');
const registrationSteps = require('./registrationSteps/getRegistrationSteps');

module.exports = {
  applicant,
  cohorts,
  admin,
  errors,
  tasks,
  registrationSteps,
};
