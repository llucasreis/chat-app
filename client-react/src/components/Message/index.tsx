import { Box, Flex, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface MessageProps {
  name: string;
  currentUser: boolean;
  children: ReactNode;
}

export default function Message({
  name,
  currentUser,
  children,
}: MessageProps): JSX.Element {
  return (
    <Flex
      justify={currentUser ? 'flex-end' : 'flex-start'}
      paddingTop="5px"
      paddingBottom="5px"
    >
      <Box
        bg={currentUser ? 'blue.500' : 'gray.200'}
        borderRadius="lg"
        color={currentUser ? 'white' : 'black'}
        paddingLeft="15px"
        paddingRight="15px"
        paddingTop="5px"
        paddingBottom="5px"
      >
        <Text>{children}</Text>
      </Box>
      {!currentUser && (
        <Text
          display="flex"
          alignItems="center"
          color="gray.500"
          paddingLeft="10px"
        >
          {name}
        </Text>
      )}
    </Flex>
  );
}
