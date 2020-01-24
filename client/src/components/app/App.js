import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import PalettesHome from "../PalettesHome";
import Palette from "../Palette";
import Color from "../Color";
import ColorsHome from "../ColorsHome";
import Nav from "../Nav";
import Footer from "../Footer";

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
