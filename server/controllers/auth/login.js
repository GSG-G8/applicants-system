const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

const loginValidation = require('../../utils/validation/loginValidation');
const applicant = require('../../database/models/applicant');
require('env2')('config.env');

const login = (req, res) => {
  const { email, password } = req.body;
  loginValidation(email, password)
    .then((valid) => {
      if (!valid) res.status(400).json({ error: 'Check the data you entered' });
      else {
        applicant
          .findOne({ email })
          .then((data) => {
            bcrypt.compare(password, data.password, (err, result) => {
              if (!result)
                res.status(400).json({ error: 'wrong Email or password' });
              else {
                const userToken = { userId: data.id };
                const cookie = sign(userToken, process.env.SECRET_KEY);
                res
                  .cookie('applicant', cookie, { httpOnly: true })
                  .json({ data });
              }
            });
          })
          .catch(() =>
            res.status(400).json({ error: 'Check Email and Password' })
          );
      }
    })
    .catch(() => res.status(400).json({ error: 'wrong Email or password' }));
};

module.exports = login;
