const express = require('express');
const app = express();

const timeLogger = (req,res,next) => {
    const timeStamp = new Date().toISOString()
    console.log(`${timeStamp} from ${req.method} to ${req.url}`)
    next();
}

app.use(timeLogger)


app.get('/', (req,res) => {
    res.send('hey')
})

app.listen(3000)