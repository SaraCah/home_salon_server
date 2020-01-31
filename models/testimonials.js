const mongoose = require('mongoose')

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  comment: {
    type: String,
    required: true
  }
})

const TestimonialModel = mongoose.model('testimonial', TestimonialSchema)

module.exports = TestimonialModel
