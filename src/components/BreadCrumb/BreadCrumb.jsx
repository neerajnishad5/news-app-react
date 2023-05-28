import { useLocation, Link } from "react-router-dom";
import "./BreadCrumb.css";

export default function BreadCrumb() {
  const location = useLocation();

  // help/contact --> help | contact

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += "/${crumb}";

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div className="breadcrumbs" style={{ backgroundColor: "#bbd4ea", border: "2px solid #9db2bf" }}>
      <p>Home {">"} </p>
      {crumbs}
    </div>
  );
}
