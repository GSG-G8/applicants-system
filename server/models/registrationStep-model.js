const mongoose = require('mongoose');

const { Schema } = mongoose;

const registrationStep = new Schema({
  title: String,
  details: String,
});

module.exports = mongoose.model('regStep', registrationStep);
