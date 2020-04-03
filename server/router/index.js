const router = require('express').Router();

const authRouter = require('./auth-router');
const applicantRouter = require('./applicant-router');
const cohortRouter = require('./cohort-router');

router.use(authRouter);
router.use(applicantRouter);
router.use(cohortRouter);

module.exports = router;
