import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducers';
import questions from './questions.conf';
import App from './components/App';

// https://redux.js.org/api/createstore#createstorereducer-preloadedstate-enhancer
const store = createStore(reducer, { words: questions.map(() => ''), currentQuestion: 0 });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
