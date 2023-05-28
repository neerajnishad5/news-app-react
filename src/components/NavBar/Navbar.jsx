import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import Drop from "../DropDown/DropDown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Navbar2() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar id="navbar" bg="dark" variant="dark">
        <Container className="d-flex justify-content-between">
          <div className="section1 ">
            {/* <Navbar.Brand href="/">24xNews</Navbar.Brand> */}
            <Nav>
              <Navbar.Brand href="/">24xNews</Navbar.Brand>
              <Nav.Link onClick={() => navigate("/india")}>India</Nav.Link>
              <Nav.Link onClick={() => navigate("/world")}>World</Nav.Link>
              {/* <Nav.Link onClick={() => navigate("/opinion")}>Opinion</Nav.Link> */}
              <Nav.Link onClick={() => navigate("/ipl")}>IPL 2023</Nav.Link>
              <Nav.Link onClick={() => navigate("/tech")}>Technology</Nav.Link>
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
