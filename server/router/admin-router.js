const express = require('express');

const adminRouter = express.Router();

const {
  getApplicantsStats,
  getApplicants,
} = require('../controllers/applicant');

adminRouter.get('/applicants/stats', getApplicantsStats);
adminRouter.get('/applicants', getApplicants);

module.exports = adminRouter;
