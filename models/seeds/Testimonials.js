const seeder = require('mongoose-seed')
const TestimonialModel = require('../testimonials')

const dbConnection = async () => {
  try {
    await seeder.connect(db, () => {
      seeder.loadModels([TestimonialModel])
    })
  } catch (err) {
    console.log(err.message)
    // exit process/connection with failure
    process.exit(1)
  }
}

module.exports = dbConnection
