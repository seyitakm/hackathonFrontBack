import * as React from "react";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/SpecialtiesContextProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useCart } from "../../contexts/CartContextProvider";
import likeBtn from "../icons/like-pngrepo-com.png";
import favoriteBtn from "../icons/favorite-pngrepo-com.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import { Box } from "@mui/system";
import { useState } from "react";

export default function SpecialtiesCard({ item }) {
  const { deleteSpec, editSpec, getLike, getFavorite } = useProducts();
  const { addSpecsToCart } = useCart();
  const navigate = useNavigate();

  const [color, setColor] = useState({});
  const [starColor, setStarColor] = useState({});
  const handleColor = () => {
    color.color ? setColor({}) : setColor({ color: "red" });
  };

  const handleStar = () => {
    starColor.starColor ? setStarColor({}) : setStarColor({ color: "yellow" });
  };

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

            <div
              style={{
                display: "flex",
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
                  <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <FavoriteIcon
                      sx={color}
                      onClick={() => {
                        getLike(item.id);
                        handleColor();
                      }}
                    />
                    <StarIcon
                      sx={starColor}
                      onClick={() => {
                        getFavorite(item.id);
                        handleStar();
                      }}
                    />
                  </Box>
                </div>
              ) : (
                <>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
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
                    <Box
                      sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                      <FavoriteIcon
                        sx={color}
                        onClick={() => {
                          getLike(item.id);
                          handleColor();
                        }}
                      />
                      <StarIcon
                        sx={starColor}
                        onClick={() => {
                          getFavorite(item.id);
                          handleStar();
                        }}
                      />
                    </Box>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
