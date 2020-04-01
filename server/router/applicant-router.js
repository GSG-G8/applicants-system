const applicantRouter = require('express').Router();

const login = require('../controllers/auth/login');
const logout = require('../controllers/auth/logout');

applicantRouter.post('/login', login);
applicantRouter.post('/logout', logout);

module.exports = applicantRouter;
