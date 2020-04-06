const express = require('express');

const router = express.Router();

const authRouter = require('./auth-router');
const applicantRouter = require('./applicant-router');
const cohortRouter = require('./cohort-router');
const adminRouter = require('./admin-router');
const { isAuthorized, isAdmin } = require('../middlewares/auth');

router.use(authRouter);
router.use(isAuthorized);
router.use(applicantRouter);
router.use(cohortRouter);
router.use(isAdmin);
router.use(adminRouter);

module.exports = router;
