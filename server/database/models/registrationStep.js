const mongoose = require('mongoose');

const { Schema } = mongoose;

const registrationStep = new Schema({
  title: { type: String, required: true },
  details: { type: String, required: true },
});

module.exports = mongoose.model('regStep', registrationStep);
