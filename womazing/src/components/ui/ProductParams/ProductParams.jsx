import React from "react";
import ProductColor from "./components/ProductColor/ProductColor";
import ProductSize from "./components/ProductSize/ProductSize";

/* Style */
import styles from "./ProductParams.module.scss";

const ProductParams = ({ type, button, color, size, className, children }) => {
  const View = () => {
    switch (type) {
      case "all":
        return (
          <div className={styles.root}>
            <ProductSize button={button} size={size} />
            <ProductColor button={button} color={color} children={children} />
          </div>
        );

      case "color":
        return (
          <>
            <ProductColor button={button} color={color} children={children} />
          </>
        );

      case "size":
        return (
          <>
            <ProductSize button={button} size={size} />
          </>
        );

      default:
        console.error('Выберите тип компонента "ProductColor"');
    }
  };

  return <>{<View />}</>;
};

export default ProductParams;
