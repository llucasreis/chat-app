import { ChakraProvider, ColorMode, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { config } from './styles/config';
import { theme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript
        initialColorMode={config.initialColorMode as ColorMode}
      />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
