import { AppBar, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import "./Header.css";
import Clock from "react-live-clock";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Header = () => {
  const [adsImage, setAds] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/manageAds")
      .then((result) => result.json())
      .then((data) => setAds(data?.[0]));
  }, []);

  const [logoImage, setLogo] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/manageLogo")
      .then((result) => result.json())
      .then((data) => setLogo(data?.[0]));
  }, []);
  return (
    <Box>
      <Box>
        {/* Logo And Advertisement */}
        <Container sx={{ my: "10px" }}>
          <Box>
            <Grid
              container
              spacing={0}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Logo  */}
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <img
                    className="logoAlign"
                    style={{
                      width: "90%",
                    }}
                    src={logoImage.websiteLogo}
                    alt=""
                  />
                </Link>
              </Grid>
              {/* Ads Images */}
              <Grid item xs={8} sm={8} md={8} lg={8}>
                <img width="100%" src={adsImage.adsNavbar} alt="" />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box sx={{ mx: "20px" }}>
        <AppBar
          position="static"
          sx={{
            background: "#276582",
            py: "5px",
            px: "10px",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
          }}
        >
          <Box
            className="navItemResUp"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                "&:hover": {
                  transform: "scale(1.3)",
                  cursor: "pointer",
                },
              }}
              onClick={() => window.location.reload()}
            >
              <Link
                to="/e-paper"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <HomeIcon sx={{ fontSize: "30px" }} />
              </Link>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                whiteSpace: "nowrap",
              }}
            >
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2" className="onlineHome">
              <a
                href="/"
                target="_blank"
                rel="noopener"
                style={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  display: "inline",
                  color: "#fff",
                  whiteSpace: "nowrap",
                }}
              >
                <span className="onlineLink">
                  <span>
                    <LanguageIcon
                      sx={{
                        fontSize: "25px",
                        mr: "5px",
                      }}
                    />{" "}
                  </span>
                  <span>অনলাইন ভার্সন</span>{" "}
                </span>
              </a>
            </Typography>
          </Box>
          <Container>
            <Box
              className="navItemRes"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {" "}
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": {
                      transform: "scale(1.3)",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => window.location.reload()}
                >
                  <Link
                    to="/e-paper"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <HomeIcon sx={{ fontSize: "35px" }} />
                  </Link>
                </Typography>
                <Typography variant="body2" className="onlineHome">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener"
                    style={{
                      fontWeight: "bold",
                      textDecoration: "none",
                      display: "inline",
                      color: "#fff",
                    }}
                  >
                    <span className="onlineLink">
                      <span>
                        <LanguageIcon
                          sx={{
                            fontSize: "25px",
                            marginLeft: "20px",
                            mr: "5px",
                          }}
                        />{" "}
                      </span>
                      <span>অনলাইন ভার্সন</span>{" "}
                    </span>
                  </a>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    ml: "50px",
                    fontSize: "17px",
                    color: "#fff",
                    px: "10px",
                    borderRadius: "2px",
                  }}
                >
                  <CalendarMonthIcon
                    sx={{
                      fontSize: "18px",
                      position: "absolute",
                      ml: "-20px",
                      mt: "3px",
                    }}
                  />{" "}
                  {new Date().toDateString()}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    ml: "50px",
                    fontSize: "17px",
                    color: "#fff",
                    px: "10px",
                    borderRadius: "2px",
                  }}
                >
                  <AccessTimeIcon
                    sx={{
                      fontSize: "18px",
                      position: "absolute",
                      ml: "-20px",
                      mt: "3px",
                    }}
                  />
                  <Clock format={"h:mm:ss A"} ticking={true} />
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  <a
                    href="https://www.facebook.com/iqraprotidin/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      marginLeft: "10px",
                      textDecoration: "none",
                      display: "inline",
                    }}
                  >
                    <img
                      src="https://img.icons8.com/color/35/000000/facebook-new.png"
                      alt=""
                    />
                  </a>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      marginLeft: "10px",
                      textDecoration: "none",
                      display: "inline",
                    }}
                  >
                    <img
                      src="https://img.icons8.com/fluency/35/000000/instagram-new.png"
                      alt=""
                    />
                  </a>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      marginLeft: "10px",
                      textDecoration: "none",
                      display: "inline",
                    }}
                  >
                    <img
                      src="https://img.icons8.com/fluency/35/000000/twitter.png"
                      alt=""
                    />
                  </a>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  <a
                    href="https://www.youtube.com/channel/UCYjpxLJR0pJqR_b7YdjoQWw"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      marginLeft: "10px",
                      textDecoration: "none",
                      display: "inline",
                    }}
                  >
                    <img
                      src="https://img.icons8.com/color/35/000000/youtube-play.png"
                      alt=""
                    />
                  </a>
                </Typography>
              </Box>
            </Box>
          </Container>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Header;
