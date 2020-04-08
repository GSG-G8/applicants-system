const express = require('express');

const adminRouter = express.Router();

const {
  getApplicantsStats,
  getApplicants,
  getApplicantsQuery,
} = require('../controllers/admin');

adminRouter.get('/applicants/stats', getApplicantsStats);
adminRouter.get('/applicants', getApplicants);
adminRouter.get('/applicants/query', getApplicantsQuery);

module.exports = adminRouter;
