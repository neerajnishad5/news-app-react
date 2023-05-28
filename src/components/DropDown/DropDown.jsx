import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DropDown.css";

function Drop() {
  const navigate = useNavigate();
  return (
    <DropdownButton  id="dropdown-basic-button" class="drop-btn">
      <Dropdown.Item onClick={() => navigate("login")}>Login</Dropdown.Item>
      <Dropdown.Item onClick={() => navigate("register")}>
        Register
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default Drop;
