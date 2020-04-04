const express = require('express');

const authRouter = express.Router();

const login = require('../controllers/auth/login');
const logout = require('../controllers/auth/logout');
const isAuthorized = require('../middlewares/auth');

authRouter.post('/login', login);
authRouter.use(isAuthorized);
authRouter.post('/logout', logout);

module.exports = authRouter;
