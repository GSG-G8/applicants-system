const express = require('express');

const applicantRouter = express.Router();

const {
  getApplicantById,
  updateApplicant,
  updateApplicantpoints,
  randomProject,
} = require('../controllers/applicant');

applicantRouter.get('/project', randomProject);
applicantRouter.get('/:id', getApplicantById);
applicantRouter.patch('/:id', updateApplicant);
applicantRouter.get('/:id/points', updateApplicantpoints);

module.exports = applicantRouter;
