require('./helpers/connectToMongo')

const Koa = require('koa')
const cors = require('@koa/cors')

const conf = require('./config.js')
const router = require('./router')

const app = new Koa()

var corsOptions = {
  origin: 'http://localhost:1776',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(conf.port, (err) => {
  if (err) {
    // !! handle this more cleanly
    console.error('Error starting server')
    console.error(err)
    process.exit(1)
  }
})
