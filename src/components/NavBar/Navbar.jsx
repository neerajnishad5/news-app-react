import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Drop from "../DropDown/DropDown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { useState, useEffect } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";

export default function Navbar2() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <Navbar id="navbar">
        <Container className="d-flex flex-row justify-content-between">
          <div className="section3">
            <Navbar.Brand id="brand" href="/">
              <img
                className="imgg-24"
                alt=""
                src="../../public/icons/test.png"
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
                to="business"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Business
              </NavLink>

              <NavLink
                to="politics"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Politics
              </NavLink>
            </Nav>
          </div>
          <div className="section2 d-flex flex-col">
            <div className="col1">
              <Drop />
            </div>

            <div className="col2" onClick={toggleTheme}>
              <ToggleButton />
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
