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
  CardHeader,
  Avatar,
  IconButton,
} from "@material-ui/core";
import "./ListaPostagem.css";
import { useNavigate } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/userReducer";
import { toast } from "react-toastify";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@mui/icons-material/Edit";

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

  const sortedPosts = posts
    .slice()
    .sort((a, b) => Date.parse(b.data) - Date.parse(a.data));

  return (
    <>
      {sortedPosts.map((post) => (
        <Box m={2} flexDirection="row">
          <Card variant="outlined" className="caixa-lista">
            <CardContent>
              <div className="um-pra-cada-lado">
                <Typography variant="h5" component="h2">
                  {post.titulo}
                </Typography>

                <Typography variant="body2" component="p" className="bairro">
                  {post.bairro}
                </Typography>
              </div>

              <Typography variant="h6" component="p">
                {post.tema?.nome}
              </Typography>
              <Typography variant="body2" component="p">
                {post.texto}
              </Typography>

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
            </CardContent>
            <CardActions className="um-pra-cada-lado">
              <div>
                <Typography align="right" variant="body2" component="p">
                  {Intl.DateTimeFormat("pt-BR").format(Date.parse(post.data))}
                </Typography>
              </div>
              <div>
                <Box display="flex" justifyContent="end" mb={1.5}>
                  <Link
                    to={`/formularioPostagem/${post.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        className="button-entrar"
                        size="small"
                        color="primary"
                      >
                        <EditIcon>Editar</EditIcon>
                      </Button>
                    </Box>
                  </Link>
                  <Link
                    to={`/deletarPostagem/${post.id}`}
                    className="text-decorator-none"
                  >
                    <Box mx={1}>
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        className="button-deletar"
                      >
                        <DeleteIcon>deletar</DeleteIcon>
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </div>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaPostagem;
