import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#6ba3cb",
    height: "100%",
  },
  avatar: {
    margin: "0.5rem auto",
    padding: "1rem",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const listItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    linked: "/home",
  },

  {
    listIcon: <AssignmentInd />,
    listText: "perfil",
    linked: "/home",
  },

  {
    listIcon: <Apps />,
    listText: "Temas",
    linked: "/temas",
  },

  {
    listIcon: <Book />,
    listText: "Cadastrar Tema",
    linked: "/formularioTema",
  },

  {
    listIcon: <ContactMail />,
    listText: "Sobre",
    linked: "/sobre",
  },
];

function Nav2() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar
        className={classes.avatar}
        src="https://i.ibb.co/rx5DFbs/avatar.png"
        alt="Juaneme8"
      />
      <Divider />
      <List>
        {listItems.map((listItem, index) => (
          <ListItem className={classes.listItem} button key={index}>
            <Link to={listItem.linked} className="link">
              <ListItemIcon className={classes.listItem}>
                {listItem.listIcon}
              </ListItemIcon>
              <Typography className="link">{listItem.listText}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
      <Box style={{ cursor: "pointer" }} onClick={goLogout} marginLeft="15px">
        <LogoutIcon color="secondary" />
        <Typography
          variant="h6"
          color="inherit"
          className="logout"
        ></Typography>
      </Box>
    </Box>
  );

  // Funcionalidades do usuario
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
      <>
        <CssBaseline />

        <Box component="nav" position="fixed">
          <AppBar position="static">
            <Toolbar>
              <IconButton onClick={toggleSlider}>
                <Menu />
              </IconButton>
              <Typography>Portfolio</Typography>
              <Drawer open={open} anchor="left" onClose={toggleSlider}>
                {sideList()}
              </Drawer>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    );
  }

  return <>{navbarComponent}</>;
}

export default Nav2;
