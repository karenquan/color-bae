import React from "react";

const ColorBlock = props => {
  let hex = props.hex;

  return (
    <div className="color-block cf">
      <span style={{ backgroundColor: "#" + hex }} className="color-1" />
      <span style={{ backgroundColor: "#" + hex }} className="color-2" />
      <span style={{ backgroundColor: "#" + hex }} className="color-3" />
      <span style={{ backgroundColor: "#" + hex }} className="color-4" />
    </div>
  );
};

export default ColorBlock;
