const express = require('express');

const router = express.Router();

const authRouter = require('./auth-router');
const cohortRouter = require('./cohort-router');
const applicantRouter = require('./applicant-router');
const adminRouter = require('./admin-router');

router.use(authRouter);
router.use(applicantRouter);
router.use(cohortRouter);
router.use(adminRouter);

module.exports = router;
