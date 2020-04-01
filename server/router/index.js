const router = require('express').Router();
const applicantRouter = require('./applicant-router');

router.use(applicantRouter);

module.exports = router;
