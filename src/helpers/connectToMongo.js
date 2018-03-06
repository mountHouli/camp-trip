const mongoose = require('mongoose')

let connected = false

if (!connected) {
  ;(async () => {
    await connectToMongo()
  })()
}

function connectToMongo () {
  return new Promise((resolve, reject) => {
    mongoose.connect('mongodb://localhost:27017/test', (err) => {
      if (err) {
        console.log('Mongoose errored while trying to connect to MongoDB...')
        console.log(err)
        connected = false
        return reject(err)
      }
      connected = true
      console.log('Success establishing connection to MongoDB')
      resolve()
    })
  })
}
