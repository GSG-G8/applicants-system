const mongoose = require('mongoose');

const { Schema } = mongoose;
const applicantSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  address: {
    type: String,
  },
  cohorts: [String],
  gender: {
    type: String,
  },
  mobileNumber: {
    type: Number,
    min: 10,
    max: 18,
  },
  age: {
    type: Number,
    min: 18,
    max: 115,
  },
  motivation: {
    type: String,
  },
  englishSpeaking: {
    type: String,
  },
  englishUnderstanding: {
    type: String,
  },
  employmentStatus: {
    type: String,
  },
  jobTitle: {
    type: String,
    default: null,
  },
  university: {
    type: String,
  },
  specialization: {
    type: String,
  },
  cvLink: {
    type: String,
  },
  codingExperience: {
    type: String,
  },
  primaryMotivation: {
    type: String,
  },
  caReading: {
    type: String,
  },
  available: {
    type: Boolean,
  },
  githubLink: {
    type: String,
  },
  joinDiscord: {
    type: Boolean,
  },
  freeCodeCampPoints: {
    type: Number,
    min: 0,
    max: 500,
  },
  freeCodeCampTopics: {
    type: Boolean,
    default: false,
  },
  codeWarsLink: {
    type: String,
  },
  codeWarsKyu: {
    type: Number,
  },
  technicalTasks: {
    type: Boolean,
    default: false,
  },
  technicalTasksLinks: {
    type: String,
  },
  projectId: {
    type: Number,
    min: 1,
    max: 10,
  },
  projectGithubLink: {
    type: String,
  },
  applicationStartDate: {
    type: Number, // we can use epoch time as number
  },
  applicationEndDate: {
    type: Number, // we can use epoch time as number
  },
  applicationSubmittedDate: {
    type: Number, // we can use epoch time as number
  },
  accepted: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model('applicantSchema', applicantSchema);
