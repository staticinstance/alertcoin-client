import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './reducers';

const __DEV__ = (process.env.NODE_ENV === "development");

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      promise(),
      thunk,
      logger({
        predicate: (getState, action) => __DEV__
      })),
    __DEV__ && window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

window.__store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
