import * as React from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "../components/Styles/Register.css";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
                <i className="login__icon fas fa-user"></i>
                <input
                  type="text"
                  className="login__input"
                  placeholder="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="password"
                  className="login__input"
                  placeholder="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <i className="login__icon fas fa-lock"></i>

                <input
                  type="password"
                  required
                  className="login__input"
                  placeholder="confirm password"
                  id="password-confirm"
                  name="password"
                  autoComplete="current-password"
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  value={passwordConfirm}
                />
              </div>
              <button className="button login__submit" onClick={handleSave}>
                <span className="button__text">Sign Up Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </div>
            <a onClick={() => navigate("/login")}>Already sign up? Sign in</a>
            <div className="social-login">
              <h3>log in via</h3>
              <div className="social-icons">
                <a href="#" className="social-login__icon fab fa-instagram"></a>
                <a href="#" className="social-login__icon fab fa-facebook"></a>
                <a href="#" className="social-login__icon fab fa-twitter"></a>
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
