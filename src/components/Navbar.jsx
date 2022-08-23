import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import MenuItem from "@mui/material/MenuItem";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import logo from "./icons/logo.png";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  //   const settings = ["Register", "Login", "Logout"];

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <AppBar position="realitive" id="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img className="logo1" src={logo} alt="logo" />

          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            className="nav-name"
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BishClinic+
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="menu" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* mobile */}
              <MenuItem className="navs" onClick={() => navigate("/")}>
                <HomeIcon />
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem className="navs" onClick={() => navigate("/spec")}>
                <Typography textAlign="center">Specialties</Typography>
              </MenuItem>
              <MenuItem className="navs" onClick={() => navigate("/services")}>
                <MedicalServicesOutlinedIcon />
                <Typography textAlign="center">Services</Typography>
              </MenuItem>
              <MenuItem className="navs" onClick={() => navigate("/contacts")}>
                <PermContactCalendarOutlinedIcon />
                <Typography textAlign="center">Contacts</Typography>
              </MenuItem>
              <MenuItem className="navs" onClick={() => navigate("/schedule")}>
                <CalendarMonthOutlinedIcon />
                <Typography textAlign="center">Doctors Schedule</Typography>
              </MenuItem>
              <MenuItem className="navs" onClick={() => navigate("/pricelist")}>
                <EventNoteOutlinedIcon />
                <Typography textAlign="center">Price list</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <img className="logo2" src={logo} alt="logo" />
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            className="nav-name"
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BishClinic+
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {/* pc */}
            <MenuItem className="navs" onClick={() => navigate("/spec")}>
              <Typography textAlign="center">Specialties</Typography>
            </MenuItem>
            <MenuItem className="navs" onClick={() => navigate("/services")}>
              <MedicalServicesOutlinedIcon />
              <Typography textAlign="center">Services</Typography>
            </MenuItem>
            <MenuItem className="navs" onClick={() => navigate("/contacts")}>
              <PermContactCalendarOutlinedIcon />
              <Typography textAlign="center">Contacts</Typography>
            </MenuItem>
            <MenuItem className="navs" onClick={() => navigate("/schedule")}>
              <CalendarMonthOutlinedIcon />
              <Typography textAlign="center">Doctors Schedule</Typography>
            </MenuItem>
            <MenuItem className="navs" onClick={() => navigate("/pricelist")}>
              <EventNoteOutlinedIcon />
              <Typography textAlign="center">Price list</Typography>
            </MenuItem>
          </Box>

          {/* <TextField
            sx={{ m: 1 }}
            color="success"
            id="standard-basic"
            label="Description"
            name="Search"
          /> */}

          <Search className="navs-search">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box sx={{ flexGrow: 0, ml: 2 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={() => navigate("/admin")}>
                <Typography textAlign="center">Admin</Typography>
              </MenuItem>
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
