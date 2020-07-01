import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from '../Components/RouteWithLayout';
import { Main as MainLayout, Minimal as MinimalLayout } from '../layouts';
import { LoginRoute } from '../Components/PrivateRoute';
import Dashboard from '../views/Dashboard';
import NotFound from '../views/NotFound';
import Login from '../Containers/Login';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <LoginRoute path="/login" component={Login} exact />
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={NotFound}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
