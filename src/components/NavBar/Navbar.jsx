import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Drop from "../DropDown/DropDown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { useState } from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

function Navbar2() {
  const [isActive, setIsActive] = useState("home");
  const navigate = useNavigate();
  return (
    <>
      <Navbar id="navbar">
        <Container className="d-flex justify-content-between">
          <div className="section3">
            <Navbar.Brand id="brand" href="/">
              <img
                className="imgg-24"
                alt=""
                src="../../public/icons/test.png"
                srcset=""
              />
            </Navbar.Brand>
          </div>
          <div className="section1 ">
            <Nav>
              <NavLink
                to="india"
                className={({ isActive }) =>
                  isActive ? "active " : "inactive"
                }
              >
                India
              </NavLink>

              <NavLink
                to="world"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                World
              </NavLink>

              <NavLink
                to="ipl"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                IPL2023
              </NavLink>

              <NavLink
                to="tech"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Tech
              </NavLink>

              <NavLink
                to="politics"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Politics
              </NavLink>
            </Nav>
          </div>
          <div className="section2">
            <Drop />
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar2;
