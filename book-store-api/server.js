require('dotenv').config()
const express = require('express')
const connectToDB = require('./database/db')
const app = express()


connectToDB();

const PORT = process.env.PORT || 3000
app.use(express.json())

app.listen(PORT, () => {
    console.log(`app is listening to ${PORT}`)
})
