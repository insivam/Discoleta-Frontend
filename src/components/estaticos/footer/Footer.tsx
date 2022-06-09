import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token !== "") {
    footerComponent = (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12}>
          <Box className="box1">
            <Box
              paddingTop={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className="textos"
              >
                Siga-nos nas redes sociais{" "}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://github.com/alinerasche">
                <img
                  src="https://i.imgur.com/dSnD5bF.png"
                  alt="Aline"
                  height="60"
                  width="60"
                />
              </a>
              <a href="https://github.com/DayanaTito">
                <img
                  src="https://i.imgur.com/dSnD5bF.png"
                  alt="Dayana"
                  height="60"
                  width="60"
                />
              </a>
              <a href="https://github.com/igorcanunes">
                <img
                  src="https://i.imgur.com/dSnD5bF.png"
                  alt="Igor"
                  height="60"
                  width="60"
                />
              </a>
              <a href="https://github.com/insivam">
                <img
                  src="https://i.imgur.com/dSnD5bF.png"
                  alt="Vitor"
                  height="60"
                  width="60"
                />
              </a>
              <a href="https://github.com/milenaFO">
                <img
                  src="https://i.imgur.com/dSnD5bF.png"
                  alt="Milena"
                  height="60"
                  width="60"
                />
              </a>
            </Box>
          </Box>
          <Box className="box2">
            <Box paddingTop={1}>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
                className="textos"
              >
                © 2022 Copyright:
              </Typography>
            </Box>
            <Box>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Discoleta"
              >
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  align="center"
                  className="textos"
                >
                  brasil.generation.org
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }
  return <>{footerComponent}</>;
}

export default Footer;
