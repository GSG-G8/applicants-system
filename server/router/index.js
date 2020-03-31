const router = require('express').Router();
const aplecantRouter = require('./applicant-router');

router.use(aplecantRouter);

module.exports = router;
