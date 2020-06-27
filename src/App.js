import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import { LoginRoute, PrivateRoute } from './Components/PrivateRoute';
import Login from './Containers/Login';
import Dashboard from './Containers/Dashboard';
import NoMatch from './Components/NoMatch';

const App = () => {
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
