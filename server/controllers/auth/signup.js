const { hash } = require('bcrypt');
const applicant = require('../../database/models/applicant');

const {
  signupValidate,
} = require('../../utils/validation/applicantSignupValidation');

// two function to get first name and last name to use them in avatar
const firstName = (string) =>
  string.trim().toUpperCase().split(' ')[0].toString();

const lastName = (string) => {
  const strArr = string.trim().toUpperCase().split(' ');
  return strArr[strArr.length - 1].toString();
};

const signupApplicant = (req, res, next) => {
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
  const avatar = `https://ui-avatars.com/api/?name=${firstName(
    fullName
  )}+${lastName(fullName)}&rounded=true&background=ED6D23&color=F3F3F3`;
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
                avatar,
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
    .catch(next);
};

module.exports = signupApplicant;
