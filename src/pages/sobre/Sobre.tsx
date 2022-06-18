import React, { useEffect } from "react";
import { Typography, Grid, Button, TextField } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./Sobre.css";
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../store/tokens/userReducer";

function Sobre() {
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

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
      >
        <Grid sm={12} className="img texto-responsivo">
          <Grid className="img2" sm={5}>
            <h1 className="sobre-meio">Sobre o Discoleta:</h1>
            <p className="sobre-texto-meio">
              Discoleta é uma Rede Social que facilita o descarte do lixo
              reciclável, conectando pessoas que se disponibilizam para uma rede
              que não tem fácil acesso a um ecoponto. Esse projeto foi baseado
              na ODS 11 - Cidades e Comunidades Sustentáveis (ONU). Pessoas
              maiores de 13 anos podem criar uma conta registrando um endereço
              de e-mail e nome de usuário.
            </p>
          </Grid>
          <img
            height={600}
            width={1000}
            src="https://cdn.discordapp.com/attachments/961308831533637685/987473351914180648/unknown.png"
            alt=""
          />
        </Grid>
        <Grid className="img agrid">
          <img
            src="https://media-exp2.licdn.com/dms/image/C4E03AQEWMbjeIZGOnw/profile-displayphoto-shrink_200_200/0/1624027279253?e=1660780800&v=beta&t=HSlzmvYQSPQMVP0nqB6hswx8ZU2LwYkA2vQYU_81I-w"
            alt="Aline"
            className="imgUser"
            justify-content="right"
          ></img>
          <p>
            Discoleta é uma Rede Social que facilita o descarte do lixo
            reciclável, conectando pessoas que se disponibilizam para uma rede
            que não tem fácil acesso a um ecoponto. Esse projeto foi baseado na
            ODS 11 - Cidades e Comunidades Sustentáveis (ONU). Pessoas maiores
            de 13 anos podem criar uma conta registrando um endereço de e-mail e
            nome de usuário3.
          </p>
        </Grid>
        <Grid className="img agrid">
          <p>
            Discoleta é uma Rede Social que facilita o descarte do lixo
            reciclável, conectando pessoas que se disponibilizam para uma rede
            que não tem fácil acesso a um ecoponto. Esse projeto foi baseado na
            ODS 11 - Cidades e Comunidades Sustentáveis (ONU). Pessoas maiores
            de 13 anos podem criar uma conta registrando um endereço de e-mail e
            nome de usuário2.
          </p>
          <img
            src="https://media-exp2.licdn.com/dms/image/C4D03AQGpEEWKiBofeg/profile-displayphoto-shrink_200_200/0/1645541636362?e=1660780800&v=beta&t=r48yUfADQcI7kUnq4ugx65AuJaIrXJ15MkKKfMMJL1U"
            alt="Day"
            className="imgUser"
            justify-content="right"
          ></img>
        </Grid>
        <Grid className="img agrid">
          <img
            src="https://media-exp2.licdn.com/dms/image/D5635AQFGvtvMbqY35A/profile-framedphoto-shrink_200_200/0/1650396708274?e=1656108000&v=beta&t=r0FNmid2BhDxBJWrZmcWtaHXrVBFOAdrrDQxjK0CcbQ"
            alt="Milena"
            className="imgUser"
            justify-content="right"
          ></img>
          <p>
            Discoleta é uma Rede Social que facilita o descarte do lixo
            reciclável, conectando pessoas que se disponibilizam para uma rede
            que não tem fácil acesso a um ecoponto. Esse projeto foi baseado na
            ODS 11 - Cidades e Comunidades Sustentáveis (ONU). Pessoas maiores
            de 13 anos podem criar uma conta registrando um endereço de e-mail e
            nome de usuárioaaaaaaaaaaa.
          </p>
        </Grid>
        <Grid className="img agrid">
          <p>
            Discoleta é uma Rede Social que facilita o descarte do lixo
            reciclável, conectando pessoas que se disponibilizam para uma rede
            que não tem fácil acesso a um ecoponto. Esse projeto foi baseado na
            ODS 11 - Cidades e Comunidades Sustentáveis (ONU). Pessoas maiores
            de 13 anos podem criar uma conta registrando um endereço de e-mail e
            nome de usuário.
          </p>

          <img
            src="https://media-exp2.licdn.com/dms/image/C4D03AQGpVN75f52c-g/profile-displayphoto-shrink_200_200/0/1650238530224?e=1660780800&v=beta&t=gQMHXGPCb2rgcx2jpN1NnWB8rZ8N2qnyQlAIUoRDnic"
            alt="Vitor"
            className="imgUser"
            justify-content="right"
          ></img>
        </Grid>
        <Grid className="img agrid">
          <img
            src="https://media-exp2.licdn.com/dms/image/C4D03AQFi7fpRqTB9OA/profile-displayphoto-shrink_200_200/0/1651755095839?e=1660780800&v=beta&t=w3pc2Ij3v2QmWE_tiW9p8r6GlC2nx95xaERSCyXfl1c"
            alt="Will"
            className="imgUser"
            justify-content="right"
          ></img>
          <p>
            Discoleta é uma Rede Social que facilita o descarte do lixo
            reciclável, conectando pessoas que se disponibilizam para uma rede
            que não tem fácil acesso a um ecoponto. Esse projeto foi baseado na
            ODS 11 - Cidades e Comunidades Sustentáveis (ONU). Pessoas maiores
            de 13 anos podem criar uma conta registrando um endereço de e-mail e
            nome de usuário.
          </p>
        </Grid>
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
                <Typography
                  variant="h4"
                  gutterBottom
                  color="textPrimary"
                  component="h4"
                  align="center"
                  className="textos2"
                >
                  Entre em contato com o{" "}
                  <span className="discoleta">Discoleta</span>:
                </Typography>
              </Typography>
              <label>Nome</label>
              <input
                id="nome"
                name="nome"
                placeholder="Digite seu nome"
                className="TextField2"
              />
              <label>E-mail</label>
              <input
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                className="TextField2"
              />
              <label>Assunto</label>
              <input
                id="Assunto"
                name="Assunto"
                placeholder="Digite seu assunto"
                className="TextField2"
              />
              <label>Mensagem </label>
              <textarea
                name="mensagem"
                placeholder="Digite sua mensagem!"
                id="mensagem"
                className="TextField2"
                cols={50}
                rows={10}
              />
              <Box marginTop={2} textAlign="center">
                <Button type="submit" variant="contained" className="cor">
                  <Typography className="fonte">Enviar</Typography>
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Sobre;
