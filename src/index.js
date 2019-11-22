import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

const applicationStore = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={applicationStore}>
    <App />
  </Provider>,
  rootElement
);
