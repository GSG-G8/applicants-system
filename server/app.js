const express = require('express');
const { join } = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const router = require('./router');
const dataBase = require('./database/connection');

const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

const middlewares = [
  compression(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: false }),
];
app.use(middlewares);

dataBase
  // eslint-disable-next-line no-console
  .on('open', () => console.log('mongo database is connected'))
  .on('error', () => process.exit(1));

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.use('/api/v1', router);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
