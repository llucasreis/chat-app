import React, { useEffect, useState } from 'react';
import socket from '../../services/socket';

interface ChatParams {
  name: string;
  room: string;
}

const Chat: React.FC = () => {
  const [params, setParams] = useState<ChatParams>({} as ChatParams);

  useEffect(() => {
    const URLParams = new URLSearchParams(window.location.search);

    setParams({
      name: URLParams.get('name') as string,
      room: URLParams.get('room') as string,
    });

    socket.emit('join', {
      name: URLParams.get('name'),
      room: URLParams.get('room'),
    });
  }, []);

  return <h1>Hello World</h1>;
};

export default Chat;
