import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useProducts } from "../contexts/SpecialtiesContextProvider";

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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function DoctorsSchedule() {
  const { getSpecs, specs } = useProducts();
  React.useEffect(() => {
    getSpecs();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Специалист</StyledTableCell>
            <StyledTableCell align="right">Понеделник</StyledTableCell>
            <StyledTableCell align="right">Вторник</StyledTableCell>
            <StyledTableCell align="right">Среда</StyledTableCell>
            <StyledTableCell align="right">Четверг</StyledTableCell>
            <StyledTableCell align="right">Пятница</StyledTableCell>
            <StyledTableCell align="right">Суббота</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {specs.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                <b>{row.first_name + " " + row.last_name}</b>
                <p style={{ color: "gray" }}>{row.description}</p>
              </StyledTableCell>
              <StyledTableCell align="right">11:00</StyledTableCell>
              <StyledTableCell align="right">20:00</StyledTableCell>
              <StyledTableCell align="right">13:30</StyledTableCell>
              <StyledTableCell align="right">15:00</StyledTableCell>
              <StyledTableCell align="right">15:00</StyledTableCell>
              <StyledTableCell align="right">15:00</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
