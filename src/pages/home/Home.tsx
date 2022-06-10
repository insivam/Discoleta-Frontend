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
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              className="titulo font"
              component="h3"
              align="center"
            >
              Bem-vindo(a) ao Discoleta!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button variant="outlined" className="botao">
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6} className="back">
          {/* <img
            src="https://cdn.discordapp.com/attachments/961308831533637685/980836772365881395/DISCOLETA_-_LOGO.jpg"
            alt=""
            width="500px"
            height="250px"
          /> */}
        </Grid>
      </Grid>
      <ListaPostagem />
    </>
  );
}
export default Home;
