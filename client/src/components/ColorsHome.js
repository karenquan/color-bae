import React, { Component } from "react";
import Colors from "./Colors";
import "../styles/colors.scss";
import "../styles/color.scss";

class ColorsHome extends Component {
  render() {
    return (
      <section className="colors colors-home">
        <div className="colors-group">
          <h2>Top Colors</h2>
          <Colors type="top" />
        </div>
        <div className="colors-group">
          <h2>New Colors</h2>
          <Colors type="new" />
        </div>
      </section>
    );
  }
}

export default ColorsHome;
