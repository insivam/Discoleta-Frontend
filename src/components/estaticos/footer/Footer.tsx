import { Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import "./Footer.css";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/userReducer";

function Footer() {
  const token = useSelector<UserState, UserState["tokens"]>(
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
        className="footer"
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
              <a href="https://github.com/alinerasche" target="_blank">
                <img
                  src="https://i.imgur.com/dSnD5bF.png"
                  alt="Aline"
                  height="70"
                  width="70"
                />
              </a>

              <a href="https://github.com/DayanaTito" target="_blank">
                <img
                  src="https://cdn.discordapp.com/attachments/961308831533637685/984525586179448872/Open_Peeps_-_Bust.png "
                  alt="Dayana"
                  height="70"
                  width="55"
                />
              </a>

              <a href="https://github.com/insivam" target="_blank">
                <img
                  src="https://i.imgur.com/TOOJuII.png"
                  alt="Vitor"
                  height="70"
                  width="70"
                />
              </a>

              <a href="https://github.com/milenaFO" target="_blank">
                <img
                  src="https://cdn.discordapp.com/attachments/961308831533637685/984532069021515847/Open_Peeps_-_Bust.png"
                  alt="Milena"
                  height="70"
                  width="60"
                />
              </a>

              <a href="https://github.com/willjpg" target="_blank">
                <img
                  src="https://i.imgur.com/KnDaMzC.png"
                  alt="Willian"
                  height="70"
                  width="70"
                />
              </a>
            </Box>
          </Box>
          <Box className="box2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Discoleta"
              className="eme"
            >
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
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  align="center"
                  className="textos"
                >
                  Discoleta
                </Typography>
              </Box>
            </a>
          </Box>
        </Grid>
      </Grid>
    );
  }
  return <>{footerComponent}</>;
}

export default Footer;
