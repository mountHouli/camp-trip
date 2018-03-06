const mongoose = require('mongoose')

require('../src/helpers/connectToMongo.js')

mongoose.connection.dropDatabase(() => {
  mongoose.connection.close()
})
