const router = require('express').Router();

const getCohorts = require('./cohort-router');
const { getApplicantsStats } = require('./applicant-router');

router.get('/applicants/stats', getApplicantsStats);

router.get('/cohorts', getCohorts);

module.exports = router;
