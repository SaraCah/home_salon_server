const mongoose = require('mongoose')

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String
  },
  date: {
    type: String
  },
  comment: {
    type: String
  }
})

const TestimonialModel = mongoose.model('testimonial', TestimonialSchema)

module.exports = TestimonialModel
