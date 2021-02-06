import React from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type ButtonProps = ChakraButtonProps;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ChakraButton
      color="white"
      fontSize="md"
      size="lg"
      colorScheme="blue"
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
