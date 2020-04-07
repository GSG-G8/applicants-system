const applicant = require('./applicant');
const cohorts = require('./cohort/getCohorts');
const admin = require('./admin');
const errors = require('./errors');
const getRegistrationSteps = require('./registrationSteps/getRegistrationSteps');

module.exports = { cohorts, applicant, admin, getRegistrationSteps, errors };
