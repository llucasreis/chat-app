import { Flex, Button, Heading, Box } from '@chakra-ui/react';
import { RiArrowRightFill } from 'react-icons/ri';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Input from '../../components/Input';
import socket from '../../services/socket';
import Message from '../../components/Message';

interface ChatParams {
  name: string;
  room: string;
}

interface SocketMessage {
  user: string;
  text: string;
}

interface ChatMessageParams extends SocketMessage {
  currentUser: boolean;
}

export default function Chat(): JSX.Element {
  const [params, setParams] = useState<ChatParams>({} as ChatParams);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessageParams[]>([]);

  useEffect(() => {
    const URLParams = new URLSearchParams(window.location.search);
    const name = URLParams.get('name');
    const room = URLParams.get('room');

    if (name && room) {
      setParams({
        name,
        room,
      });

      socket.emit('join', {
        name,
        room,
      });
    }
  }, []);

  const handleMessageChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setMessage(event.target.value);
    },
    [],
  );

  const handleSendMessage = useCallback(() => {
    if (message) {
      socket.emit('sendMessage', message);
      setMessage('');
    }
  }, [message]);

  useEffect(() => {
    socket.on('message', (socketMessage: SocketMessage) => {
      const newChatMessage = {
        ...socketMessage,
        currentUser: params.name === socketMessage.user,
      };

      setChatMessages(prevState => [...prevState, newChatMessage]);
    });
  }, [params.name]);

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        w="100%"
        maxWidth={700}
        padding={2}
        bg="white"
        flexDir="column"
        borderRadius={4}
        shadow="0 0 20px rgba(0, 0, 0, 0.05)"
      >
        <Box>
          <Heading>{`Room: ${params.room}`}</Heading>
        </Box>
        <Box marginTop="10px" marginBottom="10px">
          {chatMessages.map(chatMessage => (
            <Message
              key={uuid()}
              currentUser={chatMessage.currentUser}
              name={chatMessage.user}
            >
              {chatMessage.text}
            </Message>
          ))}
        </Box>
        <Box>
          <Flex justify="space-between" gridGap={2}>
            <Input
              name="message"
              placeholder="Write your message"
              value={message}
              onChange={handleMessageChange}
            />
            <Button
              type="button"
              colorScheme="blue"
              rightIcon={<RiArrowRightFill />}
              size="lg"
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
