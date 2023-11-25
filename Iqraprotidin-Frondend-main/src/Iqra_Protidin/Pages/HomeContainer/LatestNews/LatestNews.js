import { Container, Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Carousel } from "react-bootstrap";
import "./LatestNews.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { HashLink } from "react-router-hash-link";

const LatestNews = () => {
  const navigate = useNavigate();

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/sliderNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <Container sx={{ mt: "80px", mb: "30px" }}>
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
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Box>
              <Carousel fade indicators={false} interval={5000}>
                {news.map(({ _id, image, newsTitle, date, time }) => (
                  <Carousel.Item
                    onClick={() => navigate(`/news/${_id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      className="latestNewsImage"
                      width="100%"
                      height="323px"
                      src={image}
                      alt=""
                    />
                    <Carousel.Caption style={{ textAlign: "start" }}>
                      <Typography
                        className="CardNewsTitle"
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                        }}
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
                          color: "#dddbdb",
                        }}
                      >
                        <span
                          style={{ fontSize: "12px", marginBottom: "-50px" }}
                        >
                          {date}
                        </span>

                        <span
                          style={{
                            fontSize: "12px",
                            marginLeft: "50px",
                            marginBottom: "-50px",
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
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Grid container spacing={2}>
              {news.map(({ _id, image, newsTitle }) => (
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  onClick={() => navigate(`/news/${_id}`)}
                >
                  {" "}
                  <HashLink
                    to="#"
                    style={{ textDecoration: "none", color: "#212529" }}
                  >
                    <Card
                      sx={{
                        border: "2px solid #f4f4f4",
                        transition: "500ms",
                        "&:hover": {
                          transform: "scale(1.05)",
                          transition: "500ms",
                        },
                      }}
                    >
                      <CardActionArea>
                        <img width="273px" height="150px" src={image} alt="" />
                        <CardContent sx={{ mt: "-77px" }}>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="CardNewsTitle"
                            sx={{
                              fontWeight: "bold",
                              color: "#fff",
                              filter:
                                "drop-shadow(0px 1px 0 #000) drop-shadow(-0px 0px 0 #000)drop-shadow(1px -0px 0 #000) drop-shadow(-1px -1px 0 #000)",
                            }}
                          >
                            {newsTitle}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </HashLink>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Skeleton
              variant="rectangular"
              sx={{ width: "100%", height: "320px" }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "100%", height: "150px" }}
                />
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "100%", height: "150px" }}
                />
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "100%", height: "150px" }}
                />
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "100%", height: "150px" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default LatestNews;
