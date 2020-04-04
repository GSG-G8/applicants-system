const { verify } = require('jsonwebtoken');

require('env2')('config.env');

const isAuthorized = (req, res) => {
  verify(req.cookies.applicant, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({ msg: 'you are not authorized' });
    }
  });
};

module.exports = { isAuthorized };
