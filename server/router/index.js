const router = require('express').Router();

const applicantRouter = require('./applicant-router');
const cohortRouter = require('./cohort-router');

router.use(applicantRouter);
router.use(cohortRouter);

module.exports = router;
