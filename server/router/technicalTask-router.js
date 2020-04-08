const express = require('express');

const taskRouter = express.Router();

const getTasks = require('../controllers/task/getTasks');

taskRouter.use(getTasks);

module.exports = taskRouter;
