const express = require('express');

const adminRouter = express.Router();

const {
  getApplicantsStats,
  getApplicants,
  updatePoint,
  getApplicantsQuery,
} = require('../controllers/admin');

adminRouter.get('/applicants/stats', getApplicantsStats);
adminRouter.get('/applicants', getApplicants);
adminRouter.patch('/applicants/updatepoints', updatePoint);
adminRouter.get('/applicants/query', getApplicantsQuery);

module.exports = adminRouter;
