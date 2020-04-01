const express = require('express');

const router = express.Router();
const {
  getApplicantById,
  getApplicants,
  updateApplicant,
} = require('./applicant-router');

router.get('/applicants/:id', getApplicantById);
router.get('/applicants', getApplicants);
router.patch('/applicants/:id', updateApplicant);

module.exports = router;
