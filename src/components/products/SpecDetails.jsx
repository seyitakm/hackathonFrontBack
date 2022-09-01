import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/SpecialtiesContextProvider";
// import "../../styles/ProductDetails.css";

const SpecDetails = () => {
  const { id } = useParams();
  // console.log(id);

  const { getProductDetails, oneProduct } = useProducts();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  console.log(oneProduct);

  return (
    <div
      style={{
        width: "90%",
      }}
    >
      <Paper
        sx={{
          height: 470,
          mt: 15,
          ml: 15,
          mb: 5,
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
      </Paper>
    </div>
  );
};

export default SpecDetails;
