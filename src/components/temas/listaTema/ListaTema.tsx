import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import { busca } from "../../../services/Service";
import Tema from "../../../models/Tema";
import "./ListaTema.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/userReducer";
import { Box, Grid } from "@mui/material";

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([]);
  let navigate = useNavigate();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  async function getTema() {
    await busca("/tema", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getTema();
  }, [temas.length]);

  return (
    <Grid container className="grid-master-home">
      <Grid item sm={2}></Grid>
      <Grid
        sm={8}
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {temas.map((tema) => (
          <Box m={2}>
            <Card variant="outlined" className="tio">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {tema.nome}
                </Typography>
                <Typography variant="h5" component="h2">
                  {tema.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>
                  <Link
                    to={`/formularioTema/${tema.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        className="button-entrar"
                        size="small"
                        color="primary"
                      >
                        <Typography className="fonte">Editar</Typography>
                      </Button>
                    </Box>
                  </Link>
                  <Link
                    to={`/deletarTema/${tema.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button variant="contained" size="small" className="button-deletar">
                        <Typography className="fonte">Deletar</Typography>
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Grid>
      <Grid item sm={2}></Grid>
    </Grid>
  );
}

export default ListaTema;
