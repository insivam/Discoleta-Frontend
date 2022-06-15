import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import "./DeletarPostagem.css";
import { useNavigate, useParams } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { buscaId, deleteId } from "../../../services/Service";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/userReducer";
import { toast } from "react-toastify";

function DeletarPostagem() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [post, setPosts] = useState<Postagem>();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado!", {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
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
    buscaId(`/postagens/${id}`, setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  function sim() {
    navigate("/home");
    deleteId(`/postagens/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    toast.success("Postagem deletada com sucesso!", {
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
    navigate("/home");
  }

  return (
    <Grid container className="grid-master-postagem">
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
                  Deseja deletar a Postagem:
                </Typography>
                <Typography color="textSecondary">{post?.titulo}</Typography>
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
                  >
                    <Typography className="fonte">Sim</Typography>
                  </Button>
                </Box>
                <Box>
                  <Button
                    onClick={nao}
                    variant="contained"
                    size="large"
                    className="button-deletar"
                  >
                    <Typography className="fonte">Não</Typography>
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
export default DeletarPostagem;
