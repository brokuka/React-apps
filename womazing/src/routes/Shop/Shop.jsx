import React from "react";
import Main from "../../components/Main/Main";
import ShopHeader from "./ShopHeader";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchProducts } from "../../store/slices/productsSlice";
import ShopFilters from "./ShopFilters/ShopFilters";
import ShopCatalog from "./ShopCatalog/ShopCatalog";

const Shop = () => {
  const { items } = useSelector((state) => state.products);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main block header>
      <ShopHeader />
      {items ? (
        <>
          <ShopFilters />
          <ShopCatalog />
        </>
      ) : null}
    </Main>
  );
};

export default Shop;
