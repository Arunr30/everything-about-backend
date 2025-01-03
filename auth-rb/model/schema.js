const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },

  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ['user' || 'admin'],
    default: 'user'
  }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);