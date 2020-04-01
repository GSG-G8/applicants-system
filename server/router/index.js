const router = require('express').Router();
const applicantRouter = require('./applicant-router');

router.use('/api/v1/applicant', applicantRouter);

module.exports = router;
