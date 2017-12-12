const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
  username: String,
  password: String,
  email:String,
  sex: String,
  age: Number,
  about: String,
  photo: {
    type: String,
    default: ''
  },
  helpProfile: {
    type: String,
    enum: ['voluntarie', 'donate']
  },
  role: {
    type: String, enum: ['client', 'admin'],
    default:'client'
  }
});

module.exports = mongoose.model('User', userSchema);
