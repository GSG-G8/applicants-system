const express = require('express');

const applicantRouter = express.Router();

const {
  getApplicantById,
  updateApplicant,
} = require('../controllers/applicant');

applicantRouter.get('/:id', getApplicantById);
applicantRouter.patch('/:id', updateApplicant);

const signup = require('../controllers/auth/signup');

applicantRouter.post('/signup', signup);

module.exports = applicantRouter;
