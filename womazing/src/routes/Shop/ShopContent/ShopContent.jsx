import React from "react";
import ShopCatalog from "./ShopCatalog/ShopCatalog";
import ShopFilters from "./ShopFilters/ShopFilters";

const ShopContent = () => {
  return (
    <>
      <ShopFilters />
      <ShopCatalog />
    </>
  );
};

export default ShopContent;
