const express = require('express');
const { join } = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const router = require('./router');
const dataBase = require('./database');

const app = express();

app.disabled('x-powered-by');
app.set('port', process.env.PORT || 5000);

const middlewares = [
  compression(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: false }),
];

app.use(middlewares);

// eslint-disable-next-line no-console
dataBase.on('open', console.log.bind(console, 'mongo database is connected'));

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.use(router);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
