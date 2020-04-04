const express = require('express');

const applicantRouter = express.Router();

const {
  getApplicantById,
  updateApplicant,
} = require('../controllers/applicant');

applicantRouter.get('/applicants/:id', getApplicantById);
applicantRouter.patch('/applicants/:id', updateApplicant);

module.exports = applicantRouter;
