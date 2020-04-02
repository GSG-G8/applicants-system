const router = require('express').Router();

const getCohorts = require('./cohort-router');
const applicantRouter = require('./applicant-router');

router.get('/cohorts', getCohorts);

router.use('/',applicantRouter);

module.exports = router;
