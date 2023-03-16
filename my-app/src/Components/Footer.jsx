import { Container, Grid, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";

export default () => {
  return (
    <Container maxWidth="lg">
      <Grid pl="3%" container>
        <Grid md={2} xs={12}>
          <img
            src="https://www.logogenie.net/download/preview/medium/9994693"
            width="100px"
          />
          <Typography sx={{ fontFamily: "arial black", fontSize: "19px" }}>
            Test in minutes
          </Typography>
          <Typography mt="5%" sx={{ width: "300px" }}>
            Testing your computer is easy and only takes a few minutes
          </Typography>
        </Grid>
        <Grid mr="5%" md={2}>
          <Divider orientation="vertical" variant="middle" />
        </Grid>
        <Grid md={2} xs={12}>
          <img
            src="https://www.logogenie.net/download/preview/medium/9994693"
            width="100px"
          />
          <Typography sx={{ fontFamily: "arial black", fontSize: "19px" }}>
            Compare
          </Typography>
          <Typography mt="5%" sx={{ width: "300px" }}>
            Compare your test result online to spot potential problems
          </Typography>
        </Grid>
        <Grid mr="5%" md={2}>
          <Divider orientation="vertical" variant="middle" />
        </Grid>
        <Grid md={2} xs={12}>
          <img
            src="https://www.logogenie.net/download/preview/medium/9994693"
            width="100px"
          />
          <Typography sx={{ fontFamily: "arial black", fontSize: "18px" }}>
            Optimize & Repair
          </Typography>
          <Typography mt="5%" sx={{ width: "300px" }}>
            Tune,upgrade , repair your computer based your results
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
