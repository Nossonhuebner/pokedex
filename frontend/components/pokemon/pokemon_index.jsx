import React from 'react';

class PokemonIndex extends React.Component{

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    const listItems = this.props.pokemon.map( (pokemon) => {
      return (
        <li key={pokemon.id}>
          {pokemon.name}
          <img className="small-img" src={pokemon.image_url}/>
        </li>
      );
    });
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default PokemonIndex;
