import React from "react";
import "./Styles/Footer.css";
import whatsapp_icon from "./icons/icons8-whatsapp-64.png";
import telegram_icon from "./icons/icons8-telegram-app-64.png";
import mail_icon from "./icons/icons8-mail-64.png";
import facebook_icon from "./icons/icons8-facebook-64.png";
import instagram_icon from "./icons/icons8-instagram-64.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="section1">
            <ul id="footer-menu">
              <li>
                <a href="#">Прайс лист</a>
              </li>
              <li>
                <a href="#">Анализы</a>
              </li>
              <li>
                <a href="#">График работы</a>
              </li>
              <li>
                <a href="#">Новости</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
              <li style={{ display: "flex" }}>
                <a href="">
                  <img src={whatsapp_icon} alt="" />
                </a>
                <a href="">
                  <img src={telegram_icon} alt="" />
                </a>
                <a href="">
                  <img src={mail_icon} alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="section2">
            <p>
              Внимание! Цены на сайте и в клинике могут различаться. Просьба
              уточнять цены у администраторов клиники. Внимание! Оставить заявку
              на прием, вопрос или предложение в мессенджерах Вы можете и в
              нерабочее время. Мы обязательно свяжемся с Вами!
            </p>
          </div>
          <div className="section3">
            <ul id="footer-menu">
              <li>
                <p>720011, Бишкек, ул. Гоголя 133 (пер. ул. Фрунзе)</p>
              </li>
              <li>
                <a href="#">312 43-93-13</a>
              </li>
              <li>
                <a href="#">706 43-93-13</a>
              </li>
              <li>
                <a href="#">555 04-17-17</a>
              </li>
              <li>
                <a href="#">megalab2009@yandex.com</a>
              </li>
              <li>
                <a href="">
                  <img src={facebook_icon} alt="" />
                </a>
                <a href="">
                  <img src={instagram_icon} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-copyrigth">
          <p>Медицинский центр "Здоровье" © 2016-2022 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
