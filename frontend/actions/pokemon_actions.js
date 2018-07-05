import * as ApiUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';

export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const receiveSinglePokemon = ({ pokemon, items }) => {
  return {
    type: RECEIVE_SINGLE_POKEMON,
    pokemon,
    items
  };
};

export const requestSinglePokemon = (id) => (dispatch) => {
  ApiUtil.fetchSinglePokemon(id).then(payload => dispatch(receiveSinglePokemon(payload)));
};


export const requestAllPokemon = () => (dispatch) => {
  ApiUtil.fetchAllPokemon().then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};
