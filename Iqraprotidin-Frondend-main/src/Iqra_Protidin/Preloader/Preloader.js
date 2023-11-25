import { Box, Grid } from "@mui/material";
import React from "react";

const Preloader = () => {
  return (
    <Box>
      <Box
        style={{
          height: "100vh",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "999999",
          overflowX: "hidden",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: "30px",
              }}
            >
              <img
                width="200px"
                className="animate__animated animate__slow animate__flip animate__infinite"
                src="https://i.ibb.co/LJg2xFn/UPDATED-LOGO-ai.png"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: "30px",
              }}
            >
              <img
                src="https://i.ibb.co/yW1dKHF/Vanilla-1-9s-286px.gif"
                alt=""
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: "30px",
              }}
            >
              <img src="https://i.ibb.co/bJnWmFY/Fountain.gif" alt="" />
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Preloader;
