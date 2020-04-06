const express = require('express');

const authRouter = express.Router();

const login = require('../controllers/auth/login');
const logout = require('../controllers/auth/logout');
const signup = require('../controllers/auth/signup');

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

module.exports = authRouter;
