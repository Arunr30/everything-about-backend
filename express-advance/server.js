require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT
console.log(PORT, () => {
  console.log('port is connected!!!');
  
})
