require('dotenv').config();

const express = require('express');
const connectToDb = require('./database/db');
const app = express();

const PORT = process.env.PORT
connectToDb();
app.listen(PORT, () => {
  console.log('server is serving')
})