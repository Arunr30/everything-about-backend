const mongoose = require('mongoose')

const connectToDb = async() => {
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log('database connected')
  } catch(e) {
    console.log('error while connection', e)
    process.exit(1);
  }
}
module.exports = connectToDb;