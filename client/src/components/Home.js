import React, { Component } from "react";
import * as API from "../services/API";
import "../styles/home.scss";
import Palettes from "./Palettes";
import Colors from "./Colors";

class Home extends Component {
  componentDidMount() {
    // API.getTest().then(result => {
    //   console.log("HOME GET TEST", result);
    // });
  }

  render() {
    return (
      <React.Fragment>
        <section className="home-intro">
          <div className="inner">
            <h1>Col&bull;or</h1>
            <p className="definition">
              <span>noun.</span> the property possessed by an object of
              producing different sensations on the eye as a result of the way
              the object reflects or emits light.
            </p>
          </div>
        </section>
        <section className="home-palettes">
          <div className="inner">
            <h2>New Palettes</h2>
            <Palettes type="new" />
          </div>
        </section>
        <section className="home-colors">
          <div className="inner">
            <h2>New Colors</h2>
            <Colors />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
