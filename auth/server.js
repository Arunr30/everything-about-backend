require('dotenv').config()
const express = require('express')
const connectToDB = require('./database/db')
connectToDB()
const app = express();


const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
  console.log('port is listening to 5001')
})