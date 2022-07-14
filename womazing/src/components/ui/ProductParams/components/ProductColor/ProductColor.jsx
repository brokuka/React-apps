import React from "react";
import Button from "../../../Button/Button";

/* Style */
import styles from "./ProductColor.module.scss";

const ProductColor = ({ type, color, button, className, children }) => {
  return (
    <>
      {button ? (
        <Button color={color} type="colors">
          {children}
        </Button>
      ) : (
        <span
          className={styles.root}
          style={{
            backgroundColor: color,
          }}
        ></span>
      )}
    </>
  );
};

export default ProductColor;
