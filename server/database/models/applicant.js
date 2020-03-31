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
    min: 0,
    max: 1500,
  },
  freeCodeCampTopics: {
    type: Boolean,
    default: false,
  },
  codeWarsLink: {
    type: String,
    trim: true,
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
    trim: true,
  },
});
module.exports = mongoose.model('applicant', applicantSchema);
