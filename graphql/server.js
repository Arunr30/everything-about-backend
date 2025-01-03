const e = require('express')
const express = require('express')
const app = express();
app.get('/',(req, res) => {
  console.log('hiii')
})

app.listen(3000, () => {
  console.log('serever is serving!!!')
})