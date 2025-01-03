const express = require('express');
const app = express();
app.use(express.json())

app.post('/signup', (req, res) => {
  const {username, password, email} = req.body;
  
  res.json({
    msg: "signed up!!"
  })
}) 