const router = require('express').Router();
const applicantRouter = require('./applicant-router');
const authRouter = require('./auth-router');
const getCohorts = require('./cohort-router');

router.use('/applicant', applicantRouter);
router.use('/authrouter', authRouter);
router.get('/cohorts', getCohorts);

module.exports = router;
