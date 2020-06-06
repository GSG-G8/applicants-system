const { verify } = require('jsonwebtoken');

require('env2')('config.env');

const isAuthorized = (req, res, next) => {
  try {
    verify(req.cookies.applicant, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        res.status(401).send({
          statusCode: 401,
          auth: false,
          message: 'you are Unauthorized',
        });
      } else {
        next();
      }
    });
  } catch (err) {
    next(err);
  }
};

const isAdmin = (req, res, next) => {
  try {
    verify(req.cookies.admin, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        res.status(401).send({
          statusCode: 401,
          auth: false,
          message: 'you are Unauthorized',
        });
      } else {
        next();
      }
    });
  } catch (err) {
    next(err);
  }
};

const userAuthorized = (req, res, next) => {
  try {
    verify(req.cookies.applicant, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        res.status(401).send({
          statusCode: 401,
          auth: false,
          message: 'you are Unauthorized',
        });
      } else {
        const { userId } = token;
        res.status(200).json({
          statusCode: 200,
          auth: true,
          userId,
          message: 'you are authorized',
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
          message: 'you are Unauthorized',
        });
      } else {
        const { AdminId } = token;
        res.status(200).json({
          statusCode: 200,
          auth: true,
          AdminId,
          message: 'you are authorized',
        });
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { isAuthorized, isAdmin, userAuthorized, adminAuthorized };
