require('dotenv').config();

const express = require('express');
const connectToDb = require('./database/db');
const authRoutes = require('./routes/auth.routes')
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes)
const PORT = process.env.PORT
connectToDb();
app.listen(PORT, () => {
  console.log('server is serving')
})