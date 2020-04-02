const { hash } = require('bcrypt');
const applicant = require('../../database/models/applicant');

const {
  signupValidate,
} = require('../../utils/validation/applicantSignupValidation');

const signupApplicant = (req, res) => {
  const { email, password, passwordConfirmation } = req.body;

  signupValidate(email, password, passwordConfirmation)
    .then(() => hash(password, 10)) // CHECK AHMED SALAH LOGIN BRANCH
    .then((hashedPassword) => {
      const newApplicant = new applicant({ email, password: hashedPassword });
      newApplicant
        .save()
        .then(() => res.json('Registration Complete'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => {
      res.status(400).json(`Error: ${err}`);
    });
};

module.exports = { signupApplicant };
