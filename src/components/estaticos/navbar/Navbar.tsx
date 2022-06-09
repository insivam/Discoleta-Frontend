import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";

function NavBar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
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
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
  return <>{navbarComponent}</>;
}

export default NavBar;
