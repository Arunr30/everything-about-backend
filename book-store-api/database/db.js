const mongoose = require('mongoose')

const connectToDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://arunvasur:WGgxms36fZSYRbzt@cluster0.cqc6n.mongodb.net/")
        console.log('connected to DB')
    }catch(e) {
        console.error('connection failed', error)
    }
}

module.exports = connectToDB;