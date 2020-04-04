const applicant = require('./applicant');
const cohorts = require('./cohort/getCohorts');
const admin = require('./admin');
const errors = require('./errors');

module.exports = { cohorts, applicant, admin, errors };
