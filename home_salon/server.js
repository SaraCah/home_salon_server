const express = require('express')
const dbConnection = require('./config/database')
// call express and store in app variable
const app = express()

// call function connect database to express server (./config/database)
dbConnection()

// Get req to '/' to make sure everythings working properly
app.get('/', (req, res) => res.send('API running correctly'))

// Create a port variable (variable when deployed, otherwise 5000)
const PORT = process.env.PORT || 5000

// start server on port PORT
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
