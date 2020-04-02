const authRouter = require('express').Router();

const login = require('../controllers/auth/login');
const logout = require('../controllers/auth/logout');

authRouter.post('/login', login);
authRouter.post('/logout', logout);

module.exports = authRouter;
