import React from "react";
import { Outlet } from "react-router-dom";
import GoToTop from "./components/GoToTop/GoToTop";

function Layout() {
  return (
    <>
      <Outlet />
      <GoToTop />
    </>
  );
}

export default Layout;
