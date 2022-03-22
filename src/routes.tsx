import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Pokedex from './pokedex/Pokedex';
import PokemonDetails from './pokemon/PokemonDetails';

interface RoutesProps {
  
}
 
export const Routes: React.FC<RoutesProps> = () => {
  return (  
    <>
      <Switch>
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/" element={<Pokedex/>} />
      </Switch>
    </>
  );
}
 
export default Routes;