const router = require('express').Router();
const applicantRouter = require('./applicant-router');

router.use(applicantRouter);

const getCohorts = require('./cohort-router');
const applicantRouter = require('./applicant-router');

router.get('/cohorts', getCohorts);

router.use('/',applicantRouter);

module.exports = router;
