import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/App-layout/App-layout";
import { ReactComponent as Sprites } from "./components/Icon/sprites.svg";
import { AppRoute } from "./utils/constants";
import { useDispatch } from "react-redux/es/exports";
import { fetchProducts } from "./store/slices/productsSlice";
import { fetchAbout } from "./store/slices/aboutSlice";
import Home from "./routes/Home/Home";
import Shop from "./routes/Shop/Shop";
import Product from "./routes/Product/Product";
import About from "./routes/About/About";
import Contacts from "./routes/Contacts/Contacts";
import Cart from "./routes/Cart/Cart";

const App = React.memo(() => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchAbout());
  }, [dispatch]);

  return (
    <>
      <Sprites />
      <Routes>
        <Route path={AppRoute.HOME} element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path={AppRoute.SHOP} element={<Shop />} />
          <Route path={AppRoute.PRODUCT} element={<Product />} />
          <Route path={AppRoute.ABOUT} element={<About />} />
          <Route path={AppRoute.CONTACTS} element={<Contacts />} />
          <Route path={AppRoute.CART} element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
});

export default App;
