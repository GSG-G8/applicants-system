const jwt = require('jsonwebtoken');

const applicant = require('../database/models/applicant');
const admin = require('../database/models/admin');

require('env2')('config.env');

const isAuthorized = (req, res, next) => {
  const { email } = req.body;
  applicant.findOne({ email }).then((data) => {
    if (data === null) {
      res
        .status(401)
        .send({ statusCode: 401, auth: false, error: 'you are Unauthorized' });
    }
    jwt.verify(req.cookies.applicant, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        res.status(401).send({
          statusCode: 401,
          auth: false,
          error: 'you are Unauthorized',
        });
      } else {
        next();
      }
    });
  });
};

const isAdmin = (req, res, next) => {
  const { email } = req.body;
  admin.findOne({ email }).then((data) => {
    if (data === null) {
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
          next();
        }
      });
    }
  });
};

module.exports = { isAuthorized, isAdmin };
