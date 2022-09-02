import React from "react";
import "./Styles/CardHome.css";

const CardHome = () => {
  return (
    <div>
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="forWidth" style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="blockUp"
              style={{
                display: "flex",
                flexDirection: "row",
                width: "90%",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "30%",
                  border: "1px solid green",
                  padding: "10px",
                  height: "200px",
                }}
              >
                <h3 className="blockUp_h3">9</h3>
                <h6 className="blockUp_h6">лет заботы о здоровье</h6>
                <p className="blockUp_p">
                  С 2009 года мы задаем высокие стандарты оказания медицинских
                  услуг
                </p>
              </div>
              <div
                style={{
                  width: "30%",
                  border: "1px solid green",
                  padding: "10px",
                  height: "200px",
                }}
              >
                <h3 className="blockUp_h3">35+</h3>
                <h6 className="blockUp_h6">специалистов</h6>
                <p className="blockUp_p">
                  Готовы оказать медицинскую помощь в клинике
                </p>
              </div>
              <div
                style={{
                  width: "30%",
                  border: "1px solid green",
                  padding: "10px",
                  height: "200px",
                }}
              >
                <h3 className="blockUp_h3">19</h3>
                <h6 className="blockUp_h6">направлений</h6>
                <p className="blockUp_p">
                  Позволяют нам гарантировать высокий уровень оказания
                  медицинской помощи
                </p>
              </div>
            </div>
            <div
              className="blockDown"
              style={{
                display: "flex",
                flexDirection: "row",
                width: "90%",
                justifyContent: "space-between",
                marginBottom: "5%",
              }}
            >
              <div
                style={{
                  width: "30%",
                  border: "1px solid green",
                  padding: "10px",
                  height: "200px",
                }}
              >
                <h6 className="blockDown_h6">
                  Диагностика, экспертного класса
                </h6>
                <p className="blockDown_p">
                  Более 150 видов исследований, такие как ИФА, ПЦР,
                  общеклинические, гематологические, биохимические,
                  микробиологические и многие другие.
                </p>
              </div>
              <div
                style={{
                  width: "30%",
                  border: "1px solid green",
                  padding: "10px",
                  height: "200px",
                }}
              >
                <h6 className="blockDown_h6">
                  Доступные цены на весь спектр услуг
                </h6>
                <p className="blockDown_p">
                  Наши специалисты это наблюдение за вашим состоянием 365 дней в
                  году
                </p>
              </div>
              <div
                style={{
                  width: "30%",
                  border: "1px solid green",
                  padding: "10px",
                  height: "200px",
                }}
              >
                <h6 className="blockDown_h6">
                  Комплексные решения для детей и взрослых
                </h6>
                <p className="blockDown_p">
                  Наши специалисты это наблюдение за вашим состоянием 365 дней в
                  году
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="discount-card">
        <div className="discount-card-box">
          <div className="discount-card-content">
            <div className="discount-text">
              <div className="discount">Акции</div>
            </div>
            <p>Предновогодняя акция на посещение соляной пещеры</p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button>Подробно</button>
            </div>
          </div>
          <div className="discount-card-content">
            <div className="discount-text">
              <div className="discount">Акции</div>
            </div>
            <p>Предновогодняя акция на посещение пластическую хирургию</p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button>Подробно</button>
            </div>
          </div>
          <div className="discount-card-content">
            <div className="discount-text">
              <div className="discount">Акции</div>
            </div>
            <p>Акция на бесплатную консультацию пластического хируга</p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button>Подробно</button>
            </div>
          </div>
          <div className="discount-card-content">
            <div className="discount-text">
              <div className="discount">Акции</div>
            </div>
            <p>Предновогодняя акция на посещение соляной пещеры</p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button>Подробно</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
