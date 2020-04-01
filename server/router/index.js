const router = require('express').Router();

const getCohorts = require('./cohort-router');

router.get('/cohorts', getCohorts);

module.exports = router;
