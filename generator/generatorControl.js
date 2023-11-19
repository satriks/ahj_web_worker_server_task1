const db = require('../db/db')
const createRandomNews = require('./generator')

const createNews = () => {
  let num = 0
  while (num < 10) {
    db.addNews(createRandomNews())
    num++
  }
}

module.exports = createNews
