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
          <Grid className="img2">
            <h1 className="sobre-meio">Sobre a Discoleta:</h1>
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
            width="100%"
            src="https://cdn.discordapp.com/attachments/961308831533637685/987473351914180648/unknown.png"
            alt=""
          />
        </Grid>

        <section className="team-section">
          <Grid className="container">
            <Box className="row">
              <div className="section-title">
                <h1>Nosso Time</h1>
                <p>Entre em contato com os nossos desenvolvedores</p>
              </div>
            </Box>
            <Grid className="row">
              <Box className="team-items">
                <Box className="item">
                  <img
                    src="https://media-exp2.licdn.com/dms/image/C4E03AQEWMbjeIZGOnw/profile-displayphoto-shrink_200_200/0/1624027279253?e=1660780800&v=beta&t=HSlzmvYQSPQMVP0nqB6hswx8ZU2LwYkA2vQYU_81I-w"
                    alt="team"
                  />
                  <div className="inner">
                    <div className="info">
                      <h5>Aline Rasche</h5>
                      <div className="social-links">
                        <a
                          href="https://www.linkedin.com/in/aline-rasche-180673189/"
                          target="_blank"
                        >
                          <span className="fa fa-linkedin"></span>
                        </a>
                        <a
                          href="https://github.com/alinerasche"
                          target="_blank"
                        >
                          <span className="fa fa-github"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Box>
                <Box className="item">
                  <img
                    src="https://media-exp2.licdn.com/dms/image/C4D03AQGpEEWKiBofeg/profile-displayphoto-shrink_200_200/0/1645541636362?e=1660780800&v=beta&t=r48yUfADQcI7kUnq4ugx65AuJaIrXJ15MkKKfMMJL1U"
                    alt="team"
                  />
                  <div className="inner">
                    <div className="info">
                      <h5>Dayana Tito</h5>
                      <div className="social-links">
                        <a
                          href="https://www.linkedin.com/in/dayanatito/"
                          target="_blank"
                        >
                          <span className="fa fa-linkedin"></span>
                        </a>
                        <a href="https://github.com/DayanaTito" target="_blank">
                          <span className="fa fa-github"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Box>
                <Box className="item">
                  <img src="https://i.imgur.com/RXc5FCi.jpg" alt="team" />
                  <div className="inner">
                    <div className="info">
                      <h5>Milena Fernandes</h5>
                      <div className="social-links">
                        <a
                          href="https://www.linkedin.com/in/milenafernandesdeoliveira/"
                          target="_blank"
                        >
                          <span className="fa fa-linkedin"></span>
                        </a>
                        <a href="https://github.com/milenaFO" target="_blank">
                          <span className="fa fa-github"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Box>
              </Box>
              <Box className="team-items">
                <Box className="item">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQFb-j8k13UepA/profile-displayphoto-shrink_200_200/0/1658120662894?e=1666224000&v=beta&t=Vl-La-fgVK5aKCzn02M_vDXOhlPqRrFhhr7bE_OZBaQ"
                    alt="team"
                  />
                  <div className="inner">
                    <div className="info">
                      <h5>Vitor Rodrigues</h5>
                      <div className="social-links">
                        <a
                          href="https://www.linkedin.com/in/vitor-edsr/"
                          target="_blank"
                        >
                          <span className="fa fa-linkedin"></span>
                        </a>
                        <a href="https://github.com/insivam" target="_blank">
                          <span className="fa fa-github"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Box>
                <Box className="item">
                  <img
                    src="https://media-exp2.licdn.com/dms/image/C4D03AQFi7fpRqTB9OA/profile-displayphoto-shrink_200_200/0/1651755095839?e=1660780800&v=beta&t=w3pc2Ij3v2QmWE_tiW9p8r6GlC2nx95xaERSCyXfl1c"
                    alt="team"
                  />
                  <div className="inner">
                    <div className="info">
                      <h5>Willian Ferreira</h5>
                      <div className="social-links">
                        <a
                          href="https://www.linkedin.com/in/willfdasilva/"
                          target="_blank"
                        >
                          <span className="fa fa-linkedin"></span>
                        </a>
                        <a href="https://github.com/willjpg" target="_blank">
                          <span className="fa fa-github"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </section>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center">
          <Box paddingX={10}>
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
                  Entre em contato com a{" "}
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
