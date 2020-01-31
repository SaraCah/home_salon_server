const express = require('express')
const router = express.Router()
let Admin = require('../../models/seeds/AdminSeed')
const AdminModel = require('../../models/Admin')

router.get('/', (req, res) => {
  AdminModel.create(Admin)
    .then(user => {
      res.send(user)
    })
    .catch(err => {
      res.sendStatus(err.message)
    })
})

module.exports = router
