const express = require('express');

const router = express.Router();
const {
  getApplicantById,
  getApplicants,
  updateApplicant,
  login,
} = require('./applicant-router');

router.get('/applicants/:id', getApplicantById);
router.get('/applicants', getApplicants);
router.patch('/applicants/:id', updateApplicant);
router.post('/login', login);

const getCohorts = require('./cohort-router');

router.get('/cohorts', getCohorts);

module.exports = router;
