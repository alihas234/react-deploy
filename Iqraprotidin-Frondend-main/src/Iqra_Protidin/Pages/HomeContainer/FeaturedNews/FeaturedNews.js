import {
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const FeaturedNews = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/featuredNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <Box sx={{ mt: "20px" }}>
      <Box>
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            backgroundImage:
              "linear-gradient(to top, #008D7Fa2, #008D7Fa2), url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
            textAlign: "center",
            py: "3px",
            mb: "10px",
          }}
        >
          আলোচিত সংবাদ
        </Typography>
      </Box>

      {/* Cards */}

      <Box sx={{ mt: "30px" }}>
        {news.length ? (
          <Grid
            container
            spacing={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
                      sx={{ display: "flex", borderRadius: "10px" }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: "130px", height: "80px" }}
                        image={image}
                        alt=""
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="body1"
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
          <Grid container spacing={2}>
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
        )}
      </Box>
    </Box>
  );
};

export default FeaturedNews;
