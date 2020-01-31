const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator/check')
// API route for admin // api/admin
// Used to register admin account
// also contains validation using express-validator
// in this specific use case validation was somewhat neglible
// as the only account to exist is a single admin account
// which is created using seeded data
router.post(
  '/',
  [
    check('name', 'Name not found')
      .not()
      .isEmpty(),
    check('email', 'Email not found').isEmail(),
    check('password', 'Password requires 6 or more characters').isLength({
      min: 6
    })
  ],
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
  }
)

module.exports = router
