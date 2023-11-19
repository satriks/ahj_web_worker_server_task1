const { Faker, en } = require('@faker-js/faker')

const faker = new Faker({ locale: [en] })

function createRandomNews () {
  const titleNews = faker.helpers.fake('Вышла новая песня:  {{music.songName()}} . Песня в жанре {{music.genre()}}. Впервые новинку услышали {{date.recent({locale: ["ru"]})}}')

  return {
    id: faker.string.uuid(),
    title: titleNews,
    image: faker.image.url(),
    received: faker.date.between({ from: (Date.now() - 1000 * 60 * 60 * 12), to: (Date.now()) }).getTime()
  }
}

module.exports = createRandomNews
