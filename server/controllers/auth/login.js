const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

const loginValidation = require('../../utils/validation/loginValidation');
const applicant = require('../../database/models/applicant');
require('env2')('config.env');

const SECRET = process.env.SECRET_KEY;

const login = (req, res) => {
  const { email, password } = req.body;
  loginValidation(email, password)
    .then((valid) => {
      if (!valid) throw Error;
      else {
        applicant
          .findOne({ email })
          .then((data) => {
            bcrypt.compare(password, data.password, (err, result) => {
              if (!result) res.status(400).json('Wrong Password');
              else {
                const userToken = { userId: data.id };
                const cookie = sign(userToken, SECRET);
                res.cookie('applicant', cookie, { httpOnly: true }).json(data);
              }
            });
          })
          .catch(() => res.status(400).json('Check Username and Password'));
      }
    })
    .catch(() => res.status(400).json('Please Fill in all Required Fields'));
};

module.exports = login;
