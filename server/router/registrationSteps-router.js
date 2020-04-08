const express = require('express');

const registrationSteps = express.Router();

const getRegistrationSteps = require('../controllers/registrationSteps/getRegistrationSteps');

registrationSteps.use(getRegistrationSteps);

module.exports = getRegistrationSteps;
