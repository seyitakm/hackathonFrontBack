import React from "react";
import "./Styles/CardHome.css";

const CardHome = () => {
  return (
    <div className="card-main-container">
      <div className="card_box">
        <div className="section-1">
          <div className="card-content">
            <h2>9</h2>
            <span>лет заботы о здоровье</span>
            <p>
              С 2009 года мы задаем высокие стандарты оказания медицинских услуг
            </p>
          </div>
          <div className="card-content">
            <h2>35+</h2>
            <span>специалистов</span>
            <p>Готовы оказать медицинскую помощь в клинике</p>
          </div>
          <div className="card-content">
            <h2>19</h2>
            <span>направлений</span>
            <p>
              Позволяют нам гарантировать высокий уровень оказания медицинской
              помощи
            </p>
          </div>
        </div>
        <div className="section-2">
          <div className="card-content">
            <h2>150 видов</h2>
            <span>Диагностика экпертного уровня</span>
            <p>Такие как ИФА,ПЦР,общеклинические и многое другое</p>
          </div>
          <div className="card-content">
            <h2>Доступные цены</h2>
            <span>на весь спектр услуг</span>
            <p>
              Наши специалисты это наблюдение за вашим состаянием 365дней в году
            </p>
          </div>
          <div className="card-content">
            <h2>Комплексные решения</h2>
            <span>для детей и взрослых</span>
            <p>Современные медицинские технологии и припараты</p>
          </div>
        </div>
      </div>
      <div className="discount-card">
        <div className="discount-card-content"></div>
        <div className="discount-card-content"></div>
        <div className="discount-card-content"></div>
        <div className="discount-card-content"></div>
      </div>
    </div>
  );
};

export default CardHome;
