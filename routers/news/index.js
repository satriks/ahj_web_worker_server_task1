const Router = require('koa-router')
const db = require('../../db/db')
const router = new Router()

router.get('/news', async (ctx) => {
  // const broken = Math.random()
  // if (broken < 0.5) {
  //   ctx.response.status = 500
  //   return
  // }

  // ctx.set('Access-Control-Allow-Origin', '*'); // Allow requests from all domain names (the request does not carry the cookie can be used * if there carrying cookie request must specify the domain name)
  // // ctx.set ( "Access-Control-Allow-Origin", "http: // localhost: 8080"); // Allow only the domain name http: // localhost: 8080 request

  // // ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE'); // settings allow HTTP request method

  // ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type'); // field is required. It is also a comma-delimited string, indicating all the header fields supported by the server.
  // // // After the server receives the request, check the Origin, after the Access-Control-Request-Method and Access-Control-Request-Headers field to verify that allow cross-origin requests, we can respond.

  // ctx.set('Content-Type', 'application/json;charset=utf-8'); // Content-Type represents a particular media type information request

  // ctx.set('Access-Control-Allow-Credentials', true)

  ctx.responseHeaders.set('Access-Control-Allow-Headers', "*")
  ctx.responseHeaders.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
  ctx.responseHeaders.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type')
  ctx.responseHeaders.set('Access-Control-Allow-Credentials', true)

  console.log('ping')
  ctx.response.body = {
    status: 'OK',
    timestamp: Date.now().toString(),
    news: db.news
  }
})

module.exports = router
