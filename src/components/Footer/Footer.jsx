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
              <p>Application</p>
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <p>Documentation</p>
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <p>APIs</p>
            </div>
          </div>
        </div>
        <div className="second p-2">
          <div className="col">
            <div className="row display-5 mb-2">Company</div>
            <div className="row-sm-12 row-md-4 row-lg-3 ">
              <p>About us</p>
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <p>Blog</p>
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <p>Careers</p>
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <p>Press</p>
            </div>
          </div>
        </div>
        <div className="third p-2">
          <div className="col">
            <div className="row display-5 mb-2">Social</div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <p>Facebook</p>
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <p>Twitter</p>
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <p>Instagram</p>
            </div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <p>LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
