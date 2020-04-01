const yup = require('yup');

const schema = yup.object().shape({
  address: yup.string().trim(),
  cohorts: yup.string().trim(),
  mobileNumber: yup.string().trim(),
  age: yup.number().integer().min(18),
  motivation: yup.string().trim(),
  englishSpeaking: yup.string().trim(),
  englishUnderstanding: yup.string().trim(),
  employmentStatus: yup.string().trim(),
  jobTitle: yup.string().trim(),
  university: yup.string().trim(),
  specialization: yup.string().trim(),
  cvLink: yup.string().trim(),
  codingExperience: yup.string().trim(),
  primaryMotivation: yup.string().trim(),
  caReading: yup.string().trim(),
  available: yup.boolean(),
  githubLink: yup.string().trim(),
  joinDiscord: yup.boolean(),
  freeCodeCampPoints: yup.number().integer().min(0).max(1500),
  freeCodeCampTopics: yup.boolean(),
  freeCodeCampLink: yup.string().trim(),
  codeWarsLink: yup.string().trim(),
  codeWarsKyu: yup.string().trim(),
  technicalTasks: yup.boolean(),
  technicalTasksLinks: yup.string().trim(),
  projectGithubLink: yup.string().trim(),
});

const updateApplicant = (obj) => schema.isValid(obj);

module.exports = updateApplicant;
