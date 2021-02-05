import { extendTheme } from '@chakra-ui/react';
import { config } from './config';

export const theme = extendTheme({
  config,
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: '#2A2A2A',
      },
    },
  },
});
