// File for mongoDB connection to express server
const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

// db connection to be called in server.js
const dbConnection = async () => {
  try {
    // connect mongoDB to server using mongoose connect method, values in the parameter are to avoid deprication warnings
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    console.log('Database is Connected...')
  } catch (err) {
    console.log(err.message)
    // exit process/connection with failure
    process.exit(1)
  }
}

export default dbConnection
