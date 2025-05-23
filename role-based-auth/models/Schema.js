const mongoose = require('mongoose');
const userModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  role:{
    type: String,
    enum: ['user','admin'],
    default: 'user'
  }
},{timestamps: true})

module.exports = mongoose.model('User', userModel);