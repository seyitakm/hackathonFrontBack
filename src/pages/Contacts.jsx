import React from "react";
import "../components/Styles/Contacts.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import CUsComponent from "../components/CUsComponent";

const Contacts = () => {
  const navigate = useNavigate();
  const position = [42.82881661578283, 74.58419582287019];
  return (
    <div>
      <div className="clinic-name">"BishClinic+"</div>;
      <div className="Contacts">
        <div style={{ width: "100%" }}>
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            style={{ margin: "0 auto", marginTop: "50px" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[42.82881661578283, 74.58419582287019]}>
              <Popup>
                BishClinic+ <br />
                Семейная клиника <br />
                <a href="https://2gis.kg/bishkek/firm/70000001047006378/74.584363%2C42.828519?m=74.583745%2C42.82865%2F15.8">
                  2-GIS
                </a>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <CUsComponent />
        <div className="contacts-box">
          <div className="contacts-container">
            <div className="contacts-info">
              <ul>
                <li>720011, Бишкек, ул. Гоголя 133 (пер. ул. Фрунзе)</li>
                <li>Пн-Пт: 7:30 — 17:00</li>
                <li>Сб: 7:30 — 15:00</li>
                <li>Вс: Выходной</li>
              </ul>
            </div>
            <div className="contacts-info">
              <ul>
                <li>312 43-93-13</li>
                <li>706 43-93-13</li>
                <li>555 04-17-17</li>
                <a href="#">megalab2009@yandex.com</a>
              </ul>
            </div>
            <div className="contacts-info">
              <ul>
                <li>Запись на галотерапию (соляная комната):</li>
                <li>0 312 43-93-05</li>
                <li>0 705 43-93-05</li>
              </ul>
            </div>
            <div className="contacts-btn">
              <button
                className="btn-contacts"
                onClick={() => navigate("/spec")}
              >
                Запись на прием
              </button>
              <button className="btn-contacts1">Получить консультацию</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
