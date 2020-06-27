import React, { useState } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import Pusher from 'pusher-js';
import { LoginRoute, PrivateRoute } from './Components/PrivateRoute';
import Login from './Containers/Login';
import Dashboard from './Containers/Dashboard';
import NoMatch from './Components/NoMatch';

const App = () => {
  useState(() => {
    console.log('=-----------------------');
    const pusher = new Pusher('c45bb17ba1ce75dfb1e3', {
      cluster: 'ap1',
      encrypted: true,
    });
    console.log('pusher: ', pusher);
    const channel = pusher.subscribe('CREATE_DEBIT_CHANNEL');
    console.log('channel: ', channel);
    channel.bind('debit_noti', (data) => console.log('data: ', data));
  }, []);

  return (
    <Router>
      <Switch>
        {/* <Route
          path="/"
          render={() => <Redirect to="/dashboard/employees" />}
          exact
        /> */}
        <LoginRoute path="/login" component={Login} exact />
        <Route path="/" component={Dashboard} />
        {/* <PrivateRoute path="/dashboard" exact={false} component={Dashboard} /> */}
        <Route path="*">
          <NoMatch />
        </Route>
        );
      </Switch>
    </Router>
  );
};

export default App;
