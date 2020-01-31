const seeder = require('mongoose-seed')
const TestimonialModel = require('../testimonials')

const dbConnection = async () => {
  seeder.connect(db, () => {
    seeder.loadModels([TestimonialModel])
  })
  seeder.load
}

module.exports = dbConnection
