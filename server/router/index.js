const express = require('express');

const router = express.Router();

const authRouter = require('./auth-router');
const adminRouter = require('./admin-router');
const applicantRouter = require('./applicant-router');
const cohortRouter = require('./cohort-router');
const errorHandler = require('../controllers/errors');

router.use(authRouter);

router.use('/dashboard', adminRouter);
router.use('/applicants', applicantRouter);
router.use(cohortRouter);

router.use(errorHandler);

module.exports = router;
