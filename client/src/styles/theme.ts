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
        // color: '#F3F3F3',
        bg: 'gray.100',
      },
    },
  },
});
