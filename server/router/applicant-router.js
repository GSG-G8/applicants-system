const applicantRouter = require('express').Router();

const { getApplicantsStats } = require('../controllers/applicant');
const signup = require('../controllers/auth/signup');

applicantRouter.get('/applicants/stats', getApplicantsStats);
applicantRouter.post('/signup', signup);

module.exports = applicantRouter;
