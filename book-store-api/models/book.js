const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required : ['Book title is required'],
        trim: true,
        maxLength: [200,'book cannot be have more than 200 characters']
    },
    author: {
        type: String,
        required : ['Author name is required'],
        trim: true,
        maxLength: [100, 'Author name have must only 200 character']
    },

    year : {
        type: Number,
        required : [true, 'publication year is required'],
        min: [1000, 'year must be atleast 1000'],
        max: [new Date().getFullYear()]
    },

    publisedAt : {
        year : [Date.now()]
    }

})

module.exports = mongoose.model('Book', bookSchema)