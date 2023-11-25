import { Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./Politics.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Politics = () => {
  const navigate = useNavigate();
  const [singleNews, setSingleNews] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/politicsNewsSingle")
      .then((result) => result.json())
      .then((data) => setSingleNews(data));
  }, []);

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/politicsNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <Box sx={{ mt: "25px" }}>
      {/* Title */}
      <Box sx={{ borderBottom: "4px solid #D44CEF" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#D44CEF",
            display: "inline-block",
            padding: "2px 20px",
            paddingRight: "80px",
            paddingTop: "7px",
            clipPath: "polygon(0 0, 70% 0, 100% 100%, 0% 100%)",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          রাজনীতি
        </Typography>
      </Box>

      {/* Cards */}

      <Box sx={{ my: "30px" }}>
        {singleNews.length ? (
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Grid container spacing={1}>
                {singleNews.map(
                  ({ _id, image, newsTitle, newsContent, date, time }) => (
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
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
                              transform: "scale(1.05)",
                              transition: "500ms",
                            },
                          }}
                        >
                          <CardActionArea>
                            <CardMedia
                              sx={{ width: "375px", height: "213px" }}
                              component="img"
                              image={image}
                              alt=""
                            />
                            <CardContent>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: "bold",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                  color: "#999999",
                                  mt: "10px",
                                  mb: "20px",
                                }}
                              >
                                <span style={{ fontSize: "12px" }}>{date}</span>
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
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                                className="CardNewsTitle"
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
                          </CardActionArea>
                        </Box>
                      </HashLink>
                    </Grid>
                  )
                )}
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Grid container spacing={1}>
                {news.map(({ _id, image, newsTitle, date, time }) => (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
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
                        <CardActionArea
                          sx={{
                            display: "flex",
                            pl: "20px",
                            borderRadius: "10px",
                          }}
                        >
                          <img width="130px" height="80px" src={image} alt="" />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h6"
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
                              <span style={{ fontSize: "12px" }}>{date}</span>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Box>{" "}
                    </HashLink>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Grid container spacing={1}>
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "100%", height: "210px" }}
                />
                <Skeleton width="80%" sx={{ mt: "20px", height: "30px" }} />
                <Skeleton width="100%" sx={{ height: "80px" }} />
                <Skeleton width="100%" sx={{ height: "150px", mt: "-25px" }} />
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={6}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <CardActionArea
                    sx={{ display: "flex", pl: "20px", borderRadius: "10px" }}
                  >
                    <Skeleton
                      variant="rectangular"
                      sx={{ width: "130px", height: "80px" }}
                    />
                    <CardContent>
                      <Skeleton
                        variant="rectangular"
                        sx={{ width: "220px", height: "80px" }}
                      />
                    </CardContent>
                  </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <CardActionArea
                    sx={{ display: "flex", pl: "20px", borderRadius: "10px" }}
                  >
                    <Skeleton
                      variant="rectangular"
                      sx={{ width: "130px", height: "80px" }}
                    />
                    <CardContent>
                      <Skeleton
                        variant="rectangular"
                        sx={{ width: "220px", height: "80px" }}
                      />
                    </CardContent>
                  </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <CardActionArea
                    sx={{ display: "flex", pl: "20px", borderRadius: "10px" }}
                  >
                    <Skeleton
                      variant="rectangular"
                      sx={{ width: "130px", height: "80px" }}
                    />
                    <CardContent>
                      <Skeleton
                        variant="rectangular"
                        sx={{ width: "220px", height: "80px" }}
                      />
                    </CardContent>
                  </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <CardActionArea
                    sx={{ display: "flex", pl: "20px", borderRadius: "10px" }}
                  >
                    <Skeleton
                      variant="rectangular"
                      sx={{ width: "130px", height: "80px" }}
                    />
                    <CardContent>
                      <Skeleton
                        variant="rectangular"
                        sx={{ width: "220px", height: "80px" }}
                      />
                    </CardContent>
                  </CardActionArea>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Politics;
