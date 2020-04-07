const express = require('express');

const applicantRouter = express.Router();

const {
  getApplicantById,
  updateApplicant,
  updateApplicantpoints,
} = require('../controllers/applicant');

applicantRouter.get('/applicants/:id/points', updateApplicantpoints);
applicantRouter.get('/:id', getApplicantById);
applicantRouter.patch('/:id', updateApplicant);

module.exports = applicantRouter;
