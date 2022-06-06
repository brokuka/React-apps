import React from "react";
import "./Icon.scss";

const Icon = ({ name, color, size, stroke, className, href }) => {
  return (
    <>
      <svg
        className={`${name}-icon ${!className ? "" : className}`}
        fill={color}
        stroke={color}
        width={size}
        height={size}
      >
        <use xlinkHref={`#icon-${href}`} />
      </svg>
    </>
  );
};

export default Icon;
