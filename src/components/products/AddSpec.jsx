import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProducts } from "../../contexts/SpecialtiesContextProvider";

const AddSpec = () => {
  const { getCategories, categories, addSpecs } = useProducts();

  const [product, setProduct] = useState({
    title: "",
    description: "",
    experience: "",
    category: "",
    image: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories);

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", product.title);
    newProduct.append("description", product.description);
    newProduct.append("experience", product.experience);
    newProduct.append("category", product.category);
    newProduct.append("image", product.image);
    addSpecs(newProduct);
  }

  return (
    <Box
      sx={{
        width: "40vw",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ m: 2 }}>
        Add New Person
      </Typography>
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Name"
        variant="outlined"
        fullWidth
        name="title"
        onChange={handleInp}
        value={product.title}
      />
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Description"
        variant="outlined"
        fullWidth
        name="description"
        onChange={handleInp}
        value={product.description}
      />
      <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Experience"
        variant="outlined"
        fullWidth
        name="experience"
        onChange={handleInp}
        value={product.experience}
      />
      {/* <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Category"
        variant="outlined"
        fullWidth
        name="category"
      /> */}

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Specs</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="сфеупщкн"
          onChange={handleInp}
          value={product.category}
          name="category"
        >
          {categories?.map((item) => (
            <MenuItem value={item.id} key={item.id}>
              {item.title}
            </MenuItem>
          ))}
          <MenuItem value={10}>Ten</MenuItem>
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
      {/* <TextField
        sx={{ m: 1 }}
        id="standard-basic"
        label="Image"
        variant="outlined"
        fullWidth
        name="image"
      /> */}

      <input
        type="file"
        // hidden
        name="image"
        onChange={handleInp}
      />

      <Button
        sx={{
          m: 1,
        }}
        variant="outlined"
        fullWidth
        size="large"
        onClick={handleSave}
      >
        ADD Person
      </Button>
    </Box>
  );
};

export default AddSpec;
