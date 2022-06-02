import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { ChangeEvent, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { Box } from "@mui/material";

function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage("token");
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    usuario: "",
    senha: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }
  useEffect(() => {
    if (token != "") {
      navigate("/home");
    }
  }, [token]);
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await login(`/usuarios/logar`, userLogin, setToken);
      alert("Usuário logado com sucesso!");
    } catch (error) {
      alert("Dados do usuário inconsistentes. Erro ao logar");
    }
  }
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={6} alignItems="center">
          <Box paddingX={20} paddingY={20}>
            <form>
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
                id="usuario"
                label="E-mail"
                variant="outlined"
                name="usuario"
                margin="normal"
                fullWidth
              />
              <TextField
                id="senha"
                label="Password"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                fullWidth
              />
              <Box marginTop={2} textAlign="center">
                <Link to="/home" className="Signin">
                  <Button
                    className="Signin"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Entrar
                  </Button>
                </Link>
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
          <div style={{ minHeight: "100vh" }}>
            <h1 className="teste">TESTE</h1>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
