import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store.js';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);


  // TODO: DELETE FOR PRODUCTION
  window.getState = store.getState;
  window.dispatch = store.dispatch;
});

  // TODO: DELETE FOR PRODUCTION
import { fetchAllPokemon } from './util/api_util';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';

window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
