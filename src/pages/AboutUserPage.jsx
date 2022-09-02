import { Alert } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../components/Styles/UserSettings.css";
import { useAuth } from "../contexts/AuthContextProvider";
import { useEffect } from "react";

const AboutUserPage = () => {
  const { change_password, error, setError, user } = useAuth();

  const [email, setEmail] = React.useState("");
  const [old_password, setOldPassword] = React.useState("");
  const [new_password, setNewPassword] = React.useState("");

  const navigate = useNavigate();

  function handleSave() {
    let formData = new FormData();
    formData.append("old_password", old_password);
    formData.append("new_password", new_password);
    change_password(formData);
  }

  React.useEffect(() => {
    setError("");
  }, []);

  return (
    <div>
      <div className="container12">
        <div className="sidebar">
          <div className="sidebar__header">
            <img
              alt=""
              className="sidebar__avatar"
              src="https://unsplash.it/30/?image=209"
            />
            <p>{user}</p>
          </div>
          <div className="sidebar__menu-item">
            <i className="fa fa-university"></i>
            Мой баланс
            <div className="sidebar__label">800</div>
          </div>
          <div className="sidebar__menu-item">
            <i className="fa fa-bar-chart"></i>
            Статистики
          </div>
          <div className="sidebar__menu-item sidebar__menu-item--active">
            <i className="fa fa-cog"></i>
            Настройки
          </div>
          <div className="sidebar__menu-item">
            <i className="fa fa-suitcase"></i>
            Transactions
          </div>
          <div className="sidebar__menu-item">
            <i className="fa fa-envelope-o"></i>
            Помощь
            <div className="sidebar__badge">3</div>
          </div>
        </div>
        <div className="mainSettings">
          <div className="main__header">
            <h2>Ваши настройки</h2>
          </div>
          <div className="main__content">
            <div className="main__avatar">
              <div className="main__avatar--overlay">Доктор кто?</div>
            </div>
            <div className="main__settings-form">
              <div action="#" method="post">
                {error ? <Alert severity="error">{error}</Alert> : null}
                <label className="main__input-label">username:</label>
                <input
                  className="main__input"
                  placeholder="username"
                  type="text"
                  disabled
                />

                <label className="main__input-label">Электронная почта:</label>
                <input
                  className="main__input"
                  placeholder={user}
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  disabled
                />
                <label className="main__input-label">Старый пароль:</label>
                <input
                  className="main__input"
                  placeholder="старый пароль"
                  type="password"
                  name="old_password"
                  onChange={(e) => setOldPassword(e.target.value)}
                  value={old_password}
                />
                <label className="main__input-label">Новый пароль:</label>
                <input
                  className="main__input"
                  placeholder="новый пароль"
                  name="new_password"
                  type="password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  value={new_password}
                />
              </div>
              <button className="btn main__save-button" onClick={handleSave}>
                Сохранить
              </button>

              <button
                className="btn main__cancel-button"
                onClick={() => navigate(-1)}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUserPage;
