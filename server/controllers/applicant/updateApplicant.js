const Applicant = require('../../database/models/applicant');
const updateValidataion = require('../../utils/validation/applicantValidation');

const updateApplicant = (req, res) => {
  const { body } = req;
  console.log(body);

  Applicant.findOne({ _id: req.params.id }, (err, applicant) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Applicant not found!',
      });
    }
    const {
      location,
      address,
      cohorts,
      mobileNumber,
      age,
      motivation,
      englishSpeaking,
      englishUnderstanding,
      employmentStatus,
      jobTitle,
      university,
      specialization,
      cvLink,
      codingExperience,
      primaryMotivation,
      caReading,
      available,
      githubLink,
      joinDiscord,
      freeCodeCampPoints,
      freeCodeCampTopics,
      freeCodeCampLink,
      codeWarsLink,
      codeWarsKyu,
      technicalTasks,
      technicalTasksLinks,
      projectGithubLink,
    } = body;
    updateValidataion(
      location,
      address,
      cohorts,
      mobileNumber,
      age,
      motivation,
      englishSpeaking,
      englishUnderstanding,
      employmentStatus,
      jobTitle,
      university,
      specialization,
      cvLink,
      codingExperience,
      primaryMotivation,
      caReading,
      available,
      githubLink,
      joinDiscord,
      freeCodeCampPoints,
      freeCodeCampTopics,
      freeCodeCampLink,
      codeWarsLink,
      codeWarsKyu,
      technicalTasks,
      technicalTasksLinks,
      projectGithubLink
    ).then((valid) => {
      if (!valid) {
        res.status(400).json({
          error: 'Please fill in all required fields',
        });
      } else {
        applicant.codeWarsKyu = body.codeWarsKyu;
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
      }
    });
  });
};

module.exports = updateApplicant;
