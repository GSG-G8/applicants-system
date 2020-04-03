const cohortRouter = require('express').Router();

const getCohorts = require('../controllers/cohort/getCohorts');

cohortRouter.get('/cohorts', getCohorts);

module.exports = cohortRouter;
