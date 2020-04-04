const express = require('express');

const applicantRouter = express.Router();

const {
  getApplicantById,
  updateApplicant,
} = require('../controllers/applicant');

applicantRouter.get('/applicants/:id', getApplicantById);
applicantRouter.patch('/applicants/:id', updateApplicant);

const signup = require('../controllers/auth/signup');

applicantRouter.post('/signup', signup);

module.exports = applicantRouter;
