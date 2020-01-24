import React, { Component } from "react";
import "../styles/color.scss";
import "../styles/colorBlock.scss";
import Palettes from "./Palettes";
import ColorBlock from "./ColorBlock";
import * as colorService from "../services/colorService";

class Color extends Component {
  state = {
    hex: "",
    rgb: []
  };

  getId = () => {
    let path = this.props.location.pathname.split("/");
    return path[path.length - 1];
  };

  getColorById = id => {
    colorService
      .getColorById(id)
      .then(color => {
        let c = color[0];
        // console.log(c);
        this.setState({
          hex: c.hex,
          rgb: c.rgb
        });
      })
      .catch(e => {
        console.log("error getting palette", e);
      });
  };

  componentDidMount() {
    let id = this.getId();
    this.getColorById(id);
  }

  render() {
    let rgb = this.state.rgb;

    return (
      <React.Fragment>
        <section className="color-wrap">
          <div className="inner cf">
            <div className="color-block-wrap">
              <ColorBlock hex={this.state.hex} />
            </div>
            <div className="color-info">
              <h1>#{this.state.hex}</h1>
              <p>red: {rgb.red}</p>
              <p>green: {rgb.green}</p>
              <p>blue: {rgb.blue}</p>
            </div>
          </div>
        </section>
        {this.state.hex !== "" && (
          <section className="palettes-wrap">
            <div className="inner">
              <h2>{"Other Palettes with #" + this.state.hex}</h2>
              <Palettes type="hex" hex={this.state.hex} />
            </div>
          </section>
        )}
      </React.Fragment>
    );
  }
}

export default Color;
