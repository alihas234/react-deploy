import { Button, Container, Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SidePanel from "../HomeContainer/SidePanel/SidePanel";
import "./NewsDetails.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CategoryIcon from "@mui/icons-material/Category";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import RelatedNews from "../HomeContainer/RelatedNews/RelatedNews";
import { useParams } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { Helmet } from "react-helmet";

const NewsDetails = () => {
  const { uniqueID } = useParams();
  const [matchNews, setMatchNews] = useState([]);
  const url = window.location.href;

  useEffect(() => {
    fetch(`https://server.eiqraprotidin.com/news/${uniqueID}`)
      .then((result) => result.json())
      .then((data) => setMatchNews(data));
  }, [uniqueID]);

  return (
    <Box sx={{ mt: "60px" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            {matchNews.length ? (
              <Box>
                {matchNews.map(
                  ({
                    _id,
                    image,
                    newsTitle,
                    newsCategory,
                    newsLocation,
                    newsContent,
                    date,
                    time,
                  }) => (
                    <Box key={_id}>
                      <Box sx={{ mt: "15px" }}>
                        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                          {newsTitle}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            backgroundColor: "#007B9E",
                            display: "inline-block",
                            color: "#fff",
                            p: "5px 15px",
                            pr: "20px",
                            mt: "20px",
                          }}
                        >
                          <span>
                            {" "}
                            <LocationOnIcon sx={{ fontSize: "20px" }} />{" "}
                            {newsLocation}
                          </span>
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            backgroundColor: "#08794C",
                            display: "inline-block",
                            color: "#fff",
                            p: "5px 25px",
                            pr: "25px",
                            mt: "20px",
                            ml: "20px",
                          }}
                        >
                          <span>
                            {" "}
                            <CategoryIcon sx={{ fontSize: "20px" }} />{" "}
                            {newsCategory}
                          </span>
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: "#999999",
                            mt: "20px",
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
                            <AccessTimeIcon sx={{ fontSize: "16px" }} /> {time}
                          </span>
                        </Typography>
                      </Box>
                      <Box sx={{ mt: "20px" }}>
                        <img width="100%" src={image} alt="" />
                      </Box>
                      <Box sx={{ mt: "20px" }}>
                        <Typography variant="h6">{newsContent}</Typography>
                      </Box>
                      <hr style={{ marginTop: "30px" }} />
                      <Box sx={{ textAlign: "center" }}>
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              mb: "20px",
                            }}
                          >
                            <Typography
                              variant="h5"
                              sx={{ fontWeight: "bold" }}
                            >
                              <span
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <ShareRoundedIcon sx={{ mr: "5px" }} />{" "}
                                <span>Share</span>
                              </span>
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-around",
                            }}
                          >
                            <Helmet>
                              {/* General tags */}
                              <title>{newsTitle}</title>
                              <meta property="og:image" content={image} />
                              {/* <meta property="og:url" content={url} /> */}
                              <meta
                                name="fb:app_id"
                                content="617144390234776"
                              />
                              <meta name="description" content={newsContent} />

                              {/* Twitter Card tags
                              <meta
                                name="twitter:title"
                                content={newsTitle || ""}
                              />
                              <meta
                                name="twitter:description"
                                content={newsContent || ""}
                              />
                              <meta
                                name="twitter:image:src"
                                content={image || ""}
                              />
                              <meta name="twitter:card" content="summary" /> */}
                            </Helmet>
                            <FacebookShareButton
                              url={url}
                              quote={"Nice"}
                              hashtag="#news"
                              style={{ border: "none", background: "none" }}
                              // {...{
                              //   og: {
                              //     title: newsTitle,
                              //     description: newsContent,
                              //     image: {
                              //       url: image,
                              //       width: 500,
                              //       height: 300,
                              //     },
                              //   },
                              // }}
                              onClick={console.log(
                                url,
                                newsTitle,
                                newsContent,
                                image
                              )}
                            >
                              <Button
                                variant="contained"
                                sx={{
                                  textTransform: "unset",
                                  backgroundColor: "#124E6C",
                                  "&:hover": {
                                    backgroundColor: "#087aea",
                                    transform: "scale(1.1)",
                                  },
                                }}
                              >
                                <i className="fab fa-facebook me-2 fs-4"></i>{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  Facebook
                                </span>
                              </Button>
                            </FacebookShareButton>
                            <TwitterShareButton
                              url={url}
                              title={newsTitle}
                              style={{
                                border: "none",
                                background: "none",
                              }}
                            >
                              <Button
                                variant="contained"
                                sx={{
                                  textTransform: "unset",
                                  backgroundColor: "#124E6C",
                                  "&:hover": {
                                    backgroundColor: "rgb(11, 181, 248)",
                                    transform: "scale(1.1)",
                                  },
                                }}
                              >
                                <i className="fab fa-twitter me-2 fs-4"></i>{" "}
                                <span style={{ fontWeight: "bold" }}>
                                  Twitter
                                </span>
                              </Button>
                            </TwitterShareButton>
                          </Box>
                        </Box>
                      </Box>
                      <hr style={{ marginTop: "30px" }} />
                    </Box>
                  )
                )}
              </Box>
            ) : (
              <Box>
                <Skeleton sx={{ width: "100%", height: "10px", py: "70px" }} />
                <Box sx={{ display: "flex" }}>
                  <Skeleton
                    sx={{
                      width: "20%",
                      height: "10px",
                      py: "30px",
                      mr: "25px",
                    }}
                  />
                  <Skeleton sx={{ width: "20%", height: "10px", py: "30px" }} />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Skeleton
                    sx={{
                      width: "20%",
                      height: "10px",
                      py: "30px",
                      mr: "25px",
                    }}
                  />
                  <Skeleton sx={{ width: "20%", height: "10px", py: "30px" }} />
                </Box>
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "100%", height: "440px" }}
                />
                <Box sx={{ mt: "30px" }}>
                  <Skeleton
                    sx={{ width: "100%", height: "10px", py: "35px" }}
                  />
                  <Skeleton
                    sx={{ width: "100%", height: "10px", py: "35px" }}
                  />
                  <Skeleton
                    sx={{ width: "100%", height: "10px", py: "35px" }}
                  />
                  <Skeleton
                    sx={{ width: "100%", height: "10px", py: "35px" }}
                  />
                  <Skeleton
                    sx={{ width: "100%", height: "10px", py: "35px" }}
                  />
                  <Skeleton
                    sx={{ width: "100%", height: "10px", py: "35px" }}
                  />
                  <Skeleton
                    sx={{ width: "100%", height: "10px", py: "35px" }}
                  />
                  <Skeleton sx={{ width: "75%", height: "10px", py: "35px" }} />
                </Box>
              </Box>
            )}

            <Box sx={{ marginTop: "50px" }}>
              <RelatedNews />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <Box sx={{ mt: "20px" }}>
              {" "}
              <SidePanel />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsDetails;
