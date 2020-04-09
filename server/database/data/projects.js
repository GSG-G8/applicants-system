const Project = require('../models/project');

module.exports = async () => {
  const project = [
    {
      projectName: 'Google single page',
      projectInstructions:
        'create counter that start count from 1 to 100 by clicking on button and stop ...',
    },
    {
      projectName: 'HTML and javascript project',
      projectInstructions:
        'create counter that start count from 1 to 100 by clicking on button and stop ...',
    },
    {
      projectName: 'ToDo List project',
      projectInstructions:
        'create counter that start count from 1 to 100 by clicking on button and stop ...',
    },
  ];
  await Project.create(project);
};
