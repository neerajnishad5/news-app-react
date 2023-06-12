import { useLocation } from "react-router-dom";
import "./BreadCrumb.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
 } from "@chakra-ui/react";

export default function BreadCrumb() {
  const { pathname } = useLocation();
  console.log(pathname);
  const cleanLink = pathname.replace(/[^0-9a-z]/gi, "/ ");
  return (
    <div className="breadcrumbs">
      <Breadcrumb fontWeight="medium" fontSize="sm" backgroundColor={"#bbd4ea"}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href={cleanLink}>
            {cleanLink.toUpperCase()}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
