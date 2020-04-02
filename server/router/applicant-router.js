const applicantRouter = require('express').Router();
const signupApplicant = require('../controllers/auth/signup');
const login = require('../controllers/auth/login');

applicantRouter.post('/signup', signupApplicant);
applicantRouter.post('/login', login);

module.exports = applicantRouter;
