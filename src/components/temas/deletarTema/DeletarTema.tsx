import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import "./DeletarTema.css";
import { useNavigate, useParams } from "react-router-dom";
import { buscaId, deleteId } from "../../../services/Service";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/userReducer";
import Tema from "../../../models/Tema";
import { toast } from "react-toastify";
import { Box, Grid } from "@mui/material";

function DeletarTema() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  const [tema, setTema] = useState<Tema>();

  useEffect(() => {
    if (token === "") {
      toast.error("Você precisa estar logado!", {
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
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    await buscaId(`/tema/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim() {
    navigate("/temas");
    deleteId(`/tema/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    toast.success("Tema deletado com sucesso!", {
      position: "top-right",
      autoClose: 1400,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  }

  function nao() {
    navigate("/temas");
  }

  return (
    <Grid container className="grid-master-deletar">
      <Grid item sm={2}></Grid>
      <Grid
        sm={8}
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
      <Box m={2}>
        <Card variant="outlined" className="tio">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">{tema?.descricao}</Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2}>
              <Box mx={2}>
                <Button
                  onClick={sim}
                  variant="contained"
                  className="button-entrar"
                  size="large"
                  color="primary"
                >
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button
                  onClick={nao}
                  variant="contained"
                  size="large"
                  color="secondary"
                  className="button-deletar"
                >
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
      </Grid>
      <Grid item sm={2}></Grid>
    </Grid>
  );
}
export default DeletarTema;
