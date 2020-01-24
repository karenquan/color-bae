import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PalettesHome from "./components/PalettesHome";
import Palette from "./components/Palette";
import Color from "./components/Color";
import ColorsHome from "./components/ColorsHome";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/palettes" component={PalettesHome} />
        <Route exact path="/palettes/:id" component={Palette} />
        <Route exact path="/colors" component={ColorsHome} />
        <Route exact path="/colors/:id" component={Color} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
