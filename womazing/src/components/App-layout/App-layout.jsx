import React from "react";
import { Outlet } from "react-router-dom";
import AppFooter from "../App-footer/App-footer";
import AppHeader from "../App-header/App-header";

const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
};

export default AppLayout;
