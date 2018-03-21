const mongoose = require('mongoose')

const flightSchema = mongoose.Schema({
  from: String,
  to: String
})

const tripSchema = mongoose.Schema({
  name: String,
  flights: [flightSchema]
})

module.exports = mongoose.model('Trip', tripSchema)
