import React from "react";
import Navbar2 from "../NavBar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function RootLayout() {
  return (
    <div>
      <Navbar2 />
      <div className="mt-5 rounded" style={{ minHeight: "62vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
