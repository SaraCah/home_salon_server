const express = require('express')

// call express and store in app variable
const app = express()

// Get req to '/' to test server
app.get('/', (req, res) => res.send('Home Page'))

// Create a port variable (variable when deployed, otherwise 5000)
const PORT = process.env.PORT || 5000

// start server on port PORT
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
