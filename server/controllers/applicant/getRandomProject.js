const project = require('../../database/models/project');

const randomProject = (req, res) => {
  project.findOneRandom((err, result) => {
    if (err)
      res
        .status(400)
        .json({ status: 'Failed', message: 'There is no projects' });
    else res.status(200).json({ status: 'successfully', project: result });
  });
};

module.exports = randomProject;
