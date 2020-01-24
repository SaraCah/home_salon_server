const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const AdminModel = require('../../models/admins')

router.get('/', (req, res) => {
  AdminModel.create({
    role: 'Admin',
    aboutme: 'this is all abou me',
    mobile: '04523234',
    location: 'Brisbane'
  })
    .then(doc => {
      res.send(doc)
    })
    .catch(err => {
      res.sendStatus(500)
    })
})

module.exports = router
