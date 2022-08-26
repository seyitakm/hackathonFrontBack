import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/SpecialtiesContextProvider";
import { useNavigate } from "react-router-dom";

export default function SpecialtiesCard({ item }) {
  const { deleteSpec, editSpec } = useProducts();
  const navigate = useNavigate();
  return (
    // <Card
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     mt: 10,
    //     width: 320,
    //     maxHeight: 520,
    //   }}
    // >
    //   <CardMedia component="img" height="140" image={item.image} alt="doctor" />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {item.first_name} {item.last_name}
    //     </Typography>

    //     <Typography gutterBottom variant="h5" component="div">
    //       {item.number}
    //     </Typography>

    //     <Typography gutterBottom variant="h5" component="div">
    //       {item.adress}
    //     </Typography>

    //     <Typography variant="body2" color="text.secondary">
    //       {item.description}
    //     </Typography>

    //     <Typography gutterBottom variant="h5" component="div">
    //       {item.experience}
    //     </Typography>
    //     {/* <Typography variant="caption" color="error">
    //       {item.categories}
    //     </Typography> */}
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small" onClick={() => deleteSpec(item.id)}>
    //       Удалить
    //     </Button>
    //     <Button
    //       size="small"
    //       onClick={() => {
    //         // editSpec(item.id);
    //         navigate("/edit");
    //       }}
    //     >
    //       Изменить
    //     </Button>
    //     <Button size="small" onClick={() => navigate("/")}>
    //       Про доктора
    //     </Button>
    //   </CardActions>
    // </Card>
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
                  editSpec(item.id);
                  navigate("/edit");
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
