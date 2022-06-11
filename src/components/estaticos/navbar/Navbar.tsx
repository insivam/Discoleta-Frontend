import React from "react";
<<<<<<< HEAD
import { AppBar, Toolbar, Typography, Box, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import "./Navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
=======
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/userReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function NavBar() {
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken("")); //transforma o token em vazio quando deslogar
    toast.info("Usuário deslogado", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/login");
  }
  var navbarComponent;

  if (token != "") {
    //so aparece a navbar se tiver o token
    navbarComponent = (
      <AppBar position="static">
        <Toolbar variant="dense" className="meudeus">
>>>>>>> b0b6e2eb1ff17c45a8b9a97a0832f1793963fb30
          <Box style={{ cursor: "pointer" }}>
            <Typography variant="h5" color="inherit">
              Discoleta
            </Typography>
          </Box>
<<<<<<< HEAD
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
=======
          <Box display="flex" justifyContent="start" className="meudeus">
            <Link to="/home" className="link">
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit" className="nav">
                  Home
                </Typography>
              </Box>
            </Link>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Link to="/perfil" className="link">
                <Typography variant="h6" color="inherit" className="nav">
                  Perfil
                </Typography>
              </Link>
            </Box>
            <Link to="/temas" className="link">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit" className="nav">
                  Temas
                </Typography>
              </Box>
            </Link>

            <Link to="/formularioTema" className="link">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit" className="nav">
                  Cadastrar Temas
                </Typography>
              </Box>
            </Link>

            {/* Meio de contato */}
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Link to="/sobre" className="link">
                <Typography variant="h6" color="inherit" className="nav">
                  Sobre
                </Typography>
              </Link>
            </Box>

            {/* Faz o log out do usuario */}
            <Box mx={1} style={{ cursor: "pointer" }} onClick={goLogout}>
              <Typography variant="h6" color="inherit" className="nav">
                Logout
              </Typography>
>>>>>>> b0b6e2eb1ff17c45a8b9a97a0832f1793963fb30
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
<<<<<<< HEAD
    </>
  );
=======
    );
  }
  return <>{navbarComponent}</>;
>>>>>>> b0b6e2eb1ff17c45a8b9a97a0832f1793963fb30
}

export default NavBar;
