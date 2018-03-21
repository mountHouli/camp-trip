const Trip = require('../models/Trip')

module.exports.get = async function (ctx, next) {
  try {
    const trips = await Trip.find()
    ctx.body = { data: trips }
  }
  catch (err) {
    // !! handle this better
    console.log('Error getting trips')
    console.log(err)
    ctx.status = 500
    ctx.body = { error: 'There was an error trying to get trips.'}
  }
}
