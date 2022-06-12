import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/App-layout/App-layout";
import { AppRoute } from "./utils/constants";
import { ReactComponent as Sprites } from "./components/Icon/sprites.svg";
import Home from "./routes/Home/Home";
import Shop from "./routes/Shop/Shop";
import Product from "./routes/Product/Product";

const App = () => {
  return (
    <>
      <Sprites />
      <Routes>
        <Route path={AppRoute.HOME} element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path={AppRoute.SHOP} element={<Shop />} />
          <Route path={AppRoute.PRODUCT} element={<Product />} />
          <Route path={AppRoute.ABOUT} element={<Shop />} />
          <Route path={AppRoute.CONTACTS} element={<Shop />} />
          <Route path={AppRoute.CART} element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
