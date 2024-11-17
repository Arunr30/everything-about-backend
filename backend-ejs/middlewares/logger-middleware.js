// application level middlewares

const express = require('express')
const app = express();

const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date()} -- ${req.method} -- ${req.url}`)
    next()
}

app.use(loggerMiddleware)

app.get('/', (req, res) => {
    res.send('hyyy')
})

app.listen(3000, () => {
    console.log(`port is listenig on 3000`)
})