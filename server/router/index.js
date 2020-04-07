const express = require('express');

const router = express.Router();

const authRouter = require('./auth-router');
const adminRouter = require('./admin-router');
const applicantRouter = require('./applicant-router');
const cohortRouter = require('./cohort-router');
const stepsRouter = require('./registrationSteps-router');
const errorHandler = require('../controllers/errors');
// const { isAuthorized, isAdmin } = require('../middlewares/auth');

router.use(authRouter);

// router.use('/dashboard', isAdmin, adminRouter);

// router.use(isAuthorized);
router.use('/applicants', applicantRouter);

router.use(cohortRouter);
router.use(stepsRouter);

router.use(errorHandler);

module.exports = router;
