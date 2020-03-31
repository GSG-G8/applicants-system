const mongoose = require('mongoose');

const { Schema } = mongoose;

const technicalTask = new Schema({
  taskName: String,
  taskDescription: String,
});

module.exports = mongoose.model('tecTask', technicalTask);
