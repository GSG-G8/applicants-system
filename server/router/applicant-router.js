const express = require('express');

const applicantRouter = express.Router();
const {
  updateApplicant,
  getApplicantById,
} = require('../controllers/applicant');

applicantRouter.get('/applicants/:id', getApplicantById);
applicantRouter.patch('/applicants/:id', updateApplicant);

module.exports = applicantRouter;
