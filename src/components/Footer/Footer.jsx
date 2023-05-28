import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <>
      <div className="d-flex justify-content-around bg-dark text-light mt-2">
        <div className="first p-2">
          <div className="col">
            <div className="row">Home</div>
            <div className="row">Application</div>
            <div className="row">Documentation</div>
            <div className="row">APIs</div>
          </div>
        </div>
        <div className="second p-2">
          <div className="col">
            <div className="row font-weight-bold">Company</div>
            <div className="row">About us</div>
            <div className="row">Blog</div>
            <div className="row">Careers</div>
            <div className="row">Press</div>
          </div>
        </div>
        <div className="third p-2">
          <div className="col">
            <div className="row font-weight-bold">Social</div>
            <div className="row">Facebook</div>
            <div className="row">Twitter</div>
            <div className="row">Instagram</div>
            <div className="row">LinkedIn</div>
          </div>
        </div>
      </div>
    </>
  );
}

 