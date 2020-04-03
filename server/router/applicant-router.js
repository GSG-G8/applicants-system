const applicantRouter = require('express').Router();

const signup = require('../controllers/auth/signup');

applicantRouter.post('/signup', signup);

module.exports = applicantRouter;
