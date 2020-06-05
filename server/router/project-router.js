const express = require('express');

const projectRouter = express.Router();

const getProjectById = require('../controllers/project/getProjectById');

projectRouter.get('/:id', getProjectById);

module.exports = projectRouter;
