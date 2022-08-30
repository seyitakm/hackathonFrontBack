import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Styles/Activation.css";
const ActivationPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bodyActivation">
      <div className="container">
        <div className="cookiesContent" id="cookiesPopup">
          <h3>Активация аккаунта</h3>
          <img
            className="imgActive"
            src="https://cdn-icons-png.flaticon.com/512/4812/4812397.png"
            alt="cookies-img"
          />
          <p className="p">
            Пожалуйста проверьте вашу почту, и активируйте свой аккаунт по
            ссылке!
          </p>
          <div className="flexActivation">
            <button
              onClick={() => navigate("/login")}
              className="accept signin"
            >
              Войти
            </button>
            <button onClick={() => navigate("/register")} className="accept">
              Назад
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivationPage;
