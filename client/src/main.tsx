import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ChakraProvider, ColorMode, ColorModeScript } from '@chakra-ui/react';
import App from './App';
import { theme } from './styles/theme';
import { config } from './styles/config';

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
