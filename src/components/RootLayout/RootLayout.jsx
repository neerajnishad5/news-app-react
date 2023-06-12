import React from "react";
import Navbar2 from "../NavBar/Navbar";
import { Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import "./RootLayout.css";

export default function RootLayout() {
  let params = useLocation().pathname;
  console.log("Params", params); 
  return (
    <div className="root-layout">
      <Navbar2 />
      <BreadCrumb />
      <div className="heading p-2 mb-2">
        {params.length > 1 &&
          params.slice(1) !== "login" && params.length < 10 &&
          params.slice(1) !== "register" && (
            <h2>{params.slice(1).charAt(0).toUpperCase() + params.slice(2)}</h2>
          )}
      </div>
      <div className="outlet mt-3 rounded" style={{ minHeight: "62vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
