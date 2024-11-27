import express from 'express'
import http from 'http'
import path from 'path'
import { Server } from 'socket.io'
import cors from 'cors'

const __dirname = path.resolve();
const app = express()
app.use(cors({ origin: 'http://192.168.88.42:8081' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const server = http.createServer(app)
const io = new Server(server);


app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/main.html'))
})

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})


io.on('connection', (socket) => {
    console.log('someone connected')
    socket.emit('update', () => {

    })
    socket.on('createRoom', name => {
        socket.join(name);
        console.log(`User ${socket.id} joined room ${name}`);
        socket.emit('message', `You created room: ${name}`);
        socket.to(name).emit('message', `User ${socket.id} has joined the room.`);
    })

    socket.on('getRooms', () => {
        socket.join('testing');
        const rooms = Array.from(io.sockets.adapter.rooms.keys()).filter(room => room !== socket.id);
        console.log('Active rooms:', rooms);
        socket.emit('getRooms', rooms);
    });
})


const PORT = process.env.PORT || 8081
server.listen(PORT, err => {
    if (err) {
        console.log(err)
        return;
    }
    console.log('listening ' + PORT)
})