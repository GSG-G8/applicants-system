const { hash } = require('bcrypt');
const applicant = require('../../database/models/applicant');

const {
  signupValidate,
} = require('../../utils/validation/applicantSignupValidation');

const signupApplicant = (req, res) => {
  const {
    fullName,
    email,
    password,
    passwordConfirmation,
    location,
  } = req.body;
  const fullNameModified = fullName.trim();
  const emailModified = email.trim();
  const locationModified = location.trim().toLowerCase();
  signupValidate(
    fullNameModified,
    emailModified,
    password,
    passwordConfirmation,
    locationModified
  )
    .then((valid) => {
      if (!valid) res.status(400).json(`Error: Validation error`);
      else {
        applicant.findOne({ email }, (error, data) => {
          if (data !== null) {
            res
              .status(200)
              .json(`${emailModified} is already exists, please sign-in`);
          } else {
            hash(password, 10).then((hashedPassword) => {
              const newApplicant = new applicant({
                fullName: fullNameModified,
                email: emailModified,
                password: hashedPassword,
                location: locationModified,
              });
              newApplicant
                .save()
                .then(() => res.status(201).json('Registration Complete'))
                .catch((err) => {
                  res.status(400).json(`Error: ${err}`);
                });
            });
          }
        });
      }
    })
    .catch((err) => {
      res.status(400).json(`Error5: ${err}`);
    });
};

module.exports = signupApplicant;
