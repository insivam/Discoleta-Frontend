import React, { ChangeEvent, useState, useEffect } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Service";
import { addId, addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";

import "./Login.css";

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  // Crie mais um State para pegar os dados retornados a API
  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    token: "",
  });

  useEffect(() => {
    if (token != "") {
      dispatch(addToken(token));
      navigate("/home");
    }
  }, [token]);

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (respUserLogin.token !== "") {
      // Verifica os dados pelo console (Opcional)
      console.log("Token: " + respUserLogin.token);
      console.log("ID: " + respUserLogin.id);

      // Guarda as informações dentro do Redux (Store)
      dispatch(addToken(respUserLogin.token));
      dispatch(addId(respUserLogin.id.toString())); // Faz uma conversão de Number para String
      navigate("/home");
    }
  }, [respUserLogin.token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await login(`/usuarios/logar`, userLogin, setRespUserLogin);
      toast.success("Usuário logado com sucesso!", {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    } catch (error) {
      toast.error("Dados do usuário inconsistente!", {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  }
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="teste1"
      >
        <Grid xs={6} alignItems="center" className="teste6">
          <Box paddingX={20} paddingY={20}>
            <form onSubmit={onSubmit}>
              <Typography
                variant="h5"
                gutterBottom
                color="textPrimary"
                component="h5"
                align="center"
                style={{ fontWeight: "bold" }}
              >
                Entrar no Discoleta
              </Typography>
              <TextField
                value={userLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="usuario"
                label="usuário"
                variant="outlined"
                name="usuario"
                margin="normal"
                fullWidth
              />

              <TextField
                value={userLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="senha"
                label="senha"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                fullWidth
              />
              <Box marginTop={2} textAlign="center">
                <Button
                  className="Signin"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Entrar
                </Button>
              </Box>
            </form>
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Novo no Discoleta?
                </Typography>
              </Box>
              <Box>
                <Link to="/cadastro" className="Signin">
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    align="center"
                    style={{ fontWeight: "bold" }}
                  >
                    Criar uma conta
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} alignItems="center" className="back">
          <div style={{ minHeight: "100vh" }} className="teste2">
            <Box>
              <img
                src="https://cdn.discordapp.com/attachments/961308831533637685/980836772365881395/DISCOLETA_-_LOGO.jpg"
                alt=""
                width="500px"
                height="500px"
                className="teste"
              />
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
