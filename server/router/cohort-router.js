const express = require('express');

const cohortRouter = express.Router();

const getCohorts = require('../controllers/cohort/getCohorts');

cohortRouter.use(getCohorts);

module.exports = cohortRouter;
