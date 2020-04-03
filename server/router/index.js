const express = require('express');

const router = express.Router();
const authRouter = require('./auth-router');
const cohortRouter = require('./cohort-router');
const applicantRouter = require('./applicant-router');

router.use(applicantRouter);
router.use(authRouter);
router.get(cohortRouter);

module.exports = router;
