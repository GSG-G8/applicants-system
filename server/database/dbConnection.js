const mongoose = require('mongoose');
require('env2')('config.env');

mongoose.Promise = global.Promise;

let dbURI = process.env.DEV_URI;

if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.PRODUCT_URI;
} else {
  dbURI = process.env.DEV_URI;
}

const dbConnection = () => {
  mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};

module.exports = dbConnection;
