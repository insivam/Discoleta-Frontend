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
                variant="h4"
                gutterBottom
                className="fonte-home"
                component="h5"
                align="center"
                
              >
                Bem-vindo(a) ao <span className="discoleta">Discoleta</span>!
              </Typography>
              </div>
              <div className="col">
                <p>Item 3</p>
              </div>
            </Box>
          </Grid>

          <Grid item xs={6} className="back">
            {/* <img
            src="https://cdn.discordapp.com/attachments/961308831533637685/980836772365881395/DISCOLETA_-_LOGO.jpg"
            alt=""
            width="500px"
            height="250px"
          /> */}
          </Grid>
        </div>
        <ListaPostagem />
      </Grid>
      <Grid item sm={2}></Grid>
    </Grid>
  );
}
export default Home;
