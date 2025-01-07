require('dotenv').config();
const express = require('express');
const connectToDb = require('./db/db');
const authroute = require('./router/authroute');
const homeroute = require('./router/homeroute');
const adminroute = require('./router/adminroute')

const app = express();
app.use(express.json());

app.use('/api/auth', authroute)
app.use('/api/home', homeroute )
app.use('/api/admin', adminroute)

connectToDb();
app.listen(process.env.PORT, () => {
  console.log('server is serving');
})