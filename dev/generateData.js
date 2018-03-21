const faker = require('faker')
const mongoose = require('mongoose')

require('../src/helpers/connectToMongo.js')

const User = require('../src/models/User.js')

const users = []

for (let i = 0; i < 10; i++) {
  users.push(new User({
    firstName: faker.name.firstName(),
    middleName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    street1: `${faker.address.streetAddress} ${faker.address.streetName} ${faker.address.streetSuffix}`,
    street2: null,
    city: faker.address.city(),
    state: faker.address.state(),
    zip: faker.address.zipCode(),
    passportNumber: randomNineDigitNumber(),
    employer: faker.company.companyName
  }))
}

const Trip = require('../src/models/Trip.js')

const trips = []

for (let i = 0; i < 10; i++) {
  trips.push(new Trip({
    // !! names are a bit easier to search for.  Replace this with better placeholder data.
    name: faker.name.lastName(),
    flights: [
      {
        from: faker.name.firstName(),
        to: faker.name.firstName()
      },
      {
        from: faker.name.firstName(),
        to: faker.name.firstName()
      },
      {
        from: faker.name.firstName(),
        to: faker.name.firstName()
      }
    ]
  }))
}

;(async () => {
  try {
    await Promise.all(users.map(user => user.save()))
    await Promise.all(trips.map(trip => trip.save()))
    mongoose.connection.close()
  }
  catch (err) {
    console.log('Error saving mock data')
    console.log(err)
  }
})()

function randomNineDigitNumber () {
  return Math.floor(Math.random() * 1000000000)
}
