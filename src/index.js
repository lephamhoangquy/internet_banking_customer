import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { LoadingIndicator } from './Components/Loading';
import appReducers from './Reducers';
import App from './App';

const middleware = [thunkMiddleware];

const store = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(...middleware)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
    <LoadingIndicator />
  </Provider>,
  document.getElementById('root'),
);
