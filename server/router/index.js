const express = require('express');

const router = express.Router();

const authRouter = require('./auth-router');
const applicantRouter = require('./applicant-router');
const cohortRouter = require('./cohort-router');
const adminRouter = require('./admin-router');

router.use(authRouter);

router.use(adminRouter);
router.use(applicantRouter);
router.use(cohortRouter);

module.exports = router;
