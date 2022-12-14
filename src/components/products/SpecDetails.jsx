import { Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/SpecialtiesContextProvider";
import Comments from "../Comments";
import { Box } from "@mui/system";
import { useAuth } from "../../contexts/AuthContextProvider";
// import "../../styles/ProductDetails.css";

const SpecDetails = () => {
  const { id } = useParams();
  const { getProductDetails, oneProduct, deleteComment } = useProducts();
  const [value, setValue] = React.useState(0);

  const com = [];
  const navigate = useNavigate();
  useEffect(() => {
    getProductDetails(id);
  }, []);
  for (let i in oneProduct.comments) {
    com.push(oneProduct.comments[i]);
  }

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
      }}
    >
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            width: "100%",
          }}
          elevation={6}
        >
          <Grid container spacing={2}>
            <Grid className="productDetails_img" item xs={6}>
              <img
                className="img-details"
                src={oneProduct.image}
                alt=""
                style={{ maxWidth: "100%", maxHeight: "70vh" }}
              />
            </Grid>
            <Grid
              sx={{ marginTop: 9 }}
              className="productDetails_info"
              item
              xs={6}
            >
              <Typography className="productDetails_name" variant="h4">
                {oneProduct.first_name}
              </Typography>
              <Typography className="productDetails_type" variant="subtitle1">
                {oneProduct.last_name}
              </Typography>
              <Typography className="productDetails_price" variant="caption">
                ${oneProduct.experience}
              </Typography>
              <Typography
                sx={{ paddingRight: "20px" }}
                className="productDetails_descr"
              >
                {oneProduct.description}
              </Typography>
              <Typography className="productDetails_price" variant="caption">
                {oneProduct.adress}
              </Typography>
              <br />
              <Typography className="productDetails_price" variant="caption">
                {oneProduct.number}
              </Typography>
            </Grid>
          </Grid>
          {/* ----------- */}
          <BottomNavigation
            className="bottom_nav"
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              onClick={() => navigate("/spec")}
              icon={<ArrowBackIcon />}
            />
          </BottomNavigation>
          <Box sx={{ width: "100%" }}>
            <h3>????????????!</h3>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              {com.map((e) => {
                // console.log(e);
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      // alignItems: "center",
                      width: "80%",
                    }}
                    key={e.id}
                  >
                    <p style={{ color: "#999" }}>
                      <strong>{e.user}:</strong>
                    </p>
                    <p
                      style={{
                        marginLeft: "4%",
                        width: "100%",
                        height: "80px",
                        border: "1px solid teal",
                        borderRadius: "10px",
                      }}
                    >
                      {e.body}
                    </p>
                    <button onClick={deleteComment.id}>Delete</button>
                  </div>
                );
              })}
            </Box>
          </Box>
        </Paper>
      </div>
      <Comments />
    </div>
  );
};

export default SpecDetails;
