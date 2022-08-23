import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";

const AddProduct = () => {
  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  // const handleInp = (e) => {
  //   if (e.target.name === "price") {
  //     let obj = {
  //       ...product,
  //       [e.target.name]: Number(e.target.value),
  //     };
  //     setProduct(obj);
  //   } else {
  //     let obj = {
  //       ...product,
  //       [e.target.name]: e.target.value,
  //     };
  //     setProduct(obj);
  //   }
  // };

  return (
    <Box
      sx={{
        // width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "50%", marginTop: 12, marginBottom: 10 }}>
        <Typography variant="h6" sx={{ m: 2 }}>
          ADD NEW PERSON
        </Typography>
        <TextField
          sx={{ m: 1 }}
          color="secondary"
          id="standard-basic"
          label="Name"
          variant="outlined"
          fullWidth
          name="name"
          // onChange={handleInp}
        />
        <TextField
          sx={{ m: 1 }}
          color="secondary"
          id="standard-basic"
          label="Description"
          variant="outlined"
          fullWidth
          name="description"
          // onChange={handleInp}
        />
        <TextField
          sx={{ m: 1 }}
          color="secondary"
          id="standard-basic"
          label="Price"
          variant="outlined"
          fullWidth
          name="price"
          // onChange={handleInp}
        />
        <TextField
          sx={{ m: 1 }}
          color="secondary"
          id="standard-basic"
          label="Picture"
          variant="outlined"
          fullWidth
          name="picture"
          // onChange={handleInp}
        />
        <TextField
          sx={{ m: 1 }}
          color="secondary"
          id="standard-basic"
          label="Type"
          variant="outlined"
          fullWidth
          name="type"
          // onChange={handleInp}
        />
        <Button
          sx={{
            m: 1,
            bgcolor: "rgb(28, 29, 29)",
            color: "#fff",
            "&:hover": { bgcolor: "rgb(30, 29, 29)" },
          }}
          variant="outlined"
          fullWidth
          size="large"
          // onClick={() => {
          //   addProduct(product);
          //   navigate("/products");
          // }}
        >
          ADD PRODUCT
        </Button>
      </Box>
    </Box>
  );
};

export default AddProduct;
