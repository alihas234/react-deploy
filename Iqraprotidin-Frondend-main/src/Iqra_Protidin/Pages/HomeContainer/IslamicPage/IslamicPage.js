import {
  Card,
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

const IslamicPage = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/islamicPageNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <Box sx={{ mt: "10px" }} id="islamicPage">
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
            my: "10px",
          }}
        >
          ইসলামিক পাতা
        </Typography>
      </Box>

      <Box sx={{ my: "30px" }}>
        {news.length ? (
          <Grid container spacing={2}>
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
                        alt="green iguana"
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
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: "190px" }}
              />
              <Skeleton height="50px" />
              <Skeleton width="60%" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: "190px" }}
              />
              <Skeleton height="50px" />
              <Skeleton width="60%" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={12}>
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: "190px" }}
              />
              <Skeleton height="50px" />
              <Skeleton width="60%" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={12}>
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

export default IslamicPage;
