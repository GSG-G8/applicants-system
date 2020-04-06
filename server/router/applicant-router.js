const express = require('express');

const applicantRouter = express.Router();

const {
  getApplicantById,
  updateApplicant,
  getApplicantsQuery,
} = require('../controllers/applicant');

applicantRouter.get('/applicants/:id', getApplicantById);
applicantRouter.patch('/applicants/:id', updateApplicant);
applicantRouter.get('/applicants/data/query', getApplicantsQuery);

module.exports = applicantRouter;
