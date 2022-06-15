import React, { useEffect } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../store/tokens/userReducer";
import { toast } from "react-toastify";
import "./Home.css";
import ListaPostagem from "../../components/postagens/listapostagem/ListaPostagem";

function Home() {
  let navigate = useNavigate();
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
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);
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
        className="caixa"
      >
        <div className="head-home">
          <Grid alignItems="center" justifyContent="flex-start" item>
            <Box className="container">
              <div className="caixa-discoleta-head">
                <Typography
                  variant="h3"
                  gutterBottom
                  className="fonte-home"
                  component="h3"
                  align="center"
                >
                  Bem-vindo(a) ao <span className="discoleta">Discoleta</span>!
                </Typography>
              </div>
              <div className="col">
                <img
                  src="https://media.discordapp.net/attachments/961308831533637685/986630887905034250/disco-1.png"
                  alt="Exemplo Discoleta"
                  className="img-home"
                />
              </div>
            </Box>
          </Grid>
        </div>
        <ListaPostagem />
      </Grid>
      <Grid item sm={2}></Grid>
    </Grid>
  );
}
export default Home;
