require('dotenv').config();
const express = require('express');
const connectToDb = require('./db/db');
const authroute = require('./router/authroute');
const homeroute = require('./router/homeroute');

const app = express();
app.use(express.json());

app.use('/api/auth', authroute)
app.use('/api/home', homeroute )
app.use('/api/auth', adm)

connectToDb();
app.listen(process.env.PORT, () => {
  console.log('server is serving');
})