import React from "react";

function Tooltip({ text }) {
  return (
    <div className="tooltip-wrapper">
      <div className="tooltip">{text}</div>
    </div>
  );
}

export default Tooltip;
