const router = require('express').Router();
const applicantRouter = require('./applicant-router');

router.use(applicantRouter);

const getCohorts = require('./cohort-router');

router.get('/cohorts', getCohorts);

module.exports = router;
