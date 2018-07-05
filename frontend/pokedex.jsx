import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store.js';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);


  // // TODO: DELETE FOR PRODUCTION
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
