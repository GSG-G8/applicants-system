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

module.exports = router;
