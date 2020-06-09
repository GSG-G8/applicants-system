const express = require('express');

const cohortRouter = express.Router();

const getCohorts = require('../controllers/cohort/getCohorts');
const getLastCohort = require('../controllers/cohort/getLastCohort');

cohortRouter.get('/last', getLastCohort);
cohortRouter.use(getCohorts);

module.exports = cohortRouter;
