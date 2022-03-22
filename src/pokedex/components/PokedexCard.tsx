import * as React from 'react';
import styled from 'styled-components';
import { PokemonListInterface } from '../../pokemon/services/listPokemons';
import { useNavigate } from "react-router-dom";
import { PokemonDetail } from '../../pokemon/interfaces/PokemonDetail';
import { stringify } from 'querystring';
import { Chip } from '@material-ui/core';

interface PokedexCardsProps {
  pokemon: PokemonDetail;
}


 
const PokedexCards: React.FC<PokedexCardsProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  const getColorByType = (type: string) => {
    let color: string;

    switch (type) {
      case "bug":
        color = "#569410";
        break;

        case "dark":
        color = "#a8aba6";
        break;

        case "dragon":
        color = "#7d3315";
        break;

        case "electric":
        color = "#c9a214";
        break;

        case "fairy":
        color = "#e17be3";
        break;

        case "fighting":
        color = "#854d30";
        break;

        case "fire":
        color = "#cf2929";
        break;

        case "flying":
        color = "#b5ebe3";
        break;

        case "ghost":
        color = "#723387";
        break;

        case "grass":
        color = "#165e0f";
        break;

        case "water":
        color = "#0256a1";
        break;
      
      default:
        color = "#b8c2cc";
        break;
    }

    return color;
  }
  
  const Card = styled.section`
    padding: 4em;
    border-radius: 2em;
    background: ${getColorByType(pokemon.types[0].type.name)};
    cursor: pointer;
  `;

  function handleClick() {
    navigate(`/pokemon/${pokemon.name}`);
  }

  return (
    <>
      <Card onClick={handleClick}>
        {pokemon.name}
        {pokemon.types.map((type) => <Chip label={type.type.name} variant="outlined" />)}
        <img src={pokemon.sprites.front_default} />
      </Card>
    </>
  );
}

export default PokedexCards;