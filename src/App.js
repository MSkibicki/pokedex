import React from "react";
import "./components/css/Global.scss";
import PokemonList from "./components/js/PokemonList";
import SinglePokemonDetails from "./components/js/SinglePokemonDetails";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/singlePokemonDetails/:pokemonId" component={SinglePokemonDetails} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
