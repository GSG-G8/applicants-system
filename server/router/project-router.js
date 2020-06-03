const express = require('express');

const projectRouter = express.Router();

const getProjectById = require('../controllers/project/getProjectById');
const randomProject = require('../controllers/project/getRandomProject');

projectRouter.get('/random', randomProject);
projectRouter.get('/:id', getProjectById);

module.exports = projectRouter;
