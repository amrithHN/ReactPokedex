import React, { Component } from "react";
import Pokedex from "./Pokedex";
import pokemondb from "./pokemondb";
import Pokegame from "./Pokegame";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route exact path="/game" component={Pokegame} />
          <Route path="/" render={() => <Pokedex pokemons={pokemondb}> </Pokedex>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
