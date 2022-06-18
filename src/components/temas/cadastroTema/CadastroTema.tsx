import { Button, Container, TextField, Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Tema from "../../../models/Tema";
import { buscaId, post, put } from "../../../services/Service";
import { UserState } from "../../../store/tokens/userReducer";
import "./CadastroTema.css";

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
      <form onSubmit={onSubmit} className="tamanho-input">
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
          className="fonte"
        >
          Formulário de cadastro tema
        </Typography>
        <label>Nome *</label>
        <input
          value={tema.nome}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
          id="nome"
          name="nome"
          placeholder="Digite o nome do tema"
          className="TextField2"
        ></input>
        <label>Descrição *</label>

        <input
          value={tema.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
          id="descricao"
          name="descricao"
          placeholder="Digite o texto da descrição"
          className="TextField2"
        ></input>
        <div className="espacamento-tema"></div>
        <Button type="submit" variant="contained" className="cor">
          <Typography className="fonte">Finalizar</Typography>
        </Button>
      </form>
    </Container>
  );
}

export default CadastroTema;
