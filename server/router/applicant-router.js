const applicantRouter = require('express').Router();
const signupApplicant = require('../controllers/auth/signup');

applicantRouter.post('/signup', signupApplicant);

module.exports = applicantRouter;
