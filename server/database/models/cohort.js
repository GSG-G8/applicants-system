const mongoose = require('mongoose');

const { Schema } = mongoose;

const cohortSchema = new Schema(
  {
    cohortGaza: {
      type: String,
      required: true,
      trim: true,
    },
    cohortKhalil: {
      type: String,
      required: true,
      trim: true,
    },
    cohortGazaٍStartTime: {
      type: String,
      required: true,
      trim: true,
    },
    cohortGazaٍEndTime: {
      type: String,
      required: true,
      trim: true,
    },
    applicationGazaDeadLine: {
      type: String,
      required: true,
      trim: true,
    },
    cohortKhalilStartTime: {
      type: String,
      required: true,
      trim: true,
    },
    cohortKhalilEndTime: {
      type: String,
      required: true,
      trim: true,
    },
    applicationKhalilDeadLine: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Cohort', cohortSchema);
