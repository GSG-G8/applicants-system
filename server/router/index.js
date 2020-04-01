const router = require('express').Router();

const cohorts = require('./cohort-router');

router.get('/cohorts', cohorts);

module.exports = router;
