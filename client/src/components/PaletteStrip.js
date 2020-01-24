import React from "react";
import { Link } from "react-router-dom";
import "../styles/paletteStrip.scss";

const PaletteStrip = ({ id, colors }) => {
  const colorCount = colors.length;
  let colorBlocks = [];
  let colorHex = [];

  const getColorBlocks = colors => {
    colorBlocks = colors.map((color, i) => {
      return (
        <span
          className={"color-block col-" + colorCount}
          key={i}
          style={{ backgroundColor: "#" + color }}
        />
      );
    });
  };

  const getColorHex = colors => {
    colorHex = colors.map((color, i) => {
      return (
        <span key={i} className={"col-" + colorCount}>
          {"#" + color}
        </span>
      );
    });
  };

  getColorBlocks(colors);
  getColorHex(colors);

  return (
    <div className="palette-strip">
      <div className="color-blocks cf">
        {colorBlocks}
        <Link to={"/palettes/" + id} className="cf" />
      </div>
      <p className="cf">{colorHex}</p>
    </div>
  );
};

export default PaletteStrip;
