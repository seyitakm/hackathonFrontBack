import React from "react";
import "./Styles/CUsComponent.css";

const CUsComponent = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="containerC">
          <div className="heading text-center">
            <h2>
              Связяться с<span> Нами </span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
              <br />
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="formC">
              <div className="col-sm-6">
                <input type="text" className="form-control" placeholder="Имя" />
              </div>
              <div className="col-sm-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Электронная почта"
                />
              </div>
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Тема"
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  id="comment"
                  placeholder="Сообщение"
                ></textarea>
              </div>
              <button className="btn btn-block" type="submit">
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
