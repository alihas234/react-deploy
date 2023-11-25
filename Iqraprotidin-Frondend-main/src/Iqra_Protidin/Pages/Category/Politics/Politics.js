import { Card, Container, Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./Politics.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Banner from "../../Shared/Banner/Banner";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Politics = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://server.eiqraprotidin.com/allNews")
      .then((result) => result.json())
      .then((data) => {
        setIsLoading(false);
        setNews(data);
      });
  }, []);

  const politics = news.filter((newses) => newses.newsCategory === "রাজনীতি");

  const [noCategory, setNoCategory] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setNoCategory(true);
    }, 10000);
  }, []);

  return (
    <Box sx={{ mt: "25px" }}>
      {/* Title */}
      <Box>
        <Banner pageName={"রাজনীতি"} />
      </Box>

      {/* Cards */}
      {isLoading && (
        <Box
          sx={{
            mt: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "999",
          }}
        >
          <img style={{}} src="https://i.ibb.co/YprYN4p/preloader.gif" alt="" />
        </Box>
      )}
      {politics.length ? (
        <Container sx={{ mt: "30px" }}>
          <Grid container spacing={3}>
            {politics.map(({ _id, image, newsTitle, date, time }) => (
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
        </Container>
      ) : (
        <Box>
          {noCategory && (
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                color: "gray",
                textAlign: "center",
                my: "40px",
              }}
            >
              No News In This Category
            </Typography>
          )}

          <Container sx={{ my: "30px" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "100%", height: "190px" }}
                />
                <Skeleton height="50px" />
                <Skeleton width="60%" />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "100%", height: "190px" }}
                />
                <Skeleton height="50px" />
                <Skeleton width="60%" />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "100%", height: "190px" }}
                />
                <Skeleton height="50px" />
                <Skeleton width="60%" />
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default Politics;
