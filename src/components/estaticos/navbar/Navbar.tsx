import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box style={{ cursor: "pointer" }}>
            <Typography variant="h5" color="inherit">
              Discoleta
            </Typography>
          </Box>
          <Box display="flex" justifyContent="start">
          <Link to="/home" className="link">
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit" className="nav">
                Home
              </Typography>
            </Box>
            </Link>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                Sobre
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit" className="nav">
                Perfil
              </Typography>
            </Box>
            <Box  mx={1} style={{ cursor: "pointer" }}>
            <Link to="/login" className="link">
              <Box>
              <Typography variant="h6" color="inherit" className="nav">
                Login
              </Typography>
              </Box>
            </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
