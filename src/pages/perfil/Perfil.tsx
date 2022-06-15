import {
  Avatar,
  Divider,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListaPostagem from "../../components/postagens/listapostagem/ListaPostagem";
import User from "../../models/User";
import { buscaId } from "../../services/Service";
import { UserState } from "../../store/tokens/userReducer";
import "./Perfil.css";

function Perfil() {
  // Estilização do avatar
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

  // Cria um estado para o avatar
  const classes = useStyles();
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

  // Executa o método findById()
  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  return (
    <>
      <Box component="div" className="nome">
        <Avatar
          className={classes.avatar}
          src={user.foto}
          alt="Foto de perfil"
        />
        <Typography variant="h5">{user.nome}</Typography>
        <Divider />
        <List className="nome">
          <Typography>{user.usuario}</Typography>
        </List>
      </Box>
      <Divider />
      <Grid container marginTop={3} marginBottom={4}>
        <Grid item sm={2}></Grid>
        <Grid
          sm={8}
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className="caixa"
        >
          <ListaPostagem />
        </Grid>
      </Grid>
    </>
  );
}
export default Perfil;
