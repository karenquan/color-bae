import React, { Component } from "react";
import Palettes from "./Palettes";

class PalettesHome extends Component {
  render() {
    return (
      <section className="palettes palettes-home">
        <div className="palettes-group">
          <h2>Top Palettes</h2>
          <Palettes type="top" />
        </div>
        <div className="palettes-group">
          <h2>New Palettes</h2>
          <Palettes type="new" />
        </div>
      </section>
    );
  }
}

export default PalettesHome;
