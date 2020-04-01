const Applicant = require('../../database/models/applicant');

const updateApplicant = (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }

  Applicant.findOne({ _id: req.params.id }, (err, applicant) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Applicant not found!',
      });
    }
    applicant.fullName = body.fullName;
    applicant.email = body.email;
    applicant.password = body.password;
    applicant
      .save()
      .then(() =>
        res.status(200).json({
          success: true,
          id: applicant._id,
          message: 'Applicant updated!',
        })
      )
      .catch((error) =>
        res.status(404).json({
          error,
          message: 'Applicant not updated!',
        })
      );
  });
};

module.exports = updateApplicant;
