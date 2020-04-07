const express = require('express');

const router = express.Router();

const { login, logout, signup } = require('./auth-router');
const adminRouter = require('./admin-router');
const applicantRouter = require('./applicant-router');
const cohortRouter = require('./cohort-router');
const stepsRouter = require('./registrationSteps-router');
const errorHandler = require('../controllers/errors');
const { isAuthorized, isAdmin } = require('../middlewares/auth');

router.post('/signup', signup);
router.post('/login', login);

router.use('/dashboard', isAdmin, adminRouter);

router.use('/cohorts', cohortRouter);
router.use('/steps', stepsRouter);

router.use('/applicants', isAuthorized, applicantRouter);

router.post('/logout', logout);

router.use(errorHandler);

module.exports = router;
