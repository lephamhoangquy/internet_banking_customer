/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) =>
        localStorage.getItem('accessToken') ? (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: matchProps.location } }}
          />
        )
      }
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default RouteWithLayout;
