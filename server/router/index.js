const router = require('express').Router();

const getCohorts = require('./cohort-router');
const signupApplicant = require('./applicant-router');

router.get('/cohorts', getCohorts);

router.post('/signup', signupApplicant);

module.exports = router;
