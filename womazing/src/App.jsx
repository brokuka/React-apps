import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/App-layout/App-layout";
import { AppRoute } from "./utils/constants";
import { ReactComponent as Sprites } from "./components/Icon/sprites.svg";
import Home from "./routes/Home/Home";

const App = () => {
  return (
    <>
      <Sprites />
      <Routes>
        <Route path={AppRoute.HOME} element={<AppLayout />}>
          <Route index path={AppRoute.HOME} element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
