import { Button, Container, TextField, Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Tema from "../../../models/Tema";
import { buscaId, post, put } from "../../../services/Service";
import { UserState } from "../../../store/tokens/userReducer";

function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: "",
    nome: "",
  });

  useEffect(() => {
    if (token === "") {
      toast.error("Você precisa estar logado para acessar essa página!", {
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

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    await buscaId(`/tema/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      console.log(tema);
      try {
        await put(`/tema`, tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        toast.success("Tema atualizado com sucesso!", {
          position: "top-right",
          autoClose: 1400,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      } catch (error) {
        console.log(`Error: ${error}`);
        toast.error("Erro, verifique a quantidade minima de caracteres!", {
          position: "top-right",
          autoClose: 1400,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      }
    } else {
      try {
        await post(`/tema`, tema, setTema, {
          headers: {
            Authorization: token,
          },
        });
        toast.success("Tema cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 1400,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      } catch (error) {
        console.log(`Error: ${error}`);
        toast.error("Erro, verifique a quantidade minima de caracteres!", {
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
    back();
  }

  function back() {
    navigate("/temas");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário de cadastro tema
        </Typography>
        <TextField
          value={tema.nome}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
          id="nome"
          label="nome"
          variant="outlined"
          name="nome"
          margin="normal"
          fullWidth
        />
        <TextField
          value={tema.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
          id="descricao"
          label="descricao"
          variant="outlined"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroTema;
