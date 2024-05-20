import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./CadastroUsuario.css";
import { Box } from "@mui/system";
import { toast } from "react-toastify";

function CadastroUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");
  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      //Tenta executar o cadastro
      try {
        await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
        toast.success("Usuário cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 1400,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });

        //Caso tenha algo diferente do padrão solicitado ele mostra mensagem de erro
      } catch (error) {
        if (user.nome.length === 0 || user.usuario.length === 0) {
          //Mensagem personalizada de acordo com o erro
          toast.error("Campo em branco, preencha todos os campos!", {
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
    } else {
      if (user.senha.length <= 8) {
        toast.error("Insira no miníno 8 caracteres na senha.", {
          position: "top-right",
          autoClose: 1400,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      } else if (confirmarSenha !== user.senha) {
        toast.error("Senhas não conferem.", {
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
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      style={{ minHeight: "100vh" }}
      className="grid-main"
    >
      <Grid
        xs={7}
        justifyContent="flex-start"
        alignItems="center"
        className="background-grid-left-cadastro"
      >
        <Box className="posicao-logo">
          <img
            src="https://i.imgur.com/kbjcVuu.jpg"
            alt="logo discoleta"
            width="60%"
            height="60%"
            className="animacao-logo-cadastro"
          />
        </Box>
        <div className="triangulo"></div>
      </Grid>
      <Grid
        xs={5}
        className="background-grid-right"
        style={{ minHeight: "100vh" }}
      >
        <Box>
          <Typography
            variant="h5"
            gutterBottom
            component="h5"
            align="center"
            className="criar-conta"
          >
            Bem-vindo(a) ao <span className="discoleta">Discoleta</span>!
          </Typography>
          <form onSubmit={onSubmit}>
            <div className="caixa-label">
              <label>Nome</label>
              <TextField
                value={user.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="nome"
                variant="outlined"
                name="nome"
                margin="normal"
                className="input"
              />
            </div>
            <div className="caixa-label">
              <label>E-mail</label>
              <TextField
                value={user.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="usuario"
                variant="outlined"
                name="usuario"
                margin="normal"
                type="email"
                className="input"
              />
            </div>
            <div className="caixa-label">
              <label>Foto</label>
              <TextField
                value={user.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="foto"
                variant="outlined"
                name="foto"
                margin="normal"
                className="input"
              />
            </div>
            <div className="caixa-label">
              <label>Senha</label>
              <TextField
                value={user.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                id="senha"
                className="input"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
              />
            </div>
            <div className="caixa-label">
              <label className="label-senha">Confirmar senha</label>

              <TextField
                value={confirmarSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  confirmarSenhaHandle(e)
                }
                id="confirmarSenha"
                variant="outlined"
                name="confirmarSenha"
                margin="normal"
                type="password"
                className="input"
              />
            </div>
            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button variant="contained" className="btnCancelar">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                variant="contained"
                className="btnCadatre-se"
              >
                Cadastre-se
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
