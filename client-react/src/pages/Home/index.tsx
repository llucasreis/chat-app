import React, { ChangeEvent, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Divider, Flex, Heading, VStack } from '@chakra-ui/react';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Home: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [],
  );

  const handleRoomChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setRoom(event.target.value);
    },
    [],
  );

  const handleJoinRoom = useCallback(() => {
    if (name && room) {
      history.push(`/chat/?name=${name}&room=${room}`);
    } else {
      console.error('error');
    }
  }, [history, name, room]);

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        w="100%"
        maxWidth={400}
        padding={8}
        bg="white"
        flexDir="column"
        borderRadius={4}
        shadow="0 0 20px rgba(0, 0, 0, 0.05)"
      >
        <Heading textAlign="center" size="md">
          Join a Room
        </Heading>

        <Divider my={6} />

        <VStack spacing={4}>
          <Input
            name="name"
            type="text"
            label="User"
            autoComplete="off"
            value={name}
            onChange={handleNameChange}
          />
          <Input
            name="room"
            type="text"
            label="Room"
            value={room}
            onChange={handleRoomChange}
          />
        </VStack>

        <Button type="button" mt="8" onClick={handleJoinRoom}>
          Join
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
