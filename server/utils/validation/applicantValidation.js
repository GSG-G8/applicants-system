const yup = require('yup');

const schema = yup.object().shape({
  fullName: yup.string().trim(),
  email: yup.string().email().trim(),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  passwordConfirmation: yup.mixed().oneOf([yup.ref('password')]),
  address: yup.string().trim(),
  cohorts: yup.string().trim(),
  mobileNumber: yup.string().trim(),
  age: yup.string().trim(),
  gender: yup.mixed().oneOf(['male', 'female']),
  motivation: yup.string().trim(),
  avatar: yup.string().url().trim(),
  englishSpeaking: yup.string().trim(),
  englishUnderstanding: yup.string().trim(),
  employmentStatus: yup.string().trim(),
  jobTitle: yup.string().default(null).nullable(),
  university: yup.string().trim(),
  specialization: yup.string().trim(),
  cvLink: yup.string().url().trim(),
  codingExperience: yup.string().trim(),
  primaryMotivation: yup.string().trim(),
  caReaching: yup.string().trim(),
  available: yup.boolean(),
  githubLink: yup.string().url().trim(),
  joinDiscord: yup.boolean(),
  freeCodeCampPoints: yup.number().integer().min(0),
  freeCodeCampTopics: yup.boolean(),
  freeCodeCampLink: yup.string().url().trim(),
  codeWarsLink: yup.string().url().trim(),
  codeWarsKyu: yup.string().trim(),
  technicalTasks: yup.boolean(),
  technicalTasksLinks: yup.string().url().trim(),
  projectGithubLink: yup.string().url().trim(),
  accepted: yup.boolean(),
});

const updateApplicant = (obj) => schema.isValid(obj);

module.exports = updateApplicant;
