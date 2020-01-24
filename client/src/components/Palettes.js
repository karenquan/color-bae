import React, { Component } from "react";
import "../styles/palettes.scss";
import PaletteStrip from "./PaletteStrip";
import * as API from "../services/API";
import * as palettesService from "../services/palettesService";

class Palettes extends Component {
  state = {
    palettes: [],
    hasPalettes: false
  };

  buildPalettes = palettes => {
    let _palettes = palettes.map((palette, i) => {
      return (
        <PaletteStrip
          key={palette.id}
          id={palette.id}
          colors={palette.colors}
        />
      );
    });
    this.setState({ ...this.state, palettes: _palettes });
  };

  getTopPalettes = () => {
    palettesService
      .getTopPalettes()
      .then(data => {
        if (data.length) {
          this.buildPalettes(data);
          this.setState({ ...this.state, hasPalettes: true });
        }
      })
      .catch(e => {
        console.log("error getting palettes");
      });
  };

  getNewPalettes = () => {
    palettesService
      .getNewPalettes()
      .then(data => {
        if (data.length) {
          this.buildPalettes(data);
          this.setState({ ...this.state, hasPalettes: true });
        }
      })
      .catch(e => {
        console.log("error getting palettes");
      });
  };

  getPalettesByHex = hex => {
    palettesService
      .getPalettesByHex(hex)
      .then(data => {
        if (data.length) {
          this.buildPalettes(data);
          this.setState({ ...this.state, hasPalettes: true });
        }
      })
      .catch(e => {
        console.log("error getting palettes");
      });
  };

  componentDidMount() {
    switch (this.props.type) {
      case "new":
        this.getNewPalettes();
        break;
      case "hex":
        this.getPalettesByHex(this.props.hex);
        break;
      default:
        this.getTopPalettes();
        break;
    }
  }

  render() {
    return (
      <div className="palettes cf">
        {this.state.hasPalettes && <div>{this.state.palettes}</div>}
        {!this.state.hasPalettes && (
          <div className="no-palettes">No palettes found.</div>
        )}
      </div>
    );
  }
}

export default Palettes;
