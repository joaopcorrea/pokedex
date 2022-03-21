import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { getPokemonDetails } from '../pokemon/services/getPokemonDetails';
import { listPokemons, PokemonListInterface } from '../pokemon/services/listPokemons';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

interface PokedexProps {

}

const Pokedex: React.FC<PokedexProps> = () => {
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<any | undefined>(undefined);

  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results));
  }, []);

  useEffect(() => {
    if (!selectedPokemon) return;

    getPokemonDetails(selectedPokemon.name).then((response) => setSelectedPokemonDetails(response));
  }, [selectedPokemon]);

  return (
    <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>

      <h1>Pokedex</h1>

      Pokemons:
      {pokemons.map((pokemon) => <button onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>)}

      {selectedPokemon && <h3>Pokemon selecionado: {selectedPokemon.name}</h3>}

      {JSON.stringify(selectedPokemonDetails, undefined,2)}
    </div>
  );
}

export default Pokedex;