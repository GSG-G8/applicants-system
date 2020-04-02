const router = require('express').Router();

const getCohorts = require('./cohort-router');
const { getApplicants, getApplicantsStats } = require('./applicant-router');

router.get('/applicants', getApplicants);
router.get('/applicants/stats', getApplicantsStats);

router.get('/cohorts', getCohorts);

module.exports = router;
