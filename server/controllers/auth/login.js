const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

const loginValidation = require('../../utils/validation/loginValidation');
const applicant = require('../../database/models/applicant');
const admin = require('../../database/models/admin');

require('env2')('config.env');

const erroResponse = {
  status: 'failed',
  type: 'wrong Email or Password',
  erroMessage: 'Check Email or password',
};

const login = (req, res) => {
  const { email, password } = req.body;
  loginValidation(email, password)
    .then((valid) => {
      if (!valid)
        res.status(400).json({
          status: 'failed',
          type: 'type error',
          erroMessage: 'check the data you inserted',
        });
      else {
        applicant
          .findOne({ email })
          .then((data) => {
            bcrypt.compare(password, data.password, (err, result) => {
              if (!result) res.status(400).json(erroResponse);
              else {
                const userToken = { userId: data.id };
                const cookie = sign(userToken, process.env.SECRET_KEY);
                res
                  .cookie('applicant', cookie, { httpOnly: true })
                  .json({ status: 'successfully', role: 'applicant', data });
              }
            });
          })
          .catch(() => {
            admin
              .findOne({ email })
              .then((data) =>
                bcrypt.compare(password, data.password, (err, result) => {
                  if (!result) res.status(400).json(erroResponse);
                  else {
                    const userToken = { userId: data.id };
                    const cookie = sign(userToken, process.env.SECRET_KEY);
                    res
                      .cookie('admin', cookie, { httpOnly: true })
                      .json({ status: 'successfully', role: 'admin', data });
                  }
                })
              )
              .catch(() => res.status(400).json(erroResponse));
          });
      }
    })
    .catch(() => res.status(400).json(erroResponse));
};

module.exports = login;
