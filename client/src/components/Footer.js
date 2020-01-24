import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="inner">
        <p>
          colors and palettes provided by{" "}
          <a
            href="http://colourlovers.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            colourlovers.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
