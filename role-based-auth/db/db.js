const mongoose = require('mongoose')

const connectToDb = async() => {
  try {
    mongoose.connect("mongodb+srv://arunvasur:WGgxms36fZSYRbzt@cluster0.cqc6n.mongodb.net/role-based-auth")
    console.log('connected to db')
  } catch (error) {
    console.log('error connecting db', error.message)
  }
}
module.exports = connectToDb;