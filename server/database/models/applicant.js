const mongoose = require('mongoose');

const { Schema } = mongoose;
const applicantSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    trim: true,
  },
  cohorts: [String],
  gender: {
    type: String,
    trim: true,
  },
  avatar: {
    type: String,
    trim: true,
  },
  mobileNumber: {
    type: String,
  },
  age: {
    type: Number,
    min: 18,
  },
  avatar: {
    type: String,
    trim: true,
  },
  motivation: {
    type: String,
    trim: true,
  },
  englishSpeaking: {
    type: String,
    trim: true,
  },
  englishUnderstanding: {
    type: String,
    trim: true,
  },
  employmentStatus: {
    type: String,
    trim: true,
  },
  jobTitle: {
    type: String,
    default: null,
    trim: true,
  },
  university: {
    type: String,
    trim: true,
  },
  specialization: {
    type: String,
    trim: true,
  },
  cvLink: {
    type: String,
    trim: true,
  },
  codingExperience: {
    type: String,
    trim: true,
  },
  primaryMotivation: {
    type: String,
    trim: true,
  },
  caReading: {
    type: String,
    trim: true,
  },
  available: {
    type: Boolean,
  },
  githubLink: {
    type: String,
    trim: true,
  },
  joinDiscord: {
    type: Boolean,
  },
  freeCodeCampPoints: {
    type: Number,
  },
  freeCodeCampTopics: {
    type: Boolean,
    default: false,
  },
  freeCodeCampLink: {
    type: String,
    default: 'https://www.freecodecamp.org/code_academy',
    trim: true,
  },
  codeWarsLink: {
    type: String,
    default: 'https://www.codewars.com/users/code_academy',
    trim: true,
  },
  codeWarsKyu: {
    type: Number,
    trim: true,
  },
  technicalTasks: {
    type: Boolean,
    default: false,
  },
  technicalTasksLinks: {
    type: String,
    trim: true,
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'projects',
  },
  projectGithubLink: {
    type: String,
    trim: true,
  },
  applicationStartDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  applicationEndDate: {
    type: Date,
  },
  applicationSubmittedDate: {
    type: Date,
  },
  accepted: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model('applicant', applicantSchema);
