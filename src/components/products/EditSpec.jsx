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
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/SpecialtiesContextProvider";

const EditSpec = () => {
  const {
    getCategories,
    category,
    saveEditedProduct,
    getProductDetails,
    oneProduct,
  } = useProducts();
  const [spec, setSpec] = useState(oneProduct);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setSpec({
      ...spec,
      image: image,
    });
  }, [image]);

  useEffect(() => {
    setSpec(oneProduct);
  }, [oneProduct]);

  const handleInp = (e) => {
    if (e.target.name === "files") {
      console.log(e.target.files[0]);

      setSpec({
        ...spec,
        [e.target.name]: e.target.files[0],
      });
    } else if (e.target.name === "categories") {
      setSpec({
        ...spec,
        [e.target.name]: e.target.title,
      });
    } else {
      setSpec({
        ...spec,
        [e.target.name]: e.target.value,
      });
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
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
          Изменить Доктора
        </Typography>
        <TextField
          sx={{ m: 1 }}
          id="standard-basic"
          label="First Name"
          variant="outlined"
          fullWidth
          name="first_name"
          onChange={handleInp}
          value={spec.first_name || ""}
        />
        <TextField
          sx={{ m: 1 }}
          id="standard-basic"
          label="Last Name"
          variant="outlined"
          fullWidth
          name="last_name"
          onChange={handleInp}
          value={spec.last_name || ""}
        />
        <TextField
          sx={{ m: 1 }}
          id="standard-basic"
          label="Adress"
          variant="outlined"
          fullWidth
          name="adress"
          onChange={handleInp}
          value={spec.adress || ""}
        />
        <TextField
          sx={{ m: 1 }}
          id="standard-basic"
          label="Description"
          variant="outlined"
          fullWidth
          name="description"
          onChange={handleInp}
          value={spec.description || ""}
        />
        <TextField
          sx={{ m: 1 }}
          id="standard-basic"
          label="Experience"
          variant="outlined"
          fullWidth
          name="experience"
          onChange={handleInp}
          value={spec.experience || ""}
        />
        <TextField
          sx={{ m: 1 }}
          id="standard-basic"
          label="Number"
          variant="outlined"
          fullWidth
          name="number"
          onChange={handleInp}
          value={spec.number || ""}
        />
        {/* <TextField
          sx={{ m: 1 }}
          id="standard-basic"
          label="Image"
          variant="outlined"
          fullWidth
          name="picture"
          onChange={handleInp}
          value={spec.image}
        /> */}
        <FormControl sx={{ mt: 1 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Specs</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="categories"
            onChange={handleInp}
            value={spec.categories}
            name="categories"
          >
            {category?.map((item) => (
              <MenuItem value={item.id} key={item.id} onChange={handleInp}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <input
          style={{ marginTop: 10 }}
          type="file"
          accept="image/png, image/jpeg"
          name="image"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />

        <Button
          sx={{
            m: 1,
          }}
          variant="outlined"
          fullWidth
          size="large"
          onClick={() => {
            saveEditedProduct(spec);
            navigate("/spec");
          }}
        >
          Изменить
        </Button>
        <Button
          sx={{
            m: 1,
          }}
          variant="outlined"
          fullWidth
          size="large"
          onClick={() => navigate("/spec")}
        >
          Отмена
        </Button>
      </Box>
    </>
  );
};

export default EditSpec;
