const Router = require('koa-router')
const db = require('../../db/db')
const router = new Router()

router.get('/news', async (ctx) => {
  const broken = Math.random()
  if (broken < 0.5) {
    ctx.response.status = 500
    return
  }

  console.log('ping')
  ctx.response.body = {
    status: 'OK',
    timestamp: Date.now().toString(),
    news: db.news
  }
})

module.exports = router
