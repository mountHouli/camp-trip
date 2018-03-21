const KoaRouter = require('koa-router')
const router = new KoaRouter()

const tripController = require('./controllers/trip')

router.get('/trips', tripController.get)

module.exports = router
