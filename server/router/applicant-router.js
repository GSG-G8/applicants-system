const express = require('express');

const applicantRouter = express.Router();
const {
  updateApplicant,
  getApplicants,
  getApplicantById,
  getApplicantsStats,
} = require('../controllers/applicant');

applicantRouter.get('/applicants/:id', getApplicantById);
applicantRouter.get('/applicants', getApplicants);
applicantRouter.patch('/applicants/:id', updateApplicant);
applicantRouter.get('/applicants/stats', getApplicantsStats);

module.exports = applicantRouter;
