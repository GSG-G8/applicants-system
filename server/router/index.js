const router = require('express').Router();

const applicantRouter = require('./applicant-router');
const cohortRouter = require('./cohort-router');
const authRouter = require('./auth-router');

router.use(applicantRouter);
router.use(cohortRouter);
router.use(authRouter);
router.use(cohortRouter);

router.use('/applicant', applicantRouter);

module.exports = router;
