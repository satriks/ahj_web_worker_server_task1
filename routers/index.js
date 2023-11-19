const combineRoute = require('koa-combine-routers')
const news = require('./news')

const router = combineRoute(
  news
)

module.exports = router
