import { Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const IslamicLife = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/islamicLifeNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <Box sx={{ my: "15px" }}>
      {/* Title */}
      <Box sx={{ borderBottom: "4px solid #08794C" }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#08794C",
            display: "inline-block",
            padding: "2px 20px",
            paddingRight: "80px",
            paddingTop: "7px",
            clipPath: "polygon(0 0, 70% 0, 100% 100%, 0% 100%)",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          ইসলামী জীবন
        </Typography>
      </Box>

      {/* Cards */}
      <Box sx={{ mt: "30px" }}>
        {news.length ? (
          <Grid
            container
            spacing={2}
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
                lg={6}
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
                        transform: "scale(1.1)",
                        transition: "500ms",
                      },
                    }}
                  >
                    <CardActionArea
                      sx={{ display: "flex", pl: "20px", borderRadius: "10px" }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ width: "130px", height: "80px" }}
                        image={image}
                        alt="green iguana"
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
            <Grid item xs={12} sm={12} md={12} lg={6}>
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
            <Grid item xs={12} sm={12} md={12} lg={6}>
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
            <Grid item xs={12} sm={12} md={12} lg={6}>
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
            <Grid item xs={12} sm={12} md={12} lg={6}>
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
            <Grid item xs={12} sm={12} md={12} lg={6}>
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
            <Grid item xs={12} sm={12} md={12} lg={6}>
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

export default IslamicLife;
