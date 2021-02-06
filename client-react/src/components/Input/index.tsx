import React from 'react';
import {
  FormControl,
  FormLabel,
  Input as ChackraInput,
  InputProps as ChackraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <FormControl id={name}>
      {!!label && <FormLabel>{label}</FormLabel>}
      <ChackraInput size="lg" id={name} focusBorderColor="blue.500" {...rest} />
    </FormControl>
  );
};

export default Input;
