const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  email: String,
  phone: String,
  street1: String,
  street2: String,
  city: String,
  state: String,
  zip: String,
  passportNumber: String,
  employer: String
})

module.exports = mongoose.model('User', userSchema)
