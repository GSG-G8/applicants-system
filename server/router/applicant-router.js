const express = require('express');

const applicantRouter = express.Router();

const {
  getApplicantById,
  updateApplicant,
  updateApplicantpoints,
  randomProject,
} = require('../controllers/applicant');

applicantRouter.get('/:id', getApplicantById);
applicantRouter.patch('/:id', updateApplicant);
applicantRouter.get('/applicants/:id/points', updateApplicantpoints);
applicantRouter.get('/project', randomProject);

module.exports = applicantRouter;
