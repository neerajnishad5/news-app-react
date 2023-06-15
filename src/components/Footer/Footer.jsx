import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="footer-component tw-text-white tw-bg-[#27374d]">
        <div className="footer tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-justify-center">
          <div className="logo tw-text-center tw-flex tw-justify-center tw-p-5">
            <a className="tw-no-underline" href="/">
              <img
                src="../src/icons/test.png"
                alt="24xnews"
                className="img-24"
              />
            </a>
          </div>
          <div className="first">
            <div className="text-center">
              <div className=" h2 p-1">Home</div>
              <div className=" ">
                <a className="tw-no-underline " href="/">
                  Application
                </a>
              </div>
              <div className=" ">
                <a className="tw-no-underline" href="/">
                  Documentation
                </a>
              </div>
              <div className=" ">
                <a className="tw-no-underline" href="/">
                  APIs
                </a>
              </div>
            </div>
          </div>
          <div className="second">
            <div className="text-center">
              <div className=" h2 p-1">Company</div>
              <div className=" ">
                <a className="tw-no-underline" href="/">
                  About Us
                </a>
              </div>
              <div className=" ">
                <a className="tw-no-underline" href="/">
                  Blog
                </a>
              </div>
              <div className=" ">
                <a className="tw-no-underline" href="/">
                  Careers
                </a>
              </div>
            </div>
          </div>
          <div className="third">
            <div className="text-center">
              <div className=" h2  p-1">Social</div>

              <a className="tw-no-underline" href="/">
                <FaFacebook size={"23px"} />
              </a>

              <a className="tw-no-underline tw-block" href="/">
                <FaTwitter size={"23px"} />
              </a>

              <a className="tw-no-underline tw-block" href="/">
                <FaInstagram size={"23px"} />
              </a>

              <a className="tw-no-underline tw-block" href="/">
                <FaLinkedin size={"23px"} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer tw-text-center">
          <footer>Copyright © 2023 24xNews Ltd All Rights Reserved</footer>
        </div>
      </div>
    </>
  );
}
