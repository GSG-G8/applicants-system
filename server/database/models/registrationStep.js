const mongoose = require('mongoose');

const { Schema } = mongoose;

const registrationStepSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  details: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('registrationStep', registrationStepSchema);
