import React, { useEffect } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../store/tokens/userReducer";
import { toast } from "react-toastify";
import "./Home.css";
import ListaPostagem from "../../components/postagens/listapostagem/ListaPostagem";

function Home() {
  let navigate = useNavigate();
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

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
        className="caixa"
      >
        <div className="head-home">
          <Grid alignItems="center" justifyContent="flex-start" item>
            <Box className="container">
              <div className="caixa-discoleta-head">
                <Typography
                  variant="h3"
                  gutterBottom
                  className="fonte-home"
                  component="h3"
                  align="center"
                >
                  Bem-vindo(a) ao <span className="discoleta">Discoleta</span>!
                </Typography>
              </div>
              <div className="col">
                <img
                  src="https://media.discordapp.net/attachments/961308831533637685/986630887905034250/disco-1.png"
                  alt="Exemplo Discoleta"
                  className="img-home"
                />
              </div>
            </Box>
          </Grid>
        </div>
        <ListaPostagem />
      </Grid>
      <Grid item sm={2}>
        <div className="ads">
          <img
            width="99%"
            height="20%"
            src="https://scontent.fcgh8-1.fna.fbcdn.net/v/t1.18169-9/22195351_1687690544575426_330836445047812894_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=973b4a&_nc_ohc=FlmGSe3ZBgMAX9tPX7a&_nc_ht=scontent.fcgh8-1.fna&oh=00_AT8WCgUyOlcLdlea0CpYXbJRXffVVbMneif3-F-OQPvXgA&oe=62D163C3"
            className="anuncio1"
          />
          <img
            width="99%"
            height="20%"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/acb71756764347.59bb064d4bdf6.png"
            className="anuncio1"
          />
          <img
            width="99%"
            height="20%"
            src="https://media4.giphy.com/media/Yo2H7HmosQ12TXdwMt/giphy.gif?cid=ecf05e47wxn9e1teeu4byn043cfhxokhb7l1v0b1pa3j2p6r&rid=giphy.gif&ct=g"
            className="anuncio1"
          />
        </div>
      </Grid>
    </Grid>
  );
}
export default Home;
