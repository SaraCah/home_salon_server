const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')
const config = require('config')
const jwt = require('jsonwebtoken')

const Admin = require('../../models/Admin')
// API route
//  POST req => api/login
// route to authorize user

router.post(
  '/',
  [
    check('name', 'Incorrect name').exists(),
    check('password', 'Incorrect Password').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, password } = req.body

    try {
      let admin = await Admin.findOne({ name })
    }
  }
)
