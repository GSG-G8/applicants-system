const router = require('express').Router();
const {
  createApplicant,
  getApplicantById,
  getApplicants,
  updateApplicant,
} = require('./applicant-router');

router.get('/show', getApplicants);
router.get('/show/:id', getApplicantById);
router.post('/add', createApplicant);
router.patch('/up/:id', updateApplicant);

const authRouter = require('./auth-router');
const applicantRouter = require('./applicant-router');
const cohortRouter = require('./cohort-router');
const adminRouter = require('./admin-router');

router.use(authRouter);

router.use(applicantRouter);
router.use(cohortRouter);
router.use(adminRouter);

module.exports = router;
