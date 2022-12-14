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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "./icons/logo.png";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import { Badge, Button, createTheme, Paper } from "@mui/material";
import { useAuth } from "../contexts/AuthContextProvider";
import { useCart } from "../contexts/CartContextProvider";
// import { useProducts } from "../contexts/SpecialtiesContextProvider";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { user, logout, checkAuth, username1 } = useAuth();
  const { checkSpecsInCart } = useCart();

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

  const buttons = {
    color: "black",
    display: "block",
    textTransform: "capitalize",
  };

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  return (
    <AppBar position="relative" id="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            onClick={() => navigate("/")}
            className="logo1"
            src={logo}
            alt="logo"
          />

          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            className="nav-name"
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              cursor: "pointer",
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
                <Typography textAlign="center">??????????????</Typography>
              </MenuItem>
              <MenuItem className="navs" onClick={() => navigate("/spec")}>
                <Typography textAlign="center">??????????????????????</Typography>
              </MenuItem>
              {/* <MenuItem className="navs" onClick={() => navigate("/services")}>
                <Typography textAlign="center">????????????</Typography>
              </MenuItem> */}
              <MenuItem className="navs" onClick={() => navigate("/contacts")}>
                <Typography textAlign="center">????????????????</Typography>
              </MenuItem>
              <MenuItem
                className="navs"
                onClick={() => navigate("/cart")}
                onChange={() => checkSpecsInCart()}
              >
                <Typography textAlign="center">????????????</Typography>
              </MenuItem>
              <MenuItem className="navs" onClick={() => navigate("/pricelist")}>
                <Typography textAlign="center">?????????? ????????</Typography>
              </MenuItem>

              <MenuItem className="navs" onClick={() => navigate("/login")}>
                <Typography>??????????????????????</Typography>
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
              <Typography textAlign="center">??????????????????????</Typography>
            </MenuItem>
            {/* <MenuItem className="navs" onClick={() => navigate("/services")}>
              <Typography textAlign="center">????????????</Typography>
            </MenuItem> */}
            <MenuItem className="navs" onClick={() => navigate("/contacts")}>
              <Typography textAlign="center">????????????????</Typography>
            </MenuItem>
            <MenuItem
              className="navs"
              onClick={() => navigate("/cart")}
              onChange={() => checkSpecsInCart()}
            >
              <Badge
                badgeContent={
                  JSON.parse(localStorage.getItem("cart"))?.specs.length
                }
                color="secondary"
                showZero
              >
                <Typography textAlign="center">????????????</Typography>
              </Badge>
            </MenuItem>
            <MenuItem className="navs" onClick={() => navigate("/pricelist")}>
              <Typography textAlign="center">?????????? ????????</Typography>
            </MenuItem>
          </Box>

          <Search className="navs-search">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="??????????.."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {user ? (
            <Box sx={{ flexGrow: 0, ml: 2 }}>
              <Tooltip title="?? ????????">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "75px", width: "350px !important" }}
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
                {user == "seyit200020@gmail.com" ||
                user == "admin@gmail.com" ? (
                  <div>
                    <MenuItem>
                      <Typography
                        sx={{ alignSelf: "center", cursor: "pointer" }}
                        onClick={() => {
                          navigate("/user");
                          username1();
                        }}
                      >
                        ??????????????????
                      </Typography>
                    </MenuItem>

                    <MenuItem onClick={() => navigate("/admin")}>
                      <Typography textAlign="center">??????????</Typography>
                    </MenuItem>

                    <MenuItem onClick={logout}>
                      <Typography textAlign="center" sx={{ color: "red" }}>
                        ??????????
                      </Typography>
                    </MenuItem>
                  </div>
                ) : (
                  <div>
                    <MenuItem>
                      <Typography
                        sx={{ alignSelf: "center", cursor: "pointer" }}
                        onClick={() => navigate("/user")}
                      >
                        ??????????????????
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={logout}>
                      <Typography textAlign="center" sx={{ color: "red" }}>
                        ??????????
                      </Typography>
                    </MenuItem>
                  </div>
                )}

                {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ display: "flex" }}>
              <MenuItem className="navs logreg">
                <Button sx={buttons} onClick={() => navigate("/login")}>
                  ??????????????????????
                </Button>
              </MenuItem>
              <MenuItem className="navs logreg">
                <Button sx={buttons} onClick={() => navigate("/register")}>
                  ??????????????????????
                </Button>
              </MenuItem>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
