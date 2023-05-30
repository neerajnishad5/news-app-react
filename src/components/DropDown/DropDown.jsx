import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DropDown.css";
 
export default function Drop() {
  const navigate = useNavigate();
  return (
    <DropdownButton className="btn" id="dropdown-button">
      <Dropdown.Item onClick={() => navigate("login")}>Login</Dropdown.Item>
      <Dropdown.Item onClick={() => navigate("register")}>
        Register
      </Dropdown.Item>
    </DropdownButton>
  );
}
