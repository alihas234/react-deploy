import { Container, Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const AllNewsMain = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/allNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
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
          সকল সংবাদ
        </Typography>
      </Box>

      {/* Cards */}

      <Container>
        <Box sx={{ mt: "30px" }}>
          {news.length ? (
            <Grid
              container
              spacing={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {news.map(
                ({
                  _id,
                  image,
                  newsCategory,
                  newsTitle,
                  newsContent,
                  date,
                  time,
                }) => (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    key={_id}
                    onClick={() => navigate(`/news/${_id}`)}
                  >
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
                        <CardActionArea
                          sx={{ display: "flex", borderRadius: "10px" }}
                        >
                          <Grid
                            container
                            spacing={1}
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <Grid item xs={12} sm={12} md={12} lg={5}>
                              <CardMedia
                                component="img"
                                sx={{ width: "315px", height: "180px" }}
                                image={image}
                                alt=""
                              />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={7}>
                              <CardContent>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    backgroundColor: `#09754B`,
                                    p: "5px 10px",
                                    display: "inline-block",
                                    color: "#fff",
                                    fontWeight: "bold",
                                    mb: "10px",
                                  }}
                                >
                                  {newsCategory}
                                </Typography>
                                <Typography
                                  variant="h6"
                                  sx={{
                                    fontWeight: "bold",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    color: "#999999",
                                    mb: "10px",
                                  }}
                                >
                                  <span style={{ fontSize: "12px" }}>
                                    {date}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      marginLeft: "50px",
                                    }}
                                  >
                                    {" "}
                                    <AccessTimeIcon
                                      sx={{ fontSize: "16px" }}
                                    />{" "}
                                    {time}
                                  </span>
                                </Typography>{" "}
                                <Typography
                                  gutterBottom
                                  variant="body1"
                                  component="div"
                                  className="allNewsTitle"
                                >
                                  {newsTitle}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  sx={{ color: "#999999", mt: "20px" }}
                                  className="CardNewsDetails"
                                >
                                  {newsContent}
                                </Typography>
                              </CardContent>
                            </Grid>
                          </Grid>
                        </CardActionArea>
                      </Box>
                    </HashLink>
                  </Grid>
                )
              )}
            </Grid>
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardActionArea
                  sx={{ display: "flex", pl: "20px", borderRadius: "10px" }}
                >
                  <Skeleton
                    variant="rectangular"
                    sx={{ width: "315px", height: "180px" }}
                  />
                  <CardContent>
                    <Skeleton sx={{ width: "25%", height: "45px" }} />
                    <Skeleton sx={{ width: "400px", height: "25px" }} />
                    <Skeleton sx={{ width: "400px", height: "50px" }} />
                    <Skeleton sx={{ width: "400px", height: "80px" }} />
                  </CardContent>
                </CardActionArea>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardActionArea
                  sx={{ display: "flex", pl: "20px", borderRadius: "10px" }}
                >
                  <Skeleton
                    variant="rectangular"
                    sx={{ width: "315px", height: "180px" }}
                  />
                  <CardContent>
                    <Skeleton sx={{ width: "25%", height: "45px" }} />
                    <Skeleton sx={{ width: "400px", height: "25px" }} />
                    <Skeleton sx={{ width: "400px", height: "50px" }} />
                    <Skeleton sx={{ width: "400px", height: "80px" }} />
                  </CardContent>
                </CardActionArea>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardActionArea
                  sx={{ display: "flex", pl: "20px", borderRadius: "10px" }}
                >
                  <Skeleton
                    variant="rectangular"
                    sx={{ width: "315px", height: "180px" }}
                  />
                  <CardContent>
                    <Skeleton sx={{ width: "25%", height: "45px" }} />
                    <Skeleton sx={{ width: "400px", height: "25px" }} />
                    <Skeleton sx={{ width: "400px", height: "50px" }} />
                    <Skeleton sx={{ width: "400px", height: "80px" }} />
                  </CardContent>
                </CardActionArea>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardActionArea
                  sx={{ display: "flex", pl: "20px", borderRadius: "10px" }}
                >
                  <Skeleton
                    variant="rectangular"
                    sx={{ width: "315px", height: "180px" }}
                  />
                  <CardContent>
                    <Skeleton sx={{ width: "25%", height: "45px" }} />
                    <Skeleton sx={{ width: "400px", height: "25px" }} />
                    <Skeleton sx={{ width: "400px", height: "50px" }} />
                    <Skeleton sx={{ width: "400px", height: "80px" }} />
                  </CardContent>
                </CardActionArea>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardActionArea
                  sx={{ display: "flex", pl: "20px", borderRadius: "10px" }}
                >
                  <Skeleton
                    variant="rectangular"
                    sx={{ width: "315px", height: "180px" }}
                  />
                  <CardContent>
                    <Skeleton sx={{ width: "25%", height: "45px" }} />
                    <Skeleton sx={{ width: "400px", height: "25px" }} />
                    <Skeleton sx={{ width: "400px", height: "50px" }} />
                    <Skeleton sx={{ width: "400px", height: "80px" }} />
                  </CardContent>
                </CardActionArea>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardActionArea
                  sx={{ display: "flex", pl: "20px", borderRadius: "10px" }}
                >
                  <Skeleton
                    variant="rectangular"
                    sx={{ width: "315px", height: "180px" }}
                  />
                  <CardContent>
                    <Skeleton sx={{ width: "25%", height: "45px" }} />
                    <Skeleton sx={{ width: "400px", height: "25px" }} />
                    <Skeleton sx={{ width: "400px", height: "50px" }} />
                    <Skeleton sx={{ width: "400px", height: "80px" }} />
                  </CardContent>
                </CardActionArea>
              </Grid>
            </Grid>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default AllNewsMain;
