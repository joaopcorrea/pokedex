import * as React from 'react';
import { useState, useEffect } from 'react';
import { PokemonDetail } from './interfaces/PokemonDetail';

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
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from './services/getPokemonDetails';

interface PokemonDetailsProps {

}

const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<PokemonDetail | undefined>(undefined);
  // const { sprites, types, species, height, weight, abilities } = pokemon as PokemonDetail;

  useEffect(() => {
    if (!name) return;

    getPokemonDetails(name)
     .then((response) => setPokemon(response));
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            {name}
          </Typography>
        </Toolbar>
      </AppBar>


      <Container maxWidth="lg">
        <Box mt={2}>
          <img width='100%' height='auto' src={pokemon?.sprites.front_default} />
        </Box>
        <Typography>
          {pokemon?.name}
        </Typography>
        {pokemon?.types.map((type) => <Typography>{type.type.name}</Typography>)}

        {pokemon?.species.name}
        {pokemon?.height}
        {pokemon?.weight}
        {pokemon?.abilities.map((ability) => <Typography>{ability.ability.name}</Typography>)}

      </Container>
    </div>
  );
}

export default PokemonDetails;