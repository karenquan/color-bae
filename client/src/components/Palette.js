import React, { Component } from "react";
import "../styles/palette.scss";
import { Link } from "react-router-dom";
import * as paletteService from "../services/paletteService";

class Palette extends Component {
  state = {
    colors: [],
    title: ""
  };

  getId = () => {
    let path = this.props.location.pathname.split("/");
    return path[path.length - 1];
  };

  getPaletteById = id => {
    paletteService
      .getPaletteById(id)
      .then(palette => {
        let p = palette[0];
        console.log(p);
        this.setState({
          colors: p.colors,
          title: p.title
        });
      })
      .catch(e => {
        console.log("error getting palette", e);
      });
  };

  buildColorBlocks = () => {
    let colors = this.state.colors;
    let count = colors.length;

    return colors.map((color, i) => {
      return (
        <Link
          to={"/colors/" + color}
          key={i}
          className={"color-link col-" + count}
        >
          <span className="color" style={{ backgroundColor: "#" + color }} />
          <span
            className="color-light"
            style={{ backgroundColor: "#" + color }}
          />
          <span
            className="color-lightest"
            style={{ backgroundColor: "#" + color }}
          />
          <span className="hex">{"#" + color}</span>
        </Link>
      );
    });
  };

  componentDidMount() {
    let id = this.getId();
    this.getPaletteById(id);
  }

  render() {
    let colorBlocks = this.buildColorBlocks();

    return (
      <div className="palette-wrap">
        <div className="inner">
          <h1>{this.state.title}</h1>
          <div className="palette">{colorBlocks}</div>
        </div>
      </div>
    );
  }
}

export default Palette;
