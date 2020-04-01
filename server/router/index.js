const router = require('express').Router();
const { getApplicantById, getApplicants } = require('./applicant-router');

router.get('/applicants/:id', getApplicantById);
router.get('/applicants', getApplicants);

module.exports = router;
