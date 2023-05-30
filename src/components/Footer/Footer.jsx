import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="d-flex justify-content-around footer-bg text-light mt-2">
        <div className="fourth p-2">
          <div className="col">
            <div className="row-sm-12 row-md-4 row-lg-3">
              <a href="/">
                <img
                  src="../../public/icons/test.png"
                  alt="24xnews"
                  srcset=""
                  className="img-24"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="first p-2">
          <div className="col">
            <div className="row display-5 mb-2">Home</div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <a href="/">Application</a>
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <a href="/">Documentation</a>
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <a href="/">APIs</a>
            </div>
          </div>
        </div>
        <div className="second p-2">
          <div className="col">
            <div className="row display-5 mb-2">Company</div>
            <div className="row-sm-12 row-md-4 row-lg-3 ">
              <a href="/">About us</a>
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <a href="/">Blog</a>
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <a href="/">Careers</a>
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <a href="/">Press</a>
            </div>
          </div>
        </div>
        <div className="third p-2">
          <div className="col">
            <div className="row display-5 mb-2">Social</div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <a href="/">Facebook</a>
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <a href="/">Twitter</a>
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <a href="/">Instagram</a>{" "}
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <a href="/">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
