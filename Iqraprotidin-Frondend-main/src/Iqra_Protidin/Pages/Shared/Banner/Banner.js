import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box, Container, Typography } from "@mui/material";
import "./Banner.css";

const Banner = ({ pageName }) => {
  return (
    <Box className="BannerContainer">
      <Box
        className="BannerContainer2"
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "end",
        }}
      >
        <Container sx={{ mb: "20px" }}>
          <Typography
            sx={{ color: "#fff", pb: "10px" }}
            className="bannerNames"
          >
            {pageName}
          </Typography>
          <Breadcrumbs
            aria-label="breadcrumb"
            style={{ color: "#fff", fontSize: "25px" }}
          >
            <Link
              underline="hover"
              color="inherit"
              href="/home"
              style={{ color: "#fff", cursor: "pointer" }}
            >
              প্রথম পাতা
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              style={{ color: "#fff", cursor: "pointer" }}
            >
              Category
            </Link>

            <Typography
              color="text.primary"
              style={{ color: "#fff", fontSize: "25px" }}
            >
              {pageName}
            </Typography>
          </Breadcrumbs>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
