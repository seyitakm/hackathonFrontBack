import * as React from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "../components/Styles/Register.css";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import facebook from "../components/icons/icons8-facebook-64.png";
import whatsapp from "../components/icons/icons8-whatsapp-64.png";
import telegram from "../components/icons/icons8-telegram-app-64.png";

export default function RegisterPage() {
  const { register, error, setError } = useAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");

  function handleSave() {
    if (!email.trim() || !password.trim() || !passwordConfirm.trim()) {
      alert("Зполните все поля!");
      return;
    }
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", passwordConfirm);
    register(formData);
  }
  console.log(email, password, passwordConfirm);
  React.useEffect(() => {
    setError(false);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="bodyRegister">
      {error ? <Alert severity="error">{error}</Alert> : null}
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
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="login__field">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuYfYI8JKYaLPcSUg77gZPArak9tHUp78uQ&usqp=CAU"
                  className="login__icon fas fa-lock"
                ></img>
                <input
                  type="password"
                  required
                  className="login__input"
                  placeholder="подтвердите пароль"
                  id="password-confirm"
                  name="password"
                  autoComplete="current-password"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  value={passwordConfirm}
                />
              </div>
              <button className="button login__submit" onClick={handleSave}>
                <span className="button__text">Зарегистрироваться</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="logInCss">
              <a onClick={() => navigate("/login")}>Уже есть аккаунт? Войти</a>
            </div>
            <div className="social-login">
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
