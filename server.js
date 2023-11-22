const Koa = require('koa')
const { koaBody } = require('koa-body')
const { Date } = require('core-js')
const cors = require('koa2-cors')
const port = process.env.port || 7070
const app = new Koa()
const slow = require('koa-slow')
const createNews = require('./generator/generatorControl')
app.use(cors())

const router = require('./routers')

console.log(new Date(Date.now()).toLocaleString())

app.use(koaBody({
  multipart: true
}))

app.use((ctx, next) => {
  ctx.body = " Сервер работает,  тест"
  next()
})


app.use(slow({ delay: 5000 }))
app.use(router())

app.listen(port)
console.log('listen port ' + port)

createNews()
