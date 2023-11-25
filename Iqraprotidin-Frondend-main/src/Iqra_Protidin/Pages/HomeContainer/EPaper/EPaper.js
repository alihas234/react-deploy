import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const EPaper = () => {
  return (
    <Box sx={{ mt: "20px" }} id="ePaper">
      <a
        href="/e-paper"
        target="_blank"
        rel="noopener"
        style={{ textDecoration: "none" }}
      >
        {" "}
        <Box
          sx={{
            backgroundImage:
              "url('https://i.ibb.co/P91hh5K/news-icon-12-1.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "35px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              backgroundImage: "linear-gradient(to right, #478ee0b9, #478FE0)",
              textAlign: "center",
              py: "3px",
              mb: "10px",
            }}
          >
            ই-পেপার
          </Typography>
        </Box>
        <Box>
          <img
            width="100%"
            src="https://i.ibb.co/L193myq/screenshot-localhost-3000-2022-03-30-02-26-15.png"
            alt=""
          />
        </Box>
      </a>
    </Box>
  );
};

export default EPaper;
