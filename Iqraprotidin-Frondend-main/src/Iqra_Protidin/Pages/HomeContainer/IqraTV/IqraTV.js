import { Button, Grid, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const IqraTV = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/fiveYoutubeVideo")
      .then((result) => result.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <Box sx={{ mt: "20px" }}>
      <Box>
        <h4
          style={{
            color: "#fff",
            backgroundImage:
              "linear-gradient(to top, #08794ca2, #08794ca2), url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
            textAlign: "center",
            paddingTop: "3px",
            paddingBottom: "3px",
            marginBottom: "10px",
          }}
        >
          IQRA TV
        </h4>
      </Box>
      <Box>
        {videos.length ? (
          <Grid container spacing={1}>
            {videos.map(({ _id, youtubeEmbedURL }) => (
              <Grid item xs={12} sm={12} md={12} lg={12} key={_id}>
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

        <Box sx={{ my: "10px" }}>
          <HashLink
            to="/allVideos#"
            style={{ textDecoration: "none", color: "#212529" }}
          >
            <Button
              variant="outlined"
              sx={{
                width: "100%",
                textTransform: "initial",
                fontWeight: "bold",
              }}
            >
              See More {">>"}
            </Button>{" "}
          </HashLink>
        </Box>
      </Box>
    </Box>
  );
};

export default IqraTV;
