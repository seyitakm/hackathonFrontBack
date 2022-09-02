import React from "react";
import "./Styles/CardHome.css";

const CardHome = () => {
  return (
    <div>
      <div
        className="main"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="forWidth" style={{ display: "flex", width: "100%" }}>
          <div>
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
    </div>
    // <div className="card-main-container">
    //   <div className="card_box">
    //     <div className="section-1">
    //       <div className="card-content">
    //         <h2>9</h2>
    //         <span>лет заботы о здоровье</span>
    //         <p>
    //           С 2009 года мы задаем высокие стандарты оказания медицинских услуг
    //         </p>
    //       </div>
    //       <div className="card-content">
    //         <h2>35+</h2>
    //         <span>специалистов</span>
    //         <p>Готовы оказать медицинскую помощь в клинике</p>
    //       </div>
    //       <div className="card-content">
    //         <h2>19</h2>
    //         <span>направлений</span>
    //         <p>
    //           Позволяют нам гарантировать высокий уровень оказания медицинской
    //           помощи
    //         </p>
    //       </div>
    //     </div>
    //     <div className="section-2">
    //       <div className="card-content">
    //         <h2>150 видов</h2>
    //         <span>Диагностика экпертного уровня</span>
    //         <p>Такие как ИФА,ПЦР,общеклинические и многое другое</p>
    //       </div>
    //       <div className="card-content">
    //         <h2>Доступные цены</h2>
    //         <span>на весь спектр услуг</span>
    //         <p>
    //           Наши специалисты это наблюдение за вашим состаянием 365дней в году
    //         </p>
    //       </div>
    //       <div className="card-content">
    //         <h2>Комплексные решения</h2>
    //         <span>для детей и взрослых</span>
    //         <p>Современные медицинские технологии и припараты</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="discount-card">
    //     <div className="discount-card-box">
    //       <div className="discount-card-content">
    //         <div className="discount-text">
    //           <div className="discount">Акции</div>
    //         </div>
    //         <p>Предновогодняя акция на посещение соляной пещеры</p>
    //         <button>Подробно</button>
    //       </div>
    //       <div className="discount-card-content">
    //         <div className="discount-text">
    //           <div className="discount">Акции</div>
    //         </div>
    //         <p>Предновогодняя акция на посещение пластическую хирургию</p>
    //         <button>Подробно</button>
    //       </div>
    //       <div className="discount-card-content">
    //         <div className="discount-text">
    //           <div className="discount">Акции</div>
    //         </div>
    //         <p>Акция на бесплатную консультацию пластического хируга</p>
    //         <button>Подробно</button>
    //       </div>
    //       <div className="discount-card-content">
    //         <div className="discount-text">
    //           <div className="discount">Акции</div>
    //         </div>
    //         <p>Предновогодняя акция на посещение соляной пещеры</p>
    //         <button>Подробно</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CardHome;
