const Applicant = require('../../database/models/applicant');
const validationUpdate = require('../../utils/validation/applicantValidation');

const updateApplicant = (req, res) => {
  const { body } = req;
  const { id } = req.params;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update',
    });
  }
  validationUpdate(body).then((valid) => {
    if (!valid) res.status(400).json({ err: 'error validation' });
    else {
      Applicant.findOne({ _id: req.params.id }, (err, applicant) => {
        if (err) {
          return res.status(404).json({
            err,
            message: 'Applicant not found!',
          });
        }

        Applicant.updateOne({ _id: id }, body)
          .then(() =>
            res.status(200).json({
              success: true,
              id: req.params.id,
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
    }
  });
};

module.exports = updateApplicant;
