const express = require('express');

const errorHandler = express.Router();

const client = require('./clientError');
const server = require('./serverError');

errorHandler.all('*', client);
errorHandler.use(server);

module.exports = errorHandler;
