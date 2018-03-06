const mongoose = require('mongoose')

module.exports = mongoose.model('Passenger', {
  firstName: String,
  middleName: String,
  lastName: String,
  email: String,
  street1: String,
  street2: String,
  city: String,
  state: String,
  zip: String,
  passportNumber: String,
  employer: String
})
