import { Alert } from "@mui/material";
import React from "react";
import "../components/Styles/UserSettings.css";
import { useAuth } from "../contexts/AuthContextProvider";

const AboutUserPage = () => {
  const { change_password, error, setError, user } = useAuth();
  const [email, setEmail] = React.useState("");
  const [old_password, setOldPassword] = React.useState("");
  const [new_password, setNewPassword] = React.useState("");

  function handleSave() {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("old_password", old_password);
    formData.append("new_password", new_password);
    change_password(formData);
  }

  //   React.useEffect(() => {
  //     if (localStorage.getItem("token")) {
  //       change_password();
  //     }
  //   }, []);

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
            Balance
            <div className="sidebar__label">800</div>
          </div>
          <div className="sidebar__menu-item">
            <i className="fa fa-bar-chart"></i>
            Statistics
          </div>
          <div className="sidebar__menu-item sidebar__menu-item--active">
            <i className="fa fa-cog"></i>
            Settings
          </div>
          <div className="sidebar__menu-item">
            <i className="fa fa-suitcase"></i>
            Transactions
          </div>
          <div className="sidebar__menu-item">
            <i className="fa fa-envelope-o"></i>
            Help
            <div className="sidebar__badge">3</div>
          </div>
          <div className="sidebar__menu-item">
            <i className="fa fa-user-plus"></i>
            Referals
          </div>
        </div>
        <div className="main">
          <div className="main__header">
            <h2>Your Settings</h2>
          </div>
          <div className="main__content">
            <div className="main__avatar">
              <div className="main__avatar--overlay">John Doe</div>
            </div>
            <div className="main__settings-form">
              <div action="#" method="post">
                {error ? <Alert severity="error">{error}</Alert> : null}
                <label className="main__input-label">Your name:</label>
                <input
                  className="main__input"
                  placeholder="name"
                  type="text"
                  disabled
                />
                <label className="main__input-label">Your e-mail:</label>
                <input
                  className="main__input"
                  placeholder="email"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <label className="main__input-label">Your old password:</label>
                <input
                  className="main__input"
                  placeholder="old password"
                  type="password"
                  name="old_password"
                  onChange={(e) => setOldPassword(e.target.value)}
                  value={old_password}
                />
                <label className="main__input-label">Your new password:</label>
                <input
                  className="main__input"
                  placeholder="new password"
                  name="new_password"
                  type="password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  value={new_password}
                />
              </div>
              <button className="btn main__save-button" onClick={handleSave}>
                Save changes
              </button>
              <button className="btn main__cancel-button">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUserPage;
