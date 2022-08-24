import * as React from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

export default function LoginPage() {
  const { login, error, setError } = useAuth();
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i className="login__icon fas fa-lock"></i>
              </div>
              <button className="button login__submit" onClick={handleSave}>
                <span className="button__text">Sign in</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </div>
            <a onClick={() => navigate("/register")}>
              Already have an account? Sign up
            </a>
            <a onClick={() => navigate("/changepass")}>Forgot password?</a>
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
