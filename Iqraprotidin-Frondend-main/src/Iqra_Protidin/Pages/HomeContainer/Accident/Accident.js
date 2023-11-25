import React, { useEffect, useState } from "react";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Accident = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/accidentNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <Box sx={{ my: "10px" }}>
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
            paddingRight: "50px",
            paddingTop: "7px",
            clipPath: "polygon(0 0, 70% 0, 100% 100%, 0% 100%)",
            cursor: "pointer",
          }}
        >
          দুর্ঘটনা
        </Typography>
      </Box>

      {/* Cards */}

      <Box sx={{ mt: "30px" }}>
        {news.length ? (
          <Grid container spacing={2}>
            {news.map(({ _id, image, newsTitle, newsContent, date, time }) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                key={_id}
                onClick={() => navigate(`/news/${_id}`)}
              >
                {" "}
                <HashLink
                  to="#"
                  style={{ textDecoration: "none", color: "#212529" }}
                >
                  <Box
                    sx={{
                      transition: "500ms",
                      "&:hover": {
                        transform: "scale(0.9)",
                        transition: "500ms",
                      },
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        sx={{
                          transition: "500ms",
                          "&:hover": {
                            transition: "500ms",
                            filter: "contrast(200%)",
                          },
                        }}
                        height="138px"
                        component="img"
                        image={image}
                        alt=""
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="body2"
                          component="div"
                          className="CardNewsTitle"
                        >
                          {newsTitle}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            color: "#999999",
                          }}
                        >
                          <span style={{ fontSize: "10px" }}>{date}</span>
                          <span
                            style={{
                              fontSize: "10px",
                              marginLeft: "50px",
                            }}
                          >
                            {" "}
                            <AccessTimeIcon sx={{ fontSize: "12px" }} /> {time}
                          </span>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Box>
                </HashLink>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: "130px" }}
              />
              <Skeleton height="50px" />
              <Skeleton width="60%" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: "130px" }}
              />
              <Skeleton height="50px" />
              <Skeleton width="60%" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: "130px" }}
              />
              <Skeleton height="50px" />
              <Skeleton width="60%" />
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Accident;
