import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import Pokedex from './pokedex/Pokedex';

interface RoutesProps {
  
}
 
export const Routes: React.FC<RoutesProps> = () => {
  return (  
    <>
      <Switch>
        <Route path="/pokemon">
          <h1>Pokemon</h1>
        </Route>
        <Route path="/">
          <Pokedex/>
        </Route>
      </Switch>
    </>
  );
}
 
export default Routes;