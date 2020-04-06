const express = require('express');

const applicantRouter = express.Router();

const {
  getApplicantById,
  updateApplicant,
  updateApplicantpoints,
} = require('../controllers/applicant');

applicantRouter.get('/applicants/:id', getApplicantById);
applicantRouter.patch('/applicants/:id', updateApplicant);
applicantRouter.get('/applicants/:id/points', updateApplicantpoints);

module.exports = applicantRouter;
