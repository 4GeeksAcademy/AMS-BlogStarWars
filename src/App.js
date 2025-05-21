import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FavoritesList from "./components/FavoritesList";
import Detail from "./pages/Detail";

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/favorites" component={FavoritesList} />
      <Route path="/:type/:uid" component={Detail} />
    </Switch>
  </Router>
);

export default App;