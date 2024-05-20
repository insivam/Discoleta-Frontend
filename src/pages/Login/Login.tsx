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
      toast.error("Email ou Senha incorretos!", {
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
        style={{ minHeight: "100vh" }}
        className="grid-main"
      >
        <Grid
          xs={5}
          alignItems="center"
          className="background-grid-left"
          style={{ minHeight: "100vh" }}
        >
          <Box>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              style={{ fontWeight: "bold", color: "white" }}
            >
              Entrar no <span className="discoleta">Discoleta</span>
            </Typography>
            <form onSubmit={onSubmit}>
              <div className="caixa-label">
                <label>E-mail</label>
                <TextField
                  value={userLogin.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
                  id="usuario"
                  name="usuario"
                  margin="normal"
                  className="input"
                  variant="outlined"
                />
              </div>
              <div className="caixa-label">
                <label>Senha</label>
                <TextField
                  value={userLogin.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
                  id="senha"
                  variant="outlined"
                  name="senha"
                  margin="normal"
                  type="password"
                  className="input"
                />
              </div>

              <Box marginTop={2} textAlign="center">
                <Button
                  className="button-entrar"
                  type="submit"
                  variant="contained"
                >
                  Entrar
                </Button>
              </Box>
            </form>

            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  align="center"
                  className="fonte"
                >
                  <Link to="/cadastro" className="criar-conta">
                  Novo no <span className="discoleta">Discoleta</span>? Criar uma conta
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          xs={7}
          className="background-grid-left-cadastro"
        >
          <Box className="posicao-logo">
            <img
              src="https://i.imgur.com/kbjcVuu.jpg"
              alt="logo discoleta"
              width="60%"
              height="60%"
              className="animacao-logo-login"
            />
          </Box>
          <div className="triangulo-login"></div>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
