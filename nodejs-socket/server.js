const express = require('express')
const app = express();
const http = require('http')
const socketIO = require('socket.io')

const server = http.createServer(app)
const io = socketIO(server);
app.use(express.static('public'))

const users = new Set();

io.on('connection', (socket) => {
  console.log('user is connected');

  // handle user if they connected

  socket.on('join', (userName) => {
    users.add(userName)
  })
  // broadcasting the user

  io.emit('userJoined',userName)

  io.emit('userList', Array.from(users))
})

const PORT = 5001

app.listen(PORT, () => {
  console.log('server is serving');
  
})