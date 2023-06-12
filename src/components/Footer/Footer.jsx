import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="d-flex justify-content-around footer-bg text-light  mt-2">
        <div className="fourth p-2">
          <div className="col">
            <div className="row-sm-12 row-md-4 row-lg-3">
              <a href="/">
                <img
                  src="../../public/icons/test.png"
                  alt="24xnews" 
                  className="img-24"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="first p-2">
          <div className="col text-center">
            <div className="row h2 d-block p-1">Home</div>
            <div className="row-sm-12 row-md-4 row-lg-3 ">
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
            <div className="row h2 d-block p-1">Company</div>
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
            <div className="row h2 d-block p-1">Social</div>
            <div className="row-sm-12 row-md-4 row-lg-3">
              <a href="/">
                <FaFacebook size={"23px"} />
              </a>
              <div className="row-sm-12 row-md-4 row-lg-3">
                <a href="/">
                  <FaTwitter size={"23px"} />
                </a>
              </div>
              <div className="row-sm-12 row-md-4 row-lg-3">
                <a href="/">
                  <FaInstagram size={"23px"} />
                </a>
              </div>
              <div className="row-sm-12 row-md-4 row-lg-3">
                <a href="/">
                  <FaLinkedin size={"23px"} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center">
        <footer>Copyright © 2023 24xNews Ltd All Rights Reserved</footer>
      </div>
    </>
  );
}
