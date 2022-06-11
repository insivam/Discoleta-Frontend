<<<<<<< HEAD
<<<<<<< HEAD
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Login.css";

function Login() {
=======
import { Button, Grid, TextField, Typography } from "@material-ui/core";
=======
>>>>>>> 2b71c09f5029d802414004d40c1da6b38f3f8497
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
>>>>>>> b0b6e2eb1ff17c45a8b9a97a0832f1793963fb30
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
<<<<<<< HEAD
      >
        <Grid xs={6} alignItems="center">
          <Box paddingX={20} paddingY={20}>
            <form>
=======
        className="teste1"
      >
        <Grid xs={6} alignItems="center" className="teste6">
          <Box paddingX={20} paddingY={20}>
            <form onSubmit={onSubmit}>
>>>>>>> b0b6e2eb1ff17c45a8b9a97a0832f1793963fb30
              <Typography
                variant="h5"
                gutterBottom
                color="textPrimary"
                component="h5"
                align="center"
                style={{ fontWeight: "bold" }}
              >
<<<<<<< HEAD
                Sign in to Discoleta
              </Typography>
              <TextField
                id="usuario"
                label="E-mail"
=======
                Entrar no Discoleta
              </Typography>
              <TextField
                value={userLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="usuario"
                label="usuário"
>>>>>>> b0b6e2eb1ff17c45a8b9a97a0832f1793963fb30
                variant="outlined"
                name="usuario"
                margin="normal"
                fullWidth
              />
<<<<<<< HEAD
              <TextField
                id="senha"
                label="Password"
=======

              <TextField
                value={userLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="senha"
                label="senha"
>>>>>>> b0b6e2eb1ff17c45a8b9a97a0832f1793963fb30
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                fullWidth
              />
              <Box marginTop={2} textAlign="center">
<<<<<<< HEAD
                <Link to="/home" className="Signin">
                  <Button className="Signin" type="submit" variant="contained" color="primary">
                    Sign in
                  </Button>
                </Link>
=======
                <Button
                  className="Signin"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Entrar
                </Button>
>>>>>>> b0b6e2eb1ff17c45a8b9a97a0832f1793963fb30
              </Box>
            </form>
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">
<<<<<<< HEAD
                New to Discoleta?
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
                Create an account
              </Typography>
              </Link>

=======
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
>>>>>>> b0b6e2eb1ff17c45a8b9a97a0832f1793963fb30
              </Box>
            </Box>
          </Box>
        </Grid>
<<<<<<< HEAD
        <Grid xs={6} alignItems="center" className="back" >
        <div style={{ minHeight: "100vh" }}>
            <h1 className="teste">
                TESTE
            </h1>

        </div>
       
        </Grid>
       
=======
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
>>>>>>> b0b6e2eb1ff17c45a8b9a97a0832f1793963fb30
      </Grid>
    </>
  );
}

<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> b0b6e2eb1ff17c45a8b9a97a0832f1793963fb30
