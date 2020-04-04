const express = require('express');

const adminRouter = express.Router();

const {
  getApplicantsStats,
  getApplicants,
  updatePoint,
} = require('../controllers/admin');

adminRouter.get('/applicants/stats', getApplicantsStats);
adminRouter.get('/applicants', getApplicants);
adminRouter.patch('/applicants/updatepoints', updatePoint);

module.exports = adminRouter;
