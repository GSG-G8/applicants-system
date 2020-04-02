const {
  updateApplicant,
  getApplicants,
  getApplicantById,
} = require('../controllers/applicant');
const login = require('../controllers/auth/login');

module.exports = {
  getApplicantById,
  getApplicants,
  updateApplicant,
  login,
};
