const applicantRouter = require('express').Router();

const { getApplicantsStats } = require('../controllers/applicant');

applicantRouter.get('/stats', getApplicantsStats);

module.exports = applicantRouter;
