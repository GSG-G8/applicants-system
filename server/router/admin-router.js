const adminRouter = require('express').Router();

const { getApplicantsStats } = require('../controllers/applicant');

adminRouter.get('/applicants/stats', getApplicantsStats);

module.exports = adminRouter;
