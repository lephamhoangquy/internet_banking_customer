/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import theme from './theme';
import Routes from './Routes';
import { socket } from './socket';
import { getProfile } from './Actions';

const browserHistory = createBrowserHistory();

const App = ({ getMyProfile }) => {
  const token = localStorage.getItem('accessToken');
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    socket.emit('init', token);
    if (user) {
      getMyProfile();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMyProfile: () => {
      dispatch(getProfile());
    },
  };
};

App.propTypes = {
  getMyProfile: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
