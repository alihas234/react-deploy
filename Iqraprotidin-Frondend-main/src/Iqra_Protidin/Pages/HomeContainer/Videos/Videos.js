import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import comingSoon from "./Coming_Soon.mp4";

const video = [
  {
    id: "1111",
    videoUrl: comingSoon,
    posterUrl: "https://i.ibb.co/LJg2xFn/UPDATED-LOGO-ai.png",
  },
];

const Videos = () => {
  return (
    <Box sx={{ mt: "20px" }}>
      <Box>
        <h4
          style={{
            color: "#fff",
            backgroundImage:
              "linear-gradient(to top, #1e262cd7, #1e262cec), url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
            textAlign: "center",
            paddingTop: "10px",
            paddingBottom: "5px",
            marginBottom: "10px",
            fontFamily: "'Galada', cursive",
          }}
        >
          ভিডিও সমূহ
        </h4>
      </Box>

      {/*  Videos */}

      <Box sx={{ mt: "20px" }}>
        <Grid container spacing={2}>
          {video.map(({ videoUrl, posterUrl }) => (
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box
                sx={{
                  textAlign: "start",
                  position: "absolute",
                  marginLeft: "5px",
                  marginTop: "10px",
                }}
              >
                <img
                  style={{ borderRadius: "5px" }}
                  width="35px"
                  src="https://i.ibb.co/Vw2FGJN/image-1.jpg"
                  alt=""
                />
              </Box>
              <video
                style={{ boxShadow: "1px 1px 10px #000", borderRadius: "10px" }}
                width="100%"
                height="215px"
                src={videoUrl}
                poster={posterUrl}
                controls
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Videos;
