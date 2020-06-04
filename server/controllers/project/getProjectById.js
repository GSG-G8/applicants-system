const Project = require('../../database/models/project');

const getProjectById = (req, res, next) => {
  Project.findById(req.params.id, (err, project) => {
    if (err) res.status(400).json({ err: "Project doesn't exist" });
    else res.status(200).json({ project });
  }).catch(next);
};

module.exports = getProjectById;
