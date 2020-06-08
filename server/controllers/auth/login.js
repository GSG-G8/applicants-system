const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

const loginValidation = require('../../utils/validation/loginValidation');
const applicant = require('../../database/models/applicant');
const admin = require('../../database/models/admin');

require('env2')('config.env');

const errorResponse = {
  status: 'failed',
  type: 'Wrong Email or Password',
  errorMessage: 'Check Email or password',
};

const login = (req, res) => {
  const { email, password } = req.body;
  loginValidation(email, password)
    .then((valid) => {
      if (!valid)
        res.status(400).json({
          status: 'failed',
          type: 'type error',
          errorMessage: 'Check the data you entered',
        });
      else {
        applicant
          .findOne({ email })
          .then((data) => {
            bcrypt.compare(password, data.password, (err, result) => {
              if (!result) res.status(400).json(errorResponse);
              else {
                const userToken = { userId: data.id };
                const cookie = sign(userToken, process.env.SECRET_KEY);
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
              }
            });
          })
          .catch(() => {
            admin
              .findOne({ email })
              .then((data) =>
                bcrypt.compare(password, data.password, (err, result) => {
                  if (!result) res.status(400).json(errorResponse);
                  else {
                    const userToken = { AdminId: data.id };
                    const cookie = sign(userToken, process.env.SECRET_KEY);
                    res.cookie('admin', cookie).json({
                      status: 'successfully',
                      role: 'admin',
                      data: {
                        email,
                        userName: `${data.userName}`,
                      },
                    });
                  }
                })
              )
              .catch(() => res.status(400).json(errorResponse));
          });
      }
    })
    .catch(() => res.status(400).json(errorResponse));
};

module.exports = login;
