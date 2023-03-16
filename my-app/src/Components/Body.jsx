import { Grid, Container, Typography, Button } from "@mui/material";
import React from "react";

const Body = () => {
  return (
    <Grid mt="3%" pl="3%" pr="3%">
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            paddingTop: "3%",
          }}
        >
          <Grid
            md={6}
            xs={12}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography sx={{ fontSize: "35px" }}>See how your</Typography>
            <Typography sx={{ fontSize: "35px" }}>
              system stacks up -{" "}
            </Typography>
            <Typography sx={{ fontSize: "35px", color: "#50C878" }}>
              compare to millions
            </Typography>
            <Typography
              mt="5%"
              sx={{
                fontSize: "18px",
                textAlign: "start",
              }}
            >
              Novabench is a free benchmark program that tests your computer's
              performance .Testing your computer is easy and only takes a few
              minutes
            </Typography>
            <Button
              variant="contained"
              sx={{ marginTop: "5%", borderRadius: "18px", fontSize: "12px" }}
            >
              Download for free
            </Button>
            <Grid mt="3%" sx={{ display: "flex", gap: "5%" }}>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontFamily: "arial black",
                  color: "#838996",
                }}
              >
                Canon
              </Typography>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontFamily: "arial black",
                  color: "#838996",
                }}
              >
                IBM
              </Typography>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontFamily: "arial black",
                  color: "#838996",
                }}
              >
                NASA
              </Typography>
              <Typography
                sx={{
                  fontSize: "25px",
                  fontFamily: "arial black",
                  color: "#838996",
                }}
              >
                APPLE
              </Typography>
            </Grid>
          </Grid>
          <Grid md={6} xs={12}>
            <img
              width="80%"
              height="80%"
              src="https://png.pngtree.com/template/20191130/ourmid/pngtree-cook-tutorial-online-logo-template-designs-cook-education-logo-vector-illustration-image_337359.jpg"
              alt="Image"
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Body;
