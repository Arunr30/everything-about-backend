const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('home page')
    } else if(req.url === '/product-page') {
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.end('product page')
        res.sendDate = true
    } else {
        res.writeHead('404', {'Content-Type' : 'text/plain'})
        res.end('page not found')
    } 
   
})

const port = 3000
server.listen(port, () => {
    console.log(`port is listening to ${port}`)
})