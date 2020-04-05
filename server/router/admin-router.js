const express = require('express');

const adminRouter = express.Router();

const { getApplicantsStats, getApplicants } = require('../controllers/admin');

adminRouter.get('/applicants/data/stats', getApplicantsStats);
adminRouter.get('/applicants', getApplicants);

module.exports = adminRouter;
