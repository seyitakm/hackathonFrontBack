import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Styles/Activation.css";
const ActivationPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bodyActivation">
      <div className="container">
        <div className="cookiesContent" id="cookiesPopup">
          <h3>Activate your account</h3>
          <img
            className="imgActive"
            src="https://cdn-icons-png.flaticon.com/512/4812/4812397.png"
            alt="cookies-img"
          />
          <p className="p">
            Please check your email, and open the link to activate your account!
            Once you have done, click sign in to move forward
          </p>
          <div className="flexActivation">
            <button
              onClick={() => navigate("/login")}
              className="accept signin"
            >
              Sign in
            </button>
            <button onClick={() => navigate("/register")} className="accept">
              back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivationPage;
