const mongoose = require('mongoose');

const { Schema } = mongoose;
const adminSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('adminSchema', adminSchema);
