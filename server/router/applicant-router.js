const applicantRouter = require('express').Router();

const login = require('../controllers/auth/login');

applicantRouter.post('/login', login);

module.exports = applicantRouter;
