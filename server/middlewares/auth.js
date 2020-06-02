const { verify } = require('jsonwebtoken');

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
    verify(req.cookies.applicant, process.env.SECRET_KEY, (err, token) => {
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
      verify(req.cookies.admin, process.env.SECRET_KEY, (err, token) => {
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

const userAuthorized = (req, res, next) => {
  try {
    verify(req.cookies.applicant, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        res.status(401).send({
          statusCode: 401,
          auth: false,
          error: 'you are Unauthorized',
        });
      } else {
        res.status(200).json({
          statusCode: 200,
          auth: true,
          error: 'you are authorized',
        });
      }
    });
  } catch (err) {
    next(err);
  }
};

const adminAuthorized = (req, res, next) => {
  try {
    verify(req.cookies.admin, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        res.status(401).send({
          statusCode: 401,
          auth: false,
          error: 'you are Unauthorized',
        });
      } else {
        res.status(200).json({
          statusCode: 200,
          auth: true,
          error: 'you are authorized',
        });
      }
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { isAuthorized, isAdmin, userAuthorized, adminAuthorized };
