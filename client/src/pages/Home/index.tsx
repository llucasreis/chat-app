import { Divider, Flex, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Home: React.FC = () => {
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
          <Input name="name" type="text" label="User" autoComplete="off" />
          <Input name="room" type="text" label="Room" />
        </VStack>

        <Button type="submit" mt="8">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
