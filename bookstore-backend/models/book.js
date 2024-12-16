const mongoose = require('mongoose')

const BookSchmea = mongoose.Schema({
    title : {
        type : String,
        required : [true, 'book name is required'],
        trim : true,
        maxLength : [100, 'book length is required atleast 100']
    },
    author : {
        type : String,
        required : [true, 'author name is required'],
        trim : true,
    },
    year : {
        type : Number,
        required : [true, 'publication year is required'],
        min : [1000, 'book should be published before 1000 years or above'],
        max : [new Date().getFullYear()]
    },
    createdAt : {
        type : Date,
        default : Date.now
    }

})

module.exports = mongoose.model('Book', BookSchmea)