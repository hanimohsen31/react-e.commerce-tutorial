import React, { useState } from "react";

export const Button = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div
      className="Button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={props.onClick}
    >
      <button
        style={{
          border: "none",
          padding: props.padding,
          fontSize: props.fontSize,
          fontWeight: "500",
          marginTop: props.marginTop,
          color: isHovering ? "gray" : "",
        }}
      >
        {props.text}
      </button>
    </div>
  );
};
