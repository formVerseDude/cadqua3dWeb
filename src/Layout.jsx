import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function Layout() {
  return (
    <>
      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
