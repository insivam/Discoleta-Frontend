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
                  src="https://i.imgur.com/2aXA5DT.png"
                  alt="Exemplo Discoleta"
                  className="img-home"
                />
              </div>
            </Box>
          </Grid>
        </div>
        <div className="tamanho-post">
          <ListaPostagem />
        </div>
      </Grid>
      <Grid item sm={2}>
        <div className="ads">
          <a href="https://www.poupamais.pt/pt/welcome" target="_blank">
          <img
            width="100%"
            height="20%"
            src="https://i.imgur.com/tN4mWze.png"
            className="anuncio1"
          /></a>
          <a href="https://www.behance.net/gallery/56764347/O-Recife-Que-Voce-Quer" target="_blank">
          <img
            width="100%"
            height="20%"
            src="https://i.imgur.com/uB013gK.png"
            className="anuncio1"
          />
          </a>
          <a href="https://www.ailos.coop.br/" target="_blank">
          <img
            width="100%"
            height="20%"
            src="https://media4.giphy.com/media/Yo2H7HmosQ12TXdwMt/giphy.gif"
            className="anuncio1"
          />
          </a>
        </div>
      </Grid>
    </Grid>
  );
}
export default Home;
