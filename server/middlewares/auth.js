const jwt = require('jsonwebtoken');

const admin = require('../database/models/admin');

require('env2')('config.env');

const isAuthorized = (req, res, next) => {
  jwt.verify(req.cookies.applicant, process.env.SECRET_KEY, (err, token) => {
    if (err) {
      res
        .status(401)
        .send({ statusCode: 401, auth: false, error: 'you are Unauthorized' });
    } else {
      res.status(200).send({ auth: true, id: token.id });
      next();
    }
  });
};

const isAdmin = (req, res, next) => {
  const { email } = req.body;
  admin.findOne({ email }).then((data) => {
    if (!data.email) {
      res
        .status(401)
        .send({ statusCode: 401, auth: false, error: 'you are Unauthorized' });
    } else {
      jwt.verify(req.cookies.admin, process.env.SECRET_KEY, (err, token) => {
        if (err) {
          res.status(401).send({
            statusCode: 401,
            auth: false,
            error: 'you are Unauthorized',
          });
        } else {
          res.status(200).send({ auth: true, id: token.id });
          next();
        }
      });
    }
  });
};

module.exports = { isAuthorized, isAdmin };
