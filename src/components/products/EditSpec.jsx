// import { Navigate } from "react-router-dom";
// import {
//   Box,
//   Button,
//   FormControl,
//   Input,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";
// // import { useProducts } from "../../contexts/SpecialtiesContextProvider";

// const EditSpec = () => {
//   const navigate = Navigate();

//   // const [product, setProduct] = useState({
//   //   first_name: "",
//   //   last_name: "",
//   //   adress: "",
//   //   description: "",
//   //   number: "",
//   //   categories: [0],
//   //   image: "",
//   // service_listing: [0],
//   // });

//   // const handleInp = (e) => {
//   //   if (e.target.name === "image") {
//   //     setProduct({
//   //       ...product,
//   //       [e.target.name]: e.target.files[0],
//   //     });
//   //   } else {
//   //     setProduct({
//   //       ...product,
//   //       [e.target.name]: e.target.value,
//   //     });
//   //   }
//   // };
//   return (
//     <div>
//       <Box
//         sx={{
//           width: "40vw",
//           margin: "0 auto",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="h6" sx={{ m: 2 }}>
//           Add New Person
//         </Typography>
//         <TextField
//           sx={{ m: 1 }}
//           id="standard-basic"
//           label="First Name"
//           variant="outlined"
//           fullWidth
//           name="first_name"
//           // onChange={handleInp}
//           // value={product.first_name}
//         />
//         <TextField
//           sx={{ m: 1 }}
//           id="standard-basic"
//           label="Last Name"
//           variant="outlined"
//           fullWidth
//           name="last_name"
//           // onChange={handleInp}
//           // value={product.last_name}
//         />
//         <TextField
//           sx={{ m: 1 }}
//           id="standard-basic"
//           label="Adress"
//           variant="outlined"
//           fullWidth
//           name="adress"
//           // onChange={handleInp}
//           // value={product.adress}
//         />
//         <TextField
//           sx={{ m: 1 }}
//           id="standard-basic"
//           label="Description"
//           variant="outlined"
//           fullWidth
//           name="description"
//           // onChange={handleInp}
//           // value={product.description}
//         />
//         <TextField
//           sx={{ m: 1 }}
//           id="standard-basic"
//           label="Experience"
//           variant="outlined"
//           fullWidth
//           name="experience"
//           // onChange={handleInp}
//           // value={product.experience}
//         />
//         <TextField
//           sx={{ m: 1 }}
//           id="standard-basic"
//           label="Number"
//           variant="outlined"
//           fullWidth
//           name="number"
//           // onChange={handleInp}
//           // value={product.number}
//         />
//         {/* <TextField
//           sx={{ m: 1 }}
//           id="standard-basic"
//           label="Category"
//           variant="outlined"
//           fullWidth
//           name="category"
//         /> */}

//         {/* <FormControl sx={{ mt: 1 }} fullWidth>
//           <InputLabel id="demo-simple-select-label">Specs</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             label="categories"
//             // onChange={handleInp}
//             value={product.categories}
//             name="categories"
//           >
//             {category?.map((item) => (
//               <MenuItem value={item.id} key={item.id}>
//                 {item.last_name}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl> */}
//         {/* <TextField
//           sx={{ m: 1 }}
//           id="standard-basic"
//           label="Image"
//           variant="outlined"
//           fullWidth
//           name="image"
//         /> */}

//         <input
//           style={{ marginTop: 10 }}
//           type="file"
//           // hidden
//           name="image"
//           // onChange={handleInp}
//         />

//         <Button
//           sx={{
//             m: 1,
//           }}
//           variant="outlined"
//           fullWidth
//           size="large"
//           // onClick={handleSave}
//         >
//           Save Changes
//         </Button>
//         <Button onClick={() => navigate("/spec")}>Выйти</Button>
//       </Box>
//     </div>
//   );
// };

// export default EditSpec;