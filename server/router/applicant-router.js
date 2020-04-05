const applicantRouter = require('express').Router();

const { getApplicantsParams } = require('../controllers/applicant');

applicantRouter.get('/applicants/params', getApplicantsParams);

module.exports = applicantRouter;
