import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FavoritesList from "./components/FavoritesList";
import Detail from "./pages/Detail";
import SectionPage from "./pages/SectionPage";
import { initSwapiStore } from "./utils/initSwapiStore";

const App = () => {
  useEffect(() => {
    initSwapiStore();
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={FavoritesList} />
        <Route path="/characters" render={() => <SectionPage type="characters" />} />
        <Route path="/vehicles" render={() => <SectionPage type="vehicles" />} />
        <Route path="/planets" render={() => <SectionPage type="planets" />} />
        <Route path="/:type/:uid" component={Detail} />
      </Switch>
    </Router>
  );
};

export default App;