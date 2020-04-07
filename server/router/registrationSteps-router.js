const express = require('express');

const registrationSteps = express.Router();

const getRegistrationSteps = require('../controllers/registrationSteps/getRegistrationSteps');

registrationSteps.get('/steps', getRegistrationSteps);

module.exports = getRegistrationSteps;
