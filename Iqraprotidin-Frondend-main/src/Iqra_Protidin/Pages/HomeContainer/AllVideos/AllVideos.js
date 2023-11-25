import { Container, Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const AllVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/allYoutubeVideo")
      .then((result) => result.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <Box sx={{ mt: "70px" }}>
      {/* Title */}
      <Box sx={{ borderBottom: "4px solid #DD3333" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#DD3333",
            display: "inline-block",
            padding: "2px 20px",
            paddingRight: "60px",
            paddingTop: "7px",
            clipPath: "polygon(0 0, 70% 0, 100% 100%, 0% 100%)",
            cursor: "pointer",
          }}
        >
          সকল ভিডিও
        </Typography>
      </Box>

      <Container sx={{ my: "50px" }}>
        {videos.length ? (
          <Grid container spacing={6}>
            {videos.map(({ _id, youtubeEmbedURL }) => (
              <Grid item xs={12} sm={12} md={6} lg={6} key={_id}>
                <iframe
                  style={{
                    boxShadow: "1px 1px 10px #000",
                    borderRadius: "5px",
                  }}
                  width="100%"
                  height="315"
                  src={youtubeEmbedURL}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "375px", height: "320px", borderRadius: "5px" }}
              />
              <img
                width="100px"
                style={{
                  position: "absolute",
                  marginLeft: "140px",
                  marginTop: "-210px",
                }}
                src="https://i.ibb.co/fNtChr2/video-play-icon-24.png"
                alt=""
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "375px", height: "320px", borderRadius: "5px" }}
              />
              <img
                width="100px"
                style={{
                  position: "absolute",
                  marginLeft: "140px",
                  marginTop: "-210px",
                }}
                src="https://i.ibb.co/fNtChr2/video-play-icon-24.png"
                alt=""
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "375px", height: "320px", borderRadius: "5px" }}
              />
              <img
                width="100px"
                style={{
                  position: "absolute",
                  marginLeft: "140px",
                  marginTop: "-210px",
                }}
                src="https://i.ibb.co/fNtChr2/video-play-icon-24.png"
                alt=""
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "375px", height: "320px", borderRadius: "5px" }}
              />
              <img
                width="100px"
                style={{
                  position: "absolute",
                  marginLeft: "140px",
                  marginTop: "-210px",
                }}
                src="https://i.ibb.co/fNtChr2/video-play-icon-24.png"
                alt=""
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "375px", height: "320px", borderRadius: "5px" }}
              />
              <img
                width="100px"
                style={{
                  position: "absolute",
                  marginLeft: "140px",
                  marginTop: "-210px",
                }}
                src="https://i.ibb.co/fNtChr2/video-play-icon-24.png"
                alt=""
              />
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default AllVideos;
