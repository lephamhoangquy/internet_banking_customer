import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import socketIOClient from 'socket.io-client';
import theme from './theme';
import Routes from './Routes';

const ENDPOINT = 'http://localhost:5000';

const browserHistory = createBrowserHistory();

const App = () => {
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('debitNoti', (data) => {
      console.log('App -> data', data);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
