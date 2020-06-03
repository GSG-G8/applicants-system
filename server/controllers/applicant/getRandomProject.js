const project = require('../../database/models/project');

const randomProject = (req, res, next) => {
  project
    .aggregate([{ $sample: { size: 1 } }], (err, result) => {
      const { _id } = result[0];
      if (err)
        res
          .status(400)
          .json({ status: 'Failed', message: 'There is no projects' });

      if (!result.length) {
        return res
          .status(404)
          .json({ statusCode: 404, error: `Project not found` });
      }

      return res.status(200).json({ status: 'successfully', _id });
    })
    .catch(next);
};

module.exports = randomProject;
