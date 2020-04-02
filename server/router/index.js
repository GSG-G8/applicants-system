const router = require('express').Router();
const applicantRouter = require('./applicant-router');

router.use('applicant', applicantRouter);

module.exports = router;
