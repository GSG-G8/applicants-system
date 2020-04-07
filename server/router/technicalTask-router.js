const express = require('express');

const taskRouter = express.Router();

const getTasks = require('../controllers/task/getTasks');

taskRouter.get('/tasks', getTasks);

module.exports = taskRouter;
