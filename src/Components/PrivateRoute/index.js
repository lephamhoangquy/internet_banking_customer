/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('accessToken') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object),
};

export const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('accessToken') ? (
        <Redirect
          to={{ pathname: '/dashboard', state: { from: props.location } }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

LoginRoute.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object),
};
