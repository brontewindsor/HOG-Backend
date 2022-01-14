const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  userName: String,
  password: String,
  email: String,
  userType: String,
  token: String
  
})

module.exports.User = mongoose.model('User', userSchema)
