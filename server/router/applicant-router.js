const applecantRouter = require('express').Router();

const login = require('../controllers/auth/login');

applecantRouter.post('/login', login);

module.exports = applecantRouter;
