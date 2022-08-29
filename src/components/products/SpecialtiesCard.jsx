import * as React from "react";

import Button from "@mui/material/Button";

import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/SpecialtiesContextProvider";
import { useNavigate } from "react-router-dom";

export default function SpecialtiesCard({ item }) {
  const { deleteSpec, editSpec } = useProducts();
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="container-card">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img
              style={{ width: "300px", height: "215px" }}
              src={item.image}
              alt="doc"
            />
            {/* <i className="fab fa-apple"></i> */}
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <h3 style={{ marginTop: 10 }}>
              {item.first_name} {item.last_name}
            </h3>
            <h4 style={{ marginTop: 10 }}>Стаж:{item.experience}</h4>
            <p
              style={{
                marginTop: 5,
              }}
            >
              {item.description}
            </p>
            <h6 style={{ marginTop: 7 }}>Адрес:{item.adress}</h6>
            <span>Номер:{item.number}</span>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                style={{ marginTop: 5 }}
                size="small"
                onClick={() => navigate("/details")}
              >
                Узнать Больше
              </Button>

              <Button
                style={{ marginTop: 5, color: "red" }}
                size="small"
                onClick={() => deleteSpec(item.id)}
              >
                Удалить
              </Button>

              <Button
                style={{ marginTop: 5, color: "#5049ac" }}
                size="small"
                onClick={() => {
                  navigate(`/edit/${item.id}`);
                }}
              >
                Изменить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
