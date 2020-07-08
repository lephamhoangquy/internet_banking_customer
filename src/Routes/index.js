import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from '../Components/RouteWithLayout';
import { Main as MainLayout, Minimal as MinimalLayout } from '../layouts';
import { LoginRoute } from '../Components/PrivateRoute';
import Dashboard from '../views/Dashboard';
import NotFound from '../views/NotFound';
import Login from '../Containers/Login';
import UpdatePassword from '../views/UpdatePassword';
import Debit from '../views/Debit';
import CreateDebit from '../views/Debit/CreateDebit';
import Contact from '../views/Contact';
import CreateContact from '../views/Contact/CreateContact';
import Transaction from '../views/Transaction';
import Charge from '../views/Transaction/Charge';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/info" />
      <LoginRoute path="/login" component={Login} exact />
      <RouteWithLayout
        component={Dashboard}
        exact
        layout={MainLayout}
        path="/info"
      />
      <LoginRoute path="/login" component={Login} exact />
      <RouteWithLayout
        component={UpdatePassword}
        exact
        layout={MainLayout}
        path="/update-password"
      />
      <RouteWithLayout
        component={Debit}
        exact
        layout={MainLayout}
        path="/debit"
      />
      <RouteWithLayout
        component={CreateDebit}
        exact
        layout={MainLayout}
        path="/create-debit"
      />
      <RouteWithLayout
        component={Contact}
        exact
        layout={MainLayout}
        path="/contact"
      />
      <RouteWithLayout
        component={CreateContact}
        exact
        layout={MainLayout}
        path="/create-contact"
      />
      <RouteWithLayout
        component={Transaction}
        exact
        layout={MainLayout}
        path="/transaction"
      />
      <RouteWithLayout
        component={Charge}
        exact
        layout={MainLayout}
        path="/transaction/charge"
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
