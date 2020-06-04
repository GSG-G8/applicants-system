const express = require('express');

const applicantRouter = express.Router();

const {
  getApplicantById,
  updateApplicant,
  updateApplicantpoints,
} = require('../controllers/applicant');

applicantRouter.get('/:id', getApplicantById);
applicantRouter.patch('/:id', updateApplicant);
applicantRouter.get('/:id/points', updateApplicantpoints);

module.exports = applicantRouter;
