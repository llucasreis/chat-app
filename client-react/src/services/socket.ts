import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_API_URL as string);

socket.on('connect', () => {
  console.log('connected');
});

export default socket;
