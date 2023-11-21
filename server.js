const Koa = require('koa')
const { koaBody } = require('koa-body')
const { Date } = require('core-js')
const cors = require('koa2-cors')
const port = 7070
const app = new Koa()
const slow = require('koa-slow')
const createNews = require('./generator/generatorControl')
app.use(cors())


const router = require('./routers')

console.log(new Date(Date.now()).toLocaleString())

app.use(koaBody({
  multipart: true
}))

// app.use(async (ctx, next) => {
//   ctx.set('Access-Control-Allow-Origin', 'https://satriks.github.io'); // Allow requests from all domain names (the request does not carry the cookie can be used * if there carrying cookie request must specify the domain name)
//   // // ctx.set ( "Access-Control-Allow-Origin", "http: // localhost: 8080"); // Allow only the domain name http: // localhost: 8080 request

//   ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE'); // settings allow HTTP request method

//   ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type'); // field is required. It is also a comma-delimited string, indicating all the header fields supported by the server.
//   // // // After the server receives the request, check the Origin, after the Access-Control-Request-Method and Access-Control-Request-Headers field to verify that allow cross-origin requests, we can respond.

//   ctx.set('Content-Type', 'application/json;charset=utf-8'); // Content-Type represents a particular media type information request

//   ctx.set('Access-Control-Allow-Credentials', true)

//   ctx.set('Service-Worker-Allow' , '/' );
//   await next();
// });

app.use(slow({ delay: 5000 }))
app.use(router())

app.listen(port)
console.log('listen port ' + port)

createNews()
