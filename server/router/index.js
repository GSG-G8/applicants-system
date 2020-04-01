const router = require('express').Router();
const { getApplicantById } = require('./applicant-router');

router.get('/applicants/:id', getApplicantById);

module.exports = router;
