const applicantRouter = require('express').Router();

const { getApplicantsStats } = require('../controllers/applicant');

applicantRouter.get('/applicants/stats', getApplicantsStats);

module.exports = applicantRouter;
