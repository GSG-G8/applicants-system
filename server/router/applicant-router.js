const applicantRouter = require('express').Router();

const { getApplicantsStats } = require('../controllers/applicant');
const login = require('../controllers/auth/login');

applicantRouter.post('/login', login);
applicantRouter.get('/applicants/stats', getApplicantsStats);

module.exports = applicantRouter;
