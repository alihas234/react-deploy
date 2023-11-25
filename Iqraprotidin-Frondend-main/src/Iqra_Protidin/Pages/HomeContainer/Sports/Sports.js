import { Card, Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Sports = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/sportsNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <Box sx={{ my: "25px" }}>
      {/* Title */}
      <Box sx={{ borderBottom: "4px solid #F3103E" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#F3103E",
            display: "inline-block",
            padding: "2px 20px",
            paddingRight: "80px",
            paddingTop: "7px",
            clipPath: "polygon(0 0, 70% 0, 100% 100%, 0% 100%)",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          খেলাধুলা
        </Typography>
      </Box>

      {/* Cards */}

      <Box sx={{ mt: "30px" }}>
        {news.length ? (
          <Grid container spacing={2}>
            {news.map(({ _id, image, newsTitle, date, time }) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={6}
                key={_id}
                onClick={() => navigate(`/news/${_id}`)}
              >
                {" "}
                <HashLink
                  to="#"
                  style={{ textDecoration: "none", color: "#212529" }}
                >
                  <Card
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
                        component="img"
                        height="210"
                        image={image}
                        alt=""
                      />
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

                          <span
                            style={{
                              fontSize: "12px",
                              marginLeft: "50px",
                            }}
                          >
                            <AccessTimeIcon
                              sx={{
                                fontSize: "16px",
                                mr: "5px",
                              }}
                            />
                            <span>{time}</span>
                          </span>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </HashLink>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={3} sx={{ mt: "30px" }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: "190px" }}
              />
              <Skeleton height="50px" />
              <Skeleton width="60%" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: "190px" }}
              />
              <Skeleton height="50px" />
              <Skeleton width="60%" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: "190px" }}
              />
              <Skeleton height="50px" />
              <Skeleton width="60%" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: "190px" }}
              />
              <Skeleton height="50px" />
              <Skeleton width="60%" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: "190px" }}
              />
              <Skeleton height="50px" />
              <Skeleton width="60%" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: "190px" }}
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

export default Sports;
