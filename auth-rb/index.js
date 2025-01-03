require('dotenv').config();

const express = require('express');
const connectToDb = require('./database/db');
const authRoutes = require('./routes/auth.routes');
const homeRoutes = require('./routes/home.routes');
const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes)
app.use('/api/home', homeRoutes)


const PORT = process.env.PORT
connectToDb();
app.listen(PORT, () => {
  console.log('server is serving')
})