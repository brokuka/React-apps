import React from "react";
import Main from "../../components/Main/Main";
import ShopHeader from "./ShopHeader";
import ShopContent from "./ShopContent/ShopContent";

const Shop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main block header>
      <ShopHeader />
      <ShopContent />
    </Main>
  );
};

export default Shop;
