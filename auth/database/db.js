const mongoose = require('mongoose')

const connectToDB = async(req, res) => {
  try {
    mongoose.connect(process.env.MONGO_URI)
    console.log('connected to db')
  } catch (error) {
    console.log('error while connecting a db')
    process.exit(1)
    
  }
}

module.exports = connectToDB;