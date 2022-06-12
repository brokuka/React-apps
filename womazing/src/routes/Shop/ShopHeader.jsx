import React from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const ShopHeader = () => {
  return (
    <Breadcrumbs>
      <Breadcrumb title="Магазин" href="/shop" />
    </Breadcrumbs>
  );
};

export default ShopHeader;
