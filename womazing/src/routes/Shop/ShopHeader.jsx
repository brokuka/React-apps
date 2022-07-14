import React from "react";
import Breadcrumbs from "../../components/ui/Breadcrumbs/Breadcrumbs";
import Breadcrumb from "../../components/ui/Breadcrumbs/components/Breadcrumb";

const ShopHeader = () => {
  return (
    <Breadcrumbs title="Магазин">
      <Breadcrumb title="Магазин" href="/shop" />
    </Breadcrumbs>
  );
};

export default ShopHeader;
