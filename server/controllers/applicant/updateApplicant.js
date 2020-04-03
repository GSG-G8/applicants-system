const Applicant = require('../../database/models/applicant');
const validationUpdate = require('../../utils/validation/applicantValidation');

const updateApplicant = (req, res) => {
  const { id } = req.params;
  const {
    cohorts,
    freeCodeCampPoints,
    freeCodeCampTopics,
    codeWarsKyu,
    technicalTasks,
    TechnicalTasksLinks,
    projectId,
    applicationStartDate,
    applicationEndDate,
    applicationSubmittedDate,
    accepted,
    ...rest
  } = req.body;

  validationUpdate(rest).then((valid) => {
    if (!valid) res.status(400).json({ err: 'error validation' });
    else {
      Applicant.updateOne({ _id: id }, rest)
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
            message: 'User not exists!',
          })
        );
    }
  });
};

module.exports = updateApplicant;
