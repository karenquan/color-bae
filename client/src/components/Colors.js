import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as colorsService from "../services/colorsService";

class Colors extends Component {
  state = {
    colors: [],
    hasColors: false
  };

  buildColors = colors => {
    let _colors = colors.map(color => {
      return (
        <div className="color-link-wrap" key={color.id}>
          <Link
            to={"/colors/" + color.hex}
            className="color-link"
            style={{ backgroundColor: "#" + color.hex }}
          />
          <span className="color-link-hex">{"#" + color.hex}</span>
        </div>
      );
    });

    this.setState({ colors: _colors });
  };

  getNewColors = () => {
    colorsService
      .getNewColors()
      .then(data => {
        if (data.length) {
          this.buildColors(data);
          this.setState({ ...this.state, hasColors: true });
        }
      })
      .catch(e => {
        console.log("error getting colors");
      });
  };

  getTopColors = () => {
    colorsService
      .getTopColors()
      .then(data => {
        if (data.length) {
          this.buildColors(data);
          this.setState({ ...this.state, hasColors: true });
        }
      })
      .catch(e => {
        console.log("error getting colors");
      });
  };

  componentDidMount() {
    switch (this.props.type) {
      case "new":
        this.getNewColors();
        break;
      case "top":
        this.getTopColors();
        break;
      default:
        this.getTopColors();
        break;
    }
  }

  render() {
    return (
      <div className="colors-wrap">
        {this.state.hasColors && this.state.colors}
        {!this.state.hasColors && (
          <div className="no-colors">No colors found.</div>
        )}
      </div>
    );
    // <div className="colors-wrap">{this.state.colors}</div>;
  }
}

export default Colors;
