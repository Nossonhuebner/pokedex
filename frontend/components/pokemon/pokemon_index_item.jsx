import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <li>
      <Link to={`/pokemon/${props.pokemon.id}`}>
        {props.pokemon.name}
        <img className="small-img" src={props.pokemon.image_url}></img>
      </Link>
    </li>
  );
};
