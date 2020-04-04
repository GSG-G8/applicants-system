const mongoose = require('mongoose');

const { Schema } = mongoose;

const technicalTaskSchema = new Schema({
  taskName: {
    type: String,
    required: true,
    trim: true,
  },
  taskDescription: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('TechnicalTask', technicalTaskSchema);
