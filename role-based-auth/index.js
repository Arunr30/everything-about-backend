require('dotenv').config();
const express = require('express');
const connectToDb = require('./db/db');
const app = express();
app.use(express.json());

connectToDb();
app.listen(process.env.PORT, () => {
  console.log('server is serving');
})