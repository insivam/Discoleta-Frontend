import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  CssBaseline,
  Drawer,
  Typography,
} from "@material-ui/core";
import {
  Apps,
  Menu,
  ContactMail,
  AssignmentInd,
  Home,
  Book,
} from "@material-ui/icons";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/userReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { buscaId } from "../../../services/Service";
import User from "../../../models/User";
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#056444",
    height: "100%",
  },
  avatar: {
    margin: "0.5rem auto",
    padding: "1rem",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "#7cb4a7",
  },
}));

function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const toggleSlider = () => {
    setOpen(!open);
  };

  // Funcionalidades do usuario
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  const id = useSelector<UserState, UserState["id"]>((state) => state.id);

  const [user, setUser] = useState<User>({
    id: +id, // Faz uma conversão de String para Number
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  // Métedo para pegar os dados de um Usuário especifico pelo ID
  async function findById(id: string) {
    buscaId(`/usuarios/${id}`, setUser, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken("")); //transforma o token em vazio quando deslogar
    toast.info("Usuário deslogado", {
      position: "top-right",
      autoClose: 1400,
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
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <Link to="/home" className="nav-link">
              <span className="link-text logo-text">Discoleta </span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    className="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    className="fa-primary"
                  ></path>
                </g>
              </svg>
            </Link>
          </li>

          <span>
            <Link to="/perfil">
              <Avatar className="classes.avatar" src={user.foto} />
            </Link>
          </span>
          <Typography className="link-text"></Typography>

          <li className="nav-item">
            <Link to="/home" className="nav-link">
              <Home />
              <span className="link-text">Home</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/perfil" className="nav-link">
              <AssignmentInd />
              <span className="link-text">Perfil</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/formularioPostagem" className="nav-link">
              <Apps />
              <span className="link-text">Postagem</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/temas" className="nav-link">
              <Book />
              <span className="link-text">Temas</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/formularioTema" className="nav-link">
              <Apps />
              <span className="link-text">Temas</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/sobre" className="nav-link">
              <ContactMail />
              <span className="link-text">Sobre</span>
            </Link>
          </li>

          <li className="nav-item" id="themeButton" onClick={goLogout}>
            <Link to="" className="nav-link">
              <LogoutIcon color="secondary" />
              <span className="link-text">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;
