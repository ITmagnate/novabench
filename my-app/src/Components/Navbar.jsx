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
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid } from "@mui/material";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar
      position="static"
      sx={{
        paddingLeft: "3%",
        paddingRight: "3%",
        paddingTop: "3%",
        borderRadius: "20px",
        boxShadow: "none",
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <img
              src={"https://novabench.com/images/logo-text.png"}
              alt="Logo-Image"
              style={{ width: "200px" }}
            />
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
              <MenuIcon />
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Features</Typography>
                  <Typography textAlign="center"> Scores & Stats</Typography>
                  <Typography textAlign="center">Features</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
            }}
          >
            <img
              src={"https://novabench.com/images/logo-text.png"}
              alt="Logo-Image"
              style={{ width: "200px" }}
            />
          </Typography>
          <Grid
            sx={{
              flexGrow: 2,
              display: {
                xs: "none",
                md: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: "2px",
                color: "black",
              },
            }}
          >
            <Typography
              sx={{ textDecoration: "underline violet" }}
              paddingLeft="15px"
              textAlign="center"
            >
              Features
            </Typography>
            <Typography
              sx={{ textDecoration: "underline green" }}
              paddingLeft="15px"
              textAlign="center"
            >
              Scores & Stats
            </Typography>
            <Typography
              sx={{ textDecoration: "underline orange" }}
              paddingLeft="15px"
              textAlign="center"
            >
              Features
            </Typography>
          </Grid>

          <Grid sx={{ display: "flex", flexDirection: "row", width: "40%" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                borderRadius: "20px",
                width: "60%",
              }}
            >
              {" "}
              Download Now
            </Button>
            <Button
              variant="outlined"
              sx={{
                marginLeft: "5px",
                borderRadius: "20px",
                borderColor: "black",
                color: "black",
                width: "50%",
              }}
            >
              My Account
            </Button>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
