const { hash } = require('bcrypt');
const applicant = require('../../database/models/applicant');

const {
  signupValidate,
} = require('../../utils/validation/applicantSignupValidation');

// two function to get first name and last name to use them in avatar
const { firstName, lastName } = require('../../utils/helper');

const signupApplicant = (req, res, next) => {
  const {
    fullName,
    email,
    password,
    passwordConfirmation,
    location,
  } = req.body;
  const avatar = `https://ui-avatars.com/api/?name=${firstName(
    fullName
  )}+${lastName(fullName)}&rounded=true&background=ED6D23&color=F3F3F3`;
  signupValidate(fullName, email, password, passwordConfirmation, location)
    .then((valid) => {
      if (!valid) res.status(400).json({ Error: `Check the data you entered` });
      else {
        applicant.findOne({ email }, (error, data) => {
          if (data !== null) {
            res.status(400).json({
              status: 400,
              message: `${email} is already exists, please sign-in`,
            });
          } else {
            hash(password, 10).then((hashedPassword) => {
              // eslint-disable-next-line new-cap
              const newApplicant = new applicant({
                fullName,
                email,
                password: hashedPassword,
                location,
                avatar,
              });
              newApplicant
                .save()
                .then(() =>
                  res
                    .status(201)
                    .json({ message: 'Your Signup successfully Complete' })
                )
                .catch((err) => {
                  res.status(400).json({
                    Error: err,
                    message: 'There is an error with your signup',
                  });
                });
            });
          }
        });
      }
    })
    .catch((error) =>
      next({ type: 'add', message: 'There is a problem in your signup', error })
    );
};

module.exports = signupApplicant;
