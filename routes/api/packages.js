const express = require('express')
const router = express.Router()
// Auth required to create packages
const auth = require('../../middleware/auth')

const { check, validationResult } = require('express-validator/check')

// API route to create packages api/package

router.post(
  '/',
  [
    auth,
    [
      check('packagename', 'Package Name required').exists(),
      check('price', 'Package Price Required').exists(),
      check('services', 'A minimum of one service is required').isArray({
        min: 1
      })
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const admin = await 
  }
)

module.exports = router
