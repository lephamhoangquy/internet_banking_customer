// import React from 'react';
// import {
//   Switch,
//   Route,
//   BrowserRouter as Router,
//   Redirect,
// } from 'react-router-dom';
// import { LoginRoute, PrivateRoute } from './Components/PrivateRoute';
// import Login from './Containers/Login';
// import Home from './Containers/Home';
// import NoMatch from './Components/NoMatch';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" render={() => <Redirect to="/home" />} exact />
//         <LoginRoute path="/login" component={Login} exact />
//         <PrivateRoute path="/home" exact={false} component={Home} />
//         <Route path="*">
//           <NoMatch />
//         </Route>
//         );
//       </Switch>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
// import validate from 'validate.js';

// import { chartjs } from './helpers';
import theme from './theme';
// import 'react-perfect-scrollbar/dist/css/styles.css';
// import './assets/scss/index.scss';
// import validators from './common/validators';
import Routes from './Routes';

const browserHistory = createBrowserHistory();

// Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
//   draw: chartjs.draw
// });

// validate.validators = {
//   ...validate.validators,
//   ...validators
// };

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
