const mongoose = require('mongoose')

const connectToDB = async() => {
    try {
        mongoose.connect("mongodb+srv://arunvasur:WGgxms36fZSYRbzt@cluster0.cqc6n.mongodb.net/")
        console.log('db connected successfully!!')
    } catch (error) {
        console.log('conncetion failed', error)
        
    }
}

module.exports = connectToDB