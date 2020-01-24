const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  role: {
    type: String
  },
  aboutme: {
    type: String
  },
  mobile: {
    type: String
  },
  location: {
    type: String,
    required: true
  }
})

const AdminModel = mongoose.model('admin', AdminSchema)

module.exports = AdminModel
