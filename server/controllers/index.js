const applicant = require('./applicant');
const cohorts = require('./cohort/getCohorts');
const admin = require('./admin');
const errors = require('./errors');
const registrationSteps = require('./registrationSteps/getRegistrationSteps');

module.exports = { cohorts, applicant, admin, registrationSteps, errors };
