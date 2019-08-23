import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from './store/reducers/combinedReducers';

import * as history from 'history';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const hist = history.createBrowserHistory();

// https://github.com/zalmoxisus/redux-devtools-extension#usage
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store with thunk
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, routerMiddleware(history))));

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <Router className="app" history={hist}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// allowing hot reload for create-react-app
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <Provider store={store}>
        <Router className="app" history={hist}>
          <NextApp />
        </Router>
      </Provider>,
      document.getElementById('root')
    );
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
