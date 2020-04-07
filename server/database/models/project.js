const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
      trim: true,
    },
    projectInstructions: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

projectSchema.plugin(random);

module.exports = mongoose.model('project', projectSchema);
