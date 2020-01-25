const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const AdminModel = require('../../models/admins')
const Admin = require('../../models/seeds/Admin')

router.get('/', (req, res) => {
  Admin.then(doc => res.send(doc)).catch(err => {
    res.sendStatus(500)
  })
})

module.exports = router
