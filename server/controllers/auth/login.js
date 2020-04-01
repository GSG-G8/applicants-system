const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

const applicant = require('../../database/models/applicant');
require('env2')('config.env');

const SECRET = process.env.SECRET_KEY;

const login = (req, res) => {
  const { email, password } = req.body;
  applicant
    .findOne({ email })
    .then((data) => {
      bcrypt.compare(password, data.password, (err, result) => {
        if (err) res.status(400).json('Wrong Password');
        else {
          const userToken = { userId: data.id };
          const cookie = sign(userToken, SECRET);
          res.cookie('applicant', cookie, { httpOnly: true }).json(data);
        }
      });
    })
    .catch(() => res.status(400).json('User not exist'));
};

module.exports = login;
