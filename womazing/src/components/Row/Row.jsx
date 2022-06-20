import React from "react";
import cn from "classnames";

/* Style */
import styles from "./Row.module.scss";

const Row = ({ children, className, column, wrap, justifyContent }) => {
  return (
    <div
      className={cn(className, styles.root, {
        [styles.column]: column,
        [styles.wrap]: wrap,
        [styles.jcc]: justifyContent === "center",
        [styles.jcsb]: justifyContent === "sb",
      })}
    >
      {children}
    </div>
  );
};

export default Row;
