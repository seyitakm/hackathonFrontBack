import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../contexts/CartContextProvider";

import { Box, createTheme, flexbox } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Cart() {
  const { getCart, changeSpecsCount, deleteSpecsInCart, cart, addSpecsToCart } =
    useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  const trHeadStyle = {
    backgroundColor: "rgb(21, 20, 20) !important",
  };

  return (
    <TableContainer
      sx={{
        "@media (max-width:600px)": {
          display: "flex",
          flexWrap: "wrap",
        },
      }}
      component={Paper}
    >
      <Table
        sx={{ minWidth: 600, width: "100%" }}
        aria-label="customized table"
      >
        <TableHead sx={{ width: "100%" }}>
          <TableRow>
            <StyledTableCell sx={trHeadStyle}>Picture</StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Name
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Last Name
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Description
            </StyledTableCell>
            <StyledTableCell sx={trHeadStyle} align="right">
              Experience
            </StyledTableCell>
            <StyledTableCell
              sx={
                (trHeadStyle,
                {
                  "@media (max-width:550px)": {
                    display: "none",
                  },
                })
              }
              align="right"
            >
              Number
            </StyledTableCell>

            <StyledTableCell sx={trHeadStyle} align="right">
              {" "}
              ---{" "}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.specs.map((row) => (
            <StyledTableRow key={row.item.id}>
              <StyledTableCell component="th" scope="row">
                <img src={row.item.image} alt="" width="70" />
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.item.first_name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.item.last_name}
              </StyledTableCell>
              <StyledTableCell
                align="right"
                sx={{
                  "@media (max-width:900px)": {
                    display: "none",
                  },
                }}
              >
                {row.item.description}
              </StyledTableCell>

              <StyledTableCell
                align="right"
                sx={{
                  "@media (max-width:900px)": {
                    display: "none",
                  },
                }}
              >
                {row.item.experience}
              </StyledTableCell>

              <StyledTableCell
                align="right"
                sx={{
                  "@media (max-width:900px)": {
                    display: "none",
                  },
                }}
              >
                {row.item.number}
              </StyledTableCell>

              <StyledTableCell align="right">
                <Button
                  onClick={() => deleteSpecsInCart(row.item.id)}
                  startIcon={<DeleteIcon sx={{ color: "#666699" }} />}
                ></Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ m: 5 }}>
        <Typography variant="h6" component="div">
          Total price: {cart?.totalPrice}
          <Button onClick={() => cartCleaner()}>Записаться</Button>
        </Typography>
      </Box>
    </TableContainer>
  );
}
