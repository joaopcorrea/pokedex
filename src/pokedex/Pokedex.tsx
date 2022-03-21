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
import Container from '@material-ui/core/Container';
import { Box, Grid } from '@material-ui/core';
import { Grade } from '@material-ui/icons';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

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
            Pokedex
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box mt={2}>
          <Grid container spacing={2}>
            {pokemons.map((pokemon) => (
              <>
                <Grid item xs={6} lg={3}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h2">
                        {pokemon.name}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => setSelectedPokemon(pokemon)} size="small">Abrir</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </>
          ))}
          </Grid>

          Pokemons:

          {selectedPokemon && <h3>Pokemon selecionado: {selectedPokemon.name}</h3>}

          {JSON.stringify(selectedPokemonDetails, undefined, 2)}
        </Box>
      </Container>
    </div>
  );
}

export default Pokedex;