import * as React from "react";

import Button from "@mui/material/Button";

import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/SpecialtiesContextProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useCart } from "../../contexts/CartContextProvider";

export default function SpecialtiesCard({ item }) {
  const { deleteSpec, editSpec } = useProducts();
  const { addSpecsToCart } = useCart();
  const navigate = useNavigate();

  const { id } = useParams();

  const { user } = useAuth();

  return (
    <div className="container-card">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <img
              style={{ borderRadius: 15, width: "220px", height: "215px" }}
              src={item.image}
              alt="doc"
            />
            {/* <i className="fab fa-apple"></i> */}
          </div>
        </div>
        <div className="face face2">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="content"
          >
            <h3 style={{ color: "#424242" }}>
              {item.first_name} {item.last_name}
            </h3>
            <h4 style={{ fontSize: "15px", color: "gray", marginTop: 10 }}>
              Стаж:{item.experience}
            </h4>
            <p
              style={{
                color: "green",
                marginTop: 5,
              }}
            >
              {item.description}
            </p>
            {/* <h6 style={{ marginTop: 7 }}>Адрес:{item.adress}</h6>
            <span>Номер:{item.number}</span> */}
            <div
              style={{
                display: "flex",
                // flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {user == "beksbor05@gmail.com" ||
              user == "seyit200020@gmail.com" ||
              user == "admin@gmail.com" ? (
                <div>
                  <Button
                    style={{ marginLeft: 35, marginTop: 5, color: "red" }}
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

                  <Button
                    style={{ marginTop: 5 }}
                    size="small"
                    onClick={() => navigate(`/details/${item.id}`)}
                    className="btn-more"
                  >
                    Узнать Больше
                  </Button>
                  <Button
                    style={{ marginTop: 5 }}
                    size="small"
                    className="btn-more"
                    onClick={() => {
                      navigate("/cart");
                      addSpecsToCart(item);
                    }}
                  >
                    Записаться
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    style={{ marginTop: 5 }}
                    size="small"
                    onClick={() => navigate(`/details/${item.id}`)}
                    className="btn-more"
                  >
                    Узнать Больше
                  </Button>
                  <Button
                    style={{ marginTop: 5 }}
                    size="small"
                    className="btn-more"
                    onClick={() => {
                      navigate("/cart");
                      addSpecsToCart(item);
                    }}
                  >
                    Записаться
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
