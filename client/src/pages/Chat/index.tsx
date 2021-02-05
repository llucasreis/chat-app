import React, { useEffect, useState } from 'react';
import socket from '../../services/socket';

interface ChatParams {
  name: string;
  room: string;
}

const Chat: React.FC = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setName(params.get('name') as string);
    setRoom(params.get('room') as string);

    console.log('Passou');

    socket.emit('join', { name, room });
  }, [name, room]);

  return <h1>Hello World</h1>;
};

export default Chat;
