import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Grid,
} from "@material-ui/core";
import "./CadastroPost.css";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../../models/Tema";
import Postagem from "../../../models/Postagem";
import { busca, buscaId, post, put } from "../../../services/Service";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/userReducer";
import { toast } from "react-toastify";

function CadastroPost() {
  let history = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Tema[]>([]);
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === "") {
      toast.error("Você precisa estar logado!", {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      history("/login");
    }
  }, [token]);

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
    nome: "",
  });
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    imagem: "",
    data: "",
    bairro: "",
    tema: null,
  });

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
    });
  }, [tema]);

  useEffect(() => {
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getTemas() {
    await busca("/tema", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id != undefined) {
      put(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Postagem atualizada com sucesso!", {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    } else {
      post(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Postagem cadastrada com sucesso!", {
        position: "top-right",
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
    back();
  }

  function back() {
    history("/home");
  }
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" className="fundoCP">
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
          className="fonte"
          
        >Formulário de cadastro postagem
          
        </Typography>
        
        <TextField
          value={postagem.titulo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="titulo"
          label="Título *"
          variant="outlined"
          name="titulo"
          margin="normal"
          fullWidth
          className="TextField"
        />
        <TextField
          value={postagem.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="texto"
          label="Texto *"
          name="texto"
          variant="outlined"
          margin="normal"
          fullWidth
          className="TextField"
        />

        <TextField
          value={postagem.imagem}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="imagem"
          label="Imagem"
          name="imagem"
          variant="outlined"
          margin="normal"
          fullWidth
          className="TextField"
        />

        <TextField
          value={postagem.bairro}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="bairro"
          label="Bairro *" 
          name="bairro"
          variant="outlined"
          margin="normal"
          fullWidth
          className="TextField"
        />

        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) =>
              buscaId(`/tema/${e.target.value}`, setTema, {
                headers: {
                  Authorization: token,
                },
              })
            }
          >
            {temas.map((tema) => (
              <MenuItem value={tema.id}>{tema.nome}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" 
          variant="contained" 
          className="cor">
            <Typography className="fonte">
              Finalizar
            </Typography>
          </Button>
        </FormControl>
      </form>
    </Container>
        </Grid>
  );
}
export default CadastroPost;