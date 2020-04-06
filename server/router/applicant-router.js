const express = require('express');

const applicantRouter = express.Router();

const {
  getApplicantById,
  updateApplicant,
} = require('../controllers/applicant');

applicantRouter.get('/:id', getApplicantById);
applicantRouter.patch('/:id', updateApplicant);

module.exports = applicantRouter;
