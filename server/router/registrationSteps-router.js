const express = require('express');

const registrationStepsRouter = express.Router();

const getRegistrationSteps = require('../controllers/registrationSteps/getRegistrationSteps');

registrationStepsRouter.use(getRegistrationSteps);

module.exports = registrationStepsRouter;
