const express = require('express');

const applicantRouter = express.Router();

const {
  getApplicantById,
  updateApplicant,
  getApplicantsParams,
} = require('../controllers/applicant');

applicantRouter.get('/applicants/:id', getApplicantById);
applicantRouter.patch('/applicants/:id', updateApplicant);
applicantRouter.get('/applicants/data/params', getApplicantsParams);

module.exports = applicantRouter;
