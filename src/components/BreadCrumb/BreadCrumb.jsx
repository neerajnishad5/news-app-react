import { useLocation, Link } from "react-router-dom";
import "./BreadCrumb.css";

export default function BreadCrumb() {
  const location = useLocation();
  return (
    <div className="breadcrumbs" style={{ backgroundColor: "#bbd4ea" }}>
      <p>
        <a className="text-decoration-none" href="/">
          Home{" "}
        </a>
        <span>
          {">"}
          {location.pathname.replace(/%20/g, " ").slice(1).toUpperCase()}
        </span>{" "}
      </p>
    </div>
  );
}
