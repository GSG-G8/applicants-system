const mongoose = require('mongoose');

const { Schema } = mongoose;

const technicalTask = new Schema({
  taskName: { type: String, required: true },
  taskDescription: { type: String, required: true },
});

module.exports = mongoose.model('technicalTask', technicalTask);
