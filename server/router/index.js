const router = require('express').Router();
const applicantRouter = require('./applicant-router');
const getCohorts = require('./cohort-router');

router.use(applicantRouter);

router.get('/cohorts', getCohorts);

router.use('/', applicantRouter);

module.exports = router;
