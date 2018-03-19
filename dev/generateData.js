const faker = require('faker')
const mongoose = require('mongoose')

require('../src/helpers/connectToMongo.js')

const Passenger = require('../src/models/Passenger.js')

const passengers = []

for (let i = 0; i < 10; i++) {
  passengers.push(new Passenger({
    firstName: faker.name.findName(),
    middleName: faker.name.findName(),
    lastName: faker.name.findName(),
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

Promise.all(passengers.map(passenger => passenger.save()))
  .then(() => {
    mongoose.connection.close()
  })

function randomNineDigitNumber () {
  return Math.floor(Math.random() * 1000000000)
}
