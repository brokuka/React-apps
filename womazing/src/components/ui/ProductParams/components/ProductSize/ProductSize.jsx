import React from "react";
import Button from "../../../Button/Button";

const ProductSize = ({ button, size, children }) => {
  return (
    <>
      {button ? <Button type="size">{children}</Button> : <span>({size})</span>}
    </>
  );
};

export default ProductSize;
