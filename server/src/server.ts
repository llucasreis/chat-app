import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import User from '@models/User';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
app.use(cors());
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    credentials: false,
  },
});
const userModel = new User();

interface ISocketJoinEvent {
  name: string;
  room: string;
}

io.on('connection', (socket: Socket) => {
  console.log('connected');
  console.log(`New connection with id: ${socket.id}`);

  socket.on('join', data => {
    const { name, room } = data as ISocketJoinEvent;
    const user = userModel.addUser({ id: socket.id, name, room });

    socket.join(room);

    socket.emit('message', {
      user: 'admin',
      text: `${user.name}, welcome to room ${room}`,
    });

    socket.broadcast
      .to(room)
      .emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(room).emit('roomData', {
      room,
      users: userModel.getUsersInRoom(room),
    });
  });

  socket.on('sendMessage', message => {
    const user = userModel.getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });
  });

  socket.on('disconnect', () => {
    const user = userModel.removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', {
        user: 'Admin',
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit('roomData', {
        room: user.room,
        users: userModel.getUsersInRoom(user.room),
      });
    }
  });
});

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

const port = process.env.PORT || 3333;

httpServer.listen(port, () => {
  console.log(`🚀 Server started on port ${port}!`);
});
