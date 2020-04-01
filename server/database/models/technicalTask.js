const mongoose = require('mongoose');

const { Schema } = mongoose;

const technicalTask = new Schema({
  taskName: { type: String, required: true, trim: true },
  taskDescription: { type: String, required: true, trim: true },
});

module.exports = mongoose.model('technicalTask', technicalTask);
