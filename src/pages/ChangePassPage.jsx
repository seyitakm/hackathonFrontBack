// import { Alert } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ChangePassPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bodyRegister">
      {/* {error ? <Alert severity="error">{error}</Alert> : null} */}
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <div className="login">
              <div className="login__field">
                <img
                  src="http://cdn.onlinewebfonts.com/svg/img_568656.png"
                  className="login__icon fas fa-user"
                ></img>
                <input
                  type="text"
                  className="login__input"
                  placeholder="электронная почта"
                  id="email"
                  name="email"
                  autoComplete="email"
                  //   onChange={(e) => setEmail(e.target.value)}
                  //   value={email}
                />
              </div>

              <button className="button login__submit">
                <span className="button__text">Отправить код</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="btnChangeP">
              <a onClick={() => navigate("/login")}>назад</a>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassPage;
