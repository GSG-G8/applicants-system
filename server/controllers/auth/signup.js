const { hash } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const applicant = require('../../database/models/applicant');
const project = require('../../database/models/project');
const allCohort = require('../../database/models/cohort');
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
            hash(password, 10).then(async (hashedPassword) => {
              project.aggregate([{ $sample: { size: 1 } }]).then((result) => {
                // eslint-disable-next-line no-underscore-dangle
                allCohort
                  .find()
                  .limit(1)
                  .sort({ $natural: -1 })
                  .then(([{ cohortGaza, cohortKhalil }]) => {
                    const cohorts = [];
                    if (location === 'gaza') {
                      cohorts.push(cohortGaza);
                    } else {
                      cohorts.push(cohortKhalil);
                    }
                    // eslint-disable-next-line no-underscore-dangle
                    const projectId = result[0]._id;

                    const newApplicant = new applicant({
                      fullName,
                      email,
                      password: hashedPassword,
                      location,
                      avatar,
                      projectId,
                      cohorts,
                    });
                    newApplicant
                      .save()
                      .then(() =>
                        applicant.findOne({ email }).then((data) => {
                          const userToken = { userId: data.id };
                          const cookie = sign(
                            userToken,
                            process.env.SECRET_KEY
                          );
                          res.cookie('applicant', cookie).json({
                            status: 'successfully',
                            role: 'applicant',
                            data: {
                              email,
                              fullName: `${data.fullName}`,
                              location: `${data.location}`,
                              avatar: `${data.avatar}`,
                            },
                          });
                        })
                      )
                      .catch((err) => {
                        res.status(400).json({
                          Error: err,
                          message: 'There is an error with your signup',
                        });
                      });
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
