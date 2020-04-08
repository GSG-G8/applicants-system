const express = require('express');

const applicantRouter = express.Router();

const {
  getApplicantById,
  updateApplicant,
  randomProject,
} = require('../controllers/applicant');

applicantRouter.get('/project', randomProject);
applicantRouter.get('/:id', getApplicantById);
applicantRouter.patch('/:id', updateApplicant);

module.exports = applicantRouter;
