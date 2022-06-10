import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";
import { busca, post } from "../../../services/Service";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import "./ListaPostagem.css";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/userReducer";
import { toast } from "react-toastify";

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([]);
  let navigate = useNavigate();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  // formatar data
  const date = new Date();
  new Intl.DateTimeFormat("pt-BR").format(date);

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado!", {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getPost();
  }, [posts.length]);

  return (
    <>
      {posts.map((post) => (
        <Box m={2} flexDirection="row">
          <Card variant="outlined" className="caixa">
            <CardContent>
              <div className="a-direita">
                <div>
                  <Typography variant="h5" component="h2">
                    {post.titulo}
                  </Typography>

                  <Typography variant="body2" component="p">
                    {post.texto}
                  </Typography>
                </div>
                <div>
                  <Typography variant="h6" component="p">
                    {post.tema?.nome}
                  </Typography>
                  <Typography align="right" variant="body2" component="p">
                    {/* formata a data para pt-BR e escreve as iniciais */}
                    {Intl.DateTimeFormat("pt-BR").format(Date.parse(post.data))}
                  </Typography>
                </div>
              </div>

              <div className="div-imagem">
                {
                  // se a imagem estiver vazio, não mostra nada
                  post.imagem == "" ? (
                    <></>
                  ) : (
                    <img
                      className="foto-post"
                      src={post.imagem}
                      alt={post.titulo}
                    />
                  )
                }
              </div>

              <Typography variant="body2" component="p" className="bairro">
                {post.bairro}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioPostagem/${post.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarPostagem/${post.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaPostagem;
