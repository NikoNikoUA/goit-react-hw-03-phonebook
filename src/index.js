import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    btnColor: 'rgb(255, 165, 0)',
    btnHover: 'rgb(243, 189, 90)',
    backgroundColor: 'rgb(107, 107, 239)',
    containerColor: 'rgb(64, 64, 239)',
    error: 'red',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
