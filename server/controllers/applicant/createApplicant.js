const Applicant = require('../../database/models/applicant');

const createApplicant = (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide an applicant',
    });
  }

  const applicant = new Applicant(body);

  if (!applicant) {
    return res.status(400).json({ success: false, error: 'err' });
  }

  applicant
    .save()
    .then(() =>
      res.status(200).json({
        success: true,
        id: applicant._id,
        message: 'Applicant created!',
      })
    )
    .catch((error) =>
      res.status(400).json({
        error,
        message: 'Applicant not created!',
      })
    );
};

module.exports = createApplicant;
