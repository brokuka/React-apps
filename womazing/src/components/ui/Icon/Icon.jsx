import React from "react";
import cn from "classnames";

/* Style */
import styles from "./Icon.module.scss";

const Icon = ({ name, color, size, stroke, className, href, rotate }) => {
  return (
    <>
      <svg
        // className={`${name}-icon ${!className ? "" : className}`}
        className={cn(styles[name], className, {
          [styles.rotate]: rotate,
        })}
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
