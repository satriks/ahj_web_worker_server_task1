const Koa = require('koa')
const { koaBody } = require('koa-body')
const { Date } = require('core-js')
const cors = require('@koa/cors')
const port = 7070
const app = new Koa()
const slow = require('koa-slow')
const createNews = require('./generator/generatorControl')
app.use(cors())
app.use(slow({ delay: 15000 }))

const router = require('./routers')

console.log(new Date(Date.now()).toLocaleString())

app.use(koaBody({
  multipart: true
}))

// app.use(async (ctx, next) => {
//   ctx.set('Access-Control-Allow-Origin', '*');
//   ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//   await next();
// });

app.use(router())

app.listen(port)
console.log('listen port ' + port)

createNews()
