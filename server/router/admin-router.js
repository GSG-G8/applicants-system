const express = require('express');

const adminRouter = express.Router();

const {
  getApplicantsStats,
  getApplicants,
  getApplicantsQuery,
} = require('../controllers/admin');
const {
  getApplicantById,
  updateApplicant,
} = require('../controllers/applicant');

adminRouter.get('/applicants/stats', getApplicantsStats);
adminRouter.get('/applicants', getApplicants);
adminRouter.get('/applicants/query', getApplicantsQuery);
adminRouter.get('/applicant/:id', getApplicantById);
adminRouter.patch('/applicant/:id', updateApplicant);

module.exports = adminRouter;
