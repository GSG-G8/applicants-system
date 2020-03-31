const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

const user = require('../../database/models/applicant');

const SECRET = 'aplecant';

const login = (req, res) => {
  const { email, password } = req.body;
  user
    .findOne({ email })
    .then((data) =>
      bcrypt.compare(password, data.password, (err, result) => {
        if (err) res.status(400).json('Wrong Password');
        else {
          const userToken = { userId: data.id };
          const cookie = sign(userToken, SECRET);
          res.cookie('aplecant', cookie, { httpOnly: true }).json(data);
        }
      })
    )
    .catch(() => res.status(400).json('User not exist'));
};

module.exports = login;
