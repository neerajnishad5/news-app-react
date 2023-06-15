import React from "react";
import GoogleIcon from "../../icons/google_icon.svg";
import "./GoogleSignInIcon.css";
import GoogleLogin from "@leecheuk/react-google-login";

function GoogleSignInIcon({ action }) {
  return (
    <div>
      <div className="google-button text-center pb-2">
        <div id="gSignInWrapper">
          <span className="m-2 label">{action} with</span>
          <span className="google-icon ">
            <div id="customBtn" class="customGPlusSignIn">
              <span class="icon">
                <img width={"40px"} src={GoogleIcon} alt="" />
              </span>
              <span class="buttonText">Google</span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default GoogleSignInIcon;
