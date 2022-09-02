import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContact } from "../contexts/ContactUsContext";
import "./Styles/CUsComponent.css";

const CUsComponent = () => {
  const { feedback, error, setError, response, setResponse } = useContact();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  function sendEmail() {
    if (!name.trim() || !email.trim() || !number.trim() || !message.trim()) {
      alert("Зполните все поля!");
      return;
    }
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("number", number);
    formData.append("subject", subject);
    formData.append("message", message);
    feedback(formData);
  }
  React.useEffect(() => {
    setError(false);
  }, []);

  React.useEffect(() => {
    setResponse("");
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <section className="contact" id="contact">
        <div className="containerC">
          <div className="heading text-center">
            <h2>
              Связяться с<span> Нами </span>
            </h2>
            {error ? <Alert severity="error">{error}</Alert> : null}
            {response ? <Alert>{response}</Alert> : null}
            <p>Все поля с "⁕" обьязательны к заполнению</p>
          </div>
          <div className="row">
            <div className="formC">
              <div className="col-sm-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Имя⁕"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Электронная почта⁕"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Тема"
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                />
              </div>
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ваш номер"
                  name="number"
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  id="comment"
                  placeholder="Сообщение⁕"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                ></textarea>
              </div>
              <button className="btn btn-block" onClick={sendEmail}>
                Отправить!
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CUsComponent;
