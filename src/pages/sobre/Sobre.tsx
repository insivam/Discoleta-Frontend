import React from "react";
import { Typography, Grid, Button, TextField } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Sobre.css";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";

function Sobre() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
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

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Sobre o Discoleta: </h1>;
        <p>
          Discoleta é uma Rede Social que facilita o descarte do lixo
          reciclável, conectando pessoas que se disponibilizam para uma rede que
          não tem fácil acesso a um ecoponto. Esse projeto foi baseado na ODS 11
          - Cidades e Comunidades Sustentáveis (ONU). Pessoas maiores de 13 anos
          podem criar uma conta registrando um endereço de e-mail e nome de
          usuário.
        </p>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center">
          <Box paddingX={20}>
            <form className="form">
              <Typography
                variant="h4"
                gutterBottom
                color="textPrimary"
                component="h4"
                align="center"
                className="textos1"
              >
                Entre em contato
              </Typography>
              <TextField
                id="nome"
                label="Nome"
                variant="outlined"
                name="nome"
                margin="normal"
              />
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                name="email"
                margin="normal"
              />
              <textarea
                name="assunto"
                placeholder="Assunto"
                id="assunto"
                cols={50}
                rows={10}
              />

              <Box marginTop={2} textAlign="center">
                <Button type="submit" variant="contained">
                  Enviar
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Sobre;
