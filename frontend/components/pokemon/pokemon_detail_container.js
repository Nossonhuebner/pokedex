import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.entities.pokemon
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
