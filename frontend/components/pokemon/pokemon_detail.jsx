import React from 'react';


class PokemonDetail extends React.Component {



  componentDidMount() {

     const pokemonId = this.props.match.params.id;
     this.props.requestSinglePokemon(pokemonId);
   }

  componentWillReceiveProps(newProps){
    // debugger
    const pokemonId = this.props.match.params.id;
    if (pokemonId !== newProps.match.params.id){
      this.props.requestSinglePokemon(newProps.match.params.id);
    }
  }

  render () {
    const pokemonId = this.props.match.params.id;
    // debugger
    const pokemon = this.props.pokemon[pokemonId] || {};
    const moves = pokemon.moves || [];
    const itemIds = pokemon.item_ids || [];
    let pokemonItems;
    debugger
    if (this.props.items) {
      pokemonItems = itemIds.map( itemId => {
        return (<li>{this.props.items[itemId].name}</li>);
      });
    }

    return (
      <div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image_url}/>
        <ul>
          <li key='attack'>{pokemon.attack}</li>
          <li key='defense'>{pokemon.defense}</li>
          <li key='moves'>{moves.join(', ')}</li>
          <li key='type'>{pokemon.poke_type}</li>
        </ul>
        <ul>
          {pokemonItems}
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
