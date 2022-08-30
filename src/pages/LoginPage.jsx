import * as React from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import facebook from "../components/icons/icons8-facebook-64.png";
import whatsapp from "../components/icons/icons8-whatsapp-64.png";
import telegram from "../components/icons/icons8-telegram-app-64.png";

export default function LoginPage() {
  const { login, error, setError, checkUser } = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSave() {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    login(formData, email);
  }
  React.useEffect(() => {
    setError("");
  }, []);

  const navigate = useNavigate();
  return (
    <div className="bodyRegister">
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            {error ? <Alert severity="error">{error}</Alert> : null}
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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="login__field">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuYfYI8JKYaLPcSUg77gZPArak9tHUp78uQ&usqp=CAU"
                  className="login__icon fas fa-lock"
                ></img>
                <input
                  type="password"
                  className="login__input"
                  placeholder="пароль"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="login__icon fas fa-lock"></i>
              </div>
              <button className="button login__submit" onClick={handleSave}>
                <span className="button__text">Войти</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="btnForgot">
              <a className="registerCss" onClick={() => navigate("/register")}>
                Зарегистрироваться
              </a>
              <a
                className="registerCss"
                onClick={() => navigate("/changepass")}
              >
                Забыли пароль?
              </a>
            </div>
            <div className="social-loginLog">
              <h3>Войти через</h3>
              <div className="social-icons">
                <a href="#">
                  <img
                    src={facebook}
                    className="social-login__icon fab fa-facebook"
                  ></img>
                </a>
                <a href="#">
                  <img
                    src={whatsapp}
                    className="social-login__icon fab fa-twitter"
                  ></img>
                </a>
                <a href="#">
                  <img
                    src={telegram}
                    className="social-login__icon fab fa-instagram"
                  ></img>
                </a>
              </div>
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
}
