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
  cvLink: yup.string().url().trim(),
  codingExperience: yup.string().trim(),
  primaryMotivation: yup.string().trim(),
  caReading: yup.string().trim(),
  available: yup.boolean(),
  githubLink: yup.string().url().trim(),
  joinDiscord: yup.boolean(),
  freeCodeCampPoints: yup.number().integer().min(0).max(1500),
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
