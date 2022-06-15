<<<<<<< HEAD
import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';


function Home(){
    return(
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Bem-vindo(a) ao Discoleta!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className="botao">Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://cdn.discordapp.com/attachments/961308831533637685/980836772365881395/DISCOLETA_-_LOGO.jpg" alt="" width="500px" height="500" />
                </Grid>
            </Grid>

        </>
    );
}
export default Home;
=======
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
>>>>>>> b0b6e2eb1ff17c45a8b9a97a0832f1793963fb30
