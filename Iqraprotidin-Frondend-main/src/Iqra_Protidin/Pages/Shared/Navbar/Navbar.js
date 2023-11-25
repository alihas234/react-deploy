import { AppBar, Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import { HashLink } from "react-router-hash-link";
import RocketIcon from "@mui/icons-material/Rocket";
import Title from "../Title/Title";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import IconButton from "@mui/material/IconButton";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [scrollChange, setScrollChange] = useState(false);

  //  On Scroll Style Change Handler
  const onScrollHeader = () => {
    window.scrollY >= 5 ? setScrollChange(true) : setScrollChange(false);
  };
  window.addEventListener("scroll", onScrollHeader);

  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer2 = () => {
    setIsOpen((prevState) => !prevState);
  };

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
        {/* First Navbar */}
        <Box>
          <AppBar
            position="absolute"
            color="transparent"
            sx={{
              background: "#F4F4F4",
              py: "10px",
              px: "10px",
            }}
          >
            <Container>
              <Box
                className="navItemResUp"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    variant="body1"
                    className="onlineHome"
                    sx={{
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <a
                      className="ePaper"
                      href="/e-paper"
                      target="_blank"
                      rel="noopener"
                      style={{
                        fontWeight: "bold",
                        textDecoration: "none",
                        display: "inline",
                        color: "#380808",
                        fontSize: "25px",
                        fontFamily: "'Mina', sans-serif",
                      }}
                    >
                      <img
                        style={{ marginRight: "7px" }}
                        width="20px"
                        src="https://i.ibb.co/P91hh5K/news-icon-12-1.png"
                        alt=""
                      />
                      ই-পেপার
                    </a>
                  </Typography>
                </Box>
                <Box>
                  <IconButton
                    onClick={toggleDrawer("left", true)}
                    sx={{
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                  >
                    <MenuOpenIcon
                      sx={{ color: "#000", transform: "scale(1.4)" }}
                    />
                  </IconButton>
                </Box>
              </Box>
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
                    variant="body1"
                    className="onlineHome"
                    sx={{
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <a
                      className="ePaper"
                      href="/e-paper"
                      target="_blank"
                      rel="noopener"
                      style={{
                        marginLeft: "20px",
                        fontWeight: "bold",
                        textDecoration: "none",
                        display: "inline",
                        color: "#380808",
                        fontSize: "20px",
                        fontFamily: "'Mina', sans-serif",
                      }}
                    >
                      <img
                        style={{ marginRight: "7px" }}
                        width="20px"
                        src="https://i.ibb.co/P91hh5K/news-icon-12-1.png"
                        alt=""
                      />
                      ই-পেপার
                    </a>
                  </Typography>
                  <Typography
                    className="navbarLinks"
                    variant="body2"
                    sx={{
                      marginLeft: "20px",
                      fontWeight: "bold",
                      display: "inline",
                      fontSize: "11px",
                    }}
                  >
                    <LocationOnIcon sx={{ fontSize: "12px" }} />
                    নেত্রকোনা
                  </Typography>
                  <Typography
                    className="navbarLinks"
                    variant="body2"
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      fontSize: "11px",
                    }}
                  >
                    <CalendarMonthIcon sx={{ fontSize: "13px" }} />
                    <span style={{ marginLeft: "5px" }}>
                      {" "}
                      {new Date().toDateString()}
                    </span>
                  </Typography>
                  <Typography
                    className="navbarLinks"
                    variant="body2"
                    sx={{
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <HashLink
                      smooth
                      to="#ePaper"
                      style={{
                        fontWeight: "bold",
                        fontSize: "11px",
                        textDecoration: "none",
                        display: "inline",
                        color: "#000",
                      }}
                    >
                      আজকের পত্রিকা
                    </HashLink>
                  </Typography>
                  <Typography
                    className="navbarLinks"
                    variant="body2"
                    sx={{
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <a
                      href="https://bsbk.portal.gov.bd/apps/bangla-converter/index.html"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontWeight: "bold",
                        fontSize: "11px",
                        textDecoration: "none",
                        color: "#000",
                        display: "inline",
                      }}
                    >
                      ইউনিকোড কনভার্টার
                    </a>
                  </Typography>
                  <Typography
                    className="navbarLinks"
                    variant="body2"
                    sx={{
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <HashLink
                      smooth
                      to="#LiteraryPage"
                      style={{
                        fontWeight: "bold",
                        fontSize: "11px",
                        textDecoration: "none",
                        color: "#000",
                        display: "inline",
                      }}
                    >
                      হৃদকলমে সাহিত্য পাতা
                    </HashLink>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <HashLink
                      smooth
                      to="#islamicPage"
                      style={{
                        fontWeight: "bold",
                        fontSize: "11px",
                        textDecoration: "none",
                        color: "#000",
                        display: "inline",
                      }}
                    >
                      ইসলামিক পাতা
                    </HashLink>
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
                        src="https://img.icons8.com/color/20/000000/facebook-new.png"
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
                        src="https://img.icons8.com/fluency/20/000000/instagram-new.png"
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
                        src="https://img.icons8.com/fluency/20/000000/twitter.png"
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
                        src="https://img.icons8.com/color/20/000000/youtube-play.png"
                        alt=""
                      />
                    </a>
                  </Typography>
                </Box>
              </Box>
            </Container>
          </AppBar>

          {/* Logo And Advertisement */}
          <Container>
            <Box
              className="logoAddAlign"
              sx={{
                mt: "65px",
              }}
            >
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

        {/* Navbar Main*/}
        <Box>
          <Box>
            <AppBar
              position="fixed"
              color="transparent"
              sx={
                scrollChange
                  ? {
                      boxShadow: "1px 1px 5px #DD3333",
                      borderBottom: "2px solid #DD3333",
                      backgroundImage:
                        "linear-gradient(to bottom, #1e262cb6, #1e262cb6),url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
                      mt: "0px",
                    }
                  : {
                      boxShadow: "1px 1px 5px #DD3333",
                      borderBottom: "2px solid #DD3333",
                      backgroundImage:
                        "linear-gradient(to bottom, #1e262cb6, #1e262cb6),url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
                      mt: "170px",
                    }
              }
              className={
                scrollChange
                  ? "animate__animated animate__fadeInDown animate__faster"
                  : "animate__animated animate__bounceInDown animate__faster navbarMargin"
              }
            >
              <Box className="navItemResUp">
                <Box
                  className="logoAlign"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={scrollChange ? { display: "none" } : {}}>
                    <Link
                      to="/home"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      <Button
                        variant="text"
                        className="navbarMainButtons"
                        sx={{
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "#000",
                            color: "#fff",
                          },
                        }}
                      >
                        <HomeIcon sx={{ fontSize: "30px" }} />
                      </Button>
                    </Link>
                  </Box>
                  <Box sx={scrollChange ? {} : { display: "none" }}>
                    <Link
                      to="/home"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      <Button
                        variant="text"
                        className="navbarMainButtons"
                        sx={{
                          fontWeight: "600",
                          px: "20px",
                          py: "12px",
                          color: "#fff",
                          fontSize: "12px",
                          "&:hover": {
                            backgroundColor: "#000",
                            color: "#fff",
                          },
                        }}
                      >
                        <img
                          className="logoAlign"
                          style={{
                            width: "80px",
                            filter:
                              "drop-shadow(0px 0px 0 #fff) drop-shadow(-0px 1px 0 #ffffff)drop-shadow(1px -0px 0 #fff) drop-shadow(-1px -1px 0 #fff)",
                          }}
                          src="https://i.ibb.co/LJg2xFn/UPDATED-LOGO-ai.png"
                          alt=""
                        />
                      </Button>
                    </Link>
                  </Box>
                  <Box sx={{ mr: "25px" }}>
                    <IconButton
                      onClick={toggleDrawer2}
                      sx={{
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    >
                      {!isOpen ? (
                        <MenuOpenIcon
                          sx={{ color: "#fff", transform: "scale(1.4)" }}
                        />
                      ) : (
                        <CloseIcon
                          sx={{ color: "red", transform: "scale(1.9)" }}
                        />
                      )}
                    </IconButton>
                  </Box>
                </Box>
              </Box>
              {/* Navbar Buttons Link */}
              <Container className="logoAlign">
                <Box sx={{ flexGrow: 1 }} className="navItemRes">
                  <Link
                    to="/home"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    <Button
                      variant="text"
                      className="navbarMainButtons"
                      sx={{
                        fontWeight: "600",
                        px: "20px",
                        py: "12px",
                        color: "#fff",
                        fontSize: "12px",
                        "&:hover": {
                          backgroundColor: "#000",
                          color: "#fff",
                        },
                      }}
                    >
                      <HomeIcon
                        sx={{
                          fontSize: "21px",
                          mr: "5px",
                        }}
                      />{" "}
                      প্রথম পাতা
                    </Button>
                  </Link>
                  <Link
                    to="/category/national"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      className="navbarMainButtons"
                      variant="text"
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        px: "20px",
                        py: "12px",
                        fontSize: "12px",
                        "&:hover": {
                          backgroundColor: "#000",
                          color: "#fff",
                        },
                      }}
                    >
                      জাতীয়
                    </Button>
                  </Link>
                  <Link
                    to="/category/politics"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    <Button
                      className="navbarMainButtons"
                      variant="text"
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        px: "20px",
                        py: "12px",
                        fontSize: "12px",
                        "&:hover": {
                          backgroundColor: "#000",
                          color: "#fff",
                        },
                      }}
                    >
                      {" "}
                      রাজনীতি
                    </Button>
                  </Link>

                  <Link
                    to="/category/accident"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    <Button
                      className="navbarMainButtons"
                      variant="text"
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        px: "20px",
                        py: "12px",
                        fontSize: "12px",
                        "&:hover": {
                          backgroundColor: "#000",
                          color: "#fff",
                        },
                      }}
                    >
                      দুর্ঘটনা
                    </Button>
                  </Link>
                  <Link
                    to="category/entertainment"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      className="navbarMainButtons"
                      variant="text"
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        px: "20px",
                        py: "12px",
                        fontSize: "12px",
                        "&:hover": {
                          backgroundColor: "#000",
                          color: "#fff",
                        },
                      }}
                    >
                      {" "}
                      বিনোদন
                    </Button>
                  </Link>

                  <Link
                    to="category/education"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    <Button
                      className="navbarMainButtons"
                      variant="text"
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        px: "20px",
                        py: "12px",
                        fontSize: "12px",
                        "&:hover": {
                          backgroundColor: "#000",
                          color: "#fff",
                        },
                      }}
                    >
                      শিক্ষা
                    </Button>
                  </Link>
                  <Link
                    to="category/healthAndMedical"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    <Button
                      className="navbarMainButtons"
                      variant="text"
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        px: "20px",
                        py: "12px",
                        fontSize: "12px",
                        "&:hover": {
                          backgroundColor: "#000",
                          color: "#fff",
                        },
                      }}
                    >
                      স্বাস্থ্য ও চিকিৎসা
                    </Button>
                  </Link>
                  <Link
                    to="category/islamicLife"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    <Button
                      className="navbarMainButtons"
                      variant="text"
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        px: "20px",
                        py: "12px",
                        fontSize: "12px",
                        "&:hover": {
                          backgroundColor: "#000",
                          color: "#fff",
                        },
                      }}
                    >
                      ইসলামী জীবন
                    </Button>
                  </Link>
                  <Link
                    to="category/agriculture"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    <Button
                      className="navbarMainButtons"
                      variant="text"
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        px: "20px",
                        py: "12px",
                        fontSize: "12px",
                        "&:hover": {
                          backgroundColor: "#000",
                          color: "#fff",
                        },
                      }}
                    >
                      কৃষি
                    </Button>
                  </Link>
                  <Link
                    to="category/allOverCountry"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      className="navbarMainButtons"
                      variant="text"
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        px: "20px",
                        py: "12px",
                        fontSize: "12px",
                        "&:hover": {
                          backgroundColor: "#000",
                          color: "#fff",
                        },
                      }}
                    >
                      {" "}
                      সারাদেশ
                    </Button>
                  </Link>
                  <Link
                    to="category/sports"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    <Button
                      className="navbarMainButtons"
                      variant="text"
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        px: "20px",
                        py: "12px",
                        fontSize: "12px",
                        "&:hover": {
                          backgroundColor: "#000",
                          color: "#fff",
                        },
                      }}
                    >
                      খেলাধুলা
                    </Button>
                  </Link>
                  <Link
                    to="category/others"
                    style={{ color: "#fff", textDecoration: "none" }}
                  >
                    <Button
                      className="navbarMainButtons"
                      variant="text"
                      sx={{
                        color: "#fff",
                        fontWeight: "600",
                        px: "20px",
                        py: "12px",
                        fontSize: "12px",
                        "&:hover": {
                          backgroundColor: "#000",
                          color: "#fff",
                        },
                      }}
                    >
                      অন্যান্য
                    </Button>
                  </Link>
                </Box>
              </Container>
            </AppBar>
          </Box>
          <Box>
            <Title />
          </Box>
        </Box>
      </Box>

      {/* First Navbar Responsive Tool */}

      <Box>
        <Fragment>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            <Box
              sx={{
                px: "20px",
                boxShadow: "1px 1px 5px #DD3333",
                borderRight: "2px solid #DD3333",
                height: "100%",
              }}
              role="presentation"
              onClick={() => setState(false)}
              onKeyDown={() => setState(false)}
            >
              <Box sx={{ textAlign: "start" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box>
                    {" "}
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "22px",
                      }}
                    >
                      <LocationOnIcon sx={{ fontSize: "25px" }} />
                      নেত্রকোনা
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        display: "flex",
                        fontSize: "17px",
                      }}
                    >
                      <span style={{ marginLeft: "5px" }}>
                        {" "}
                        {new Date().toDateString()}
                      </span>
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", mt: "20px" }}>
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
                        src="https://img.icons8.com/color/30/000000/facebook-new.png"
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
                        src="https://img.icons8.com/fluency/30/000000/instagram-new.png"
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
                        src="https://img.icons8.com/fluency/30/000000/twitter.png"
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
                        src="https://img.icons8.com/color/30/000000/youtube-play.png"
                        alt=""
                      />
                    </a>
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    mt: "20px",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <HashLink
                    smooth
                    to="/home#ePaper"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      textDecoration: "none",
                      color: "#000",
                    }}
                  >
                    আজকের পত্রিকা
                  </HashLink>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    my: "10px",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <a
                    href="https://bsbk.portal.gov.bd/apps/bangla-converter/index.html"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      textDecoration: "none",
                      color: "#000",
                    }}
                  >
                    ইউনিকোড কনভার্টার
                  </a>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    my: "10px",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <HashLink
                    smooth
                    to="/home#LiteraryPage"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      textDecoration: "none",
                      color: "#000",
                    }}
                  >
                    হৃদকলমে সাহিত্য পাতা
                  </HashLink>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    my: "10px",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <HashLink
                    smooth
                    to="/home#islamicPage"
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px",
                      textDecoration: "none",
                      color: "#000",
                    }}
                  >
                    ইসলামিক পাতা
                  </HashLink>
                </Typography>
              </Box>
            </Box>
          </SwipeableDrawer>
        </Fragment>
      </Box>

      {/* Main Navbar Responsive Tool */}

      <Box>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer2}
          direction="left"
          zIndex="999"
          style={{
            overflowY: "scroll",
            backgroundImage:
              "linear-gradient(to top, #008D7Fa2, #008D7Fa2), url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
          }}
        >
          <Box sx={{ pl: "15px", mb: "30px" }}>
            <Link
              onClick={() => setIsOpen(false)}
              to="/home"
              style={{ color: "#000", textDecoration: "none" }}
              className="navbarMainButtons2"
            >
              প্রথম পাতা
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="navbarMainButtons2"
              to="/category/national"
              style={{
                color: "#000",
                textDecoration: "none",
              }}
            >
              জাতীয়
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/category/politics"
              style={{ color: "#000", textDecoration: "none" }}
              className="navbarMainButtons2"
            >
              {" "}
              রাজনীতি
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              to="category/accident"
              style={{ color: "#000", textDecoration: "none" }}
              className="navbarMainButtons2"
            >
              দুর্ঘটনা
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="category/entertainment"
              style={{
                color: "#000",
                textDecoration: "none",
              }}
              className="navbarMainButtons2"
            >
              বিনোদন
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="category/education"
              style={{ color: "#000", textDecoration: "none" }}
              className="navbarMainButtons2"
            >
              শিক্ষা
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="category/healthAndMedical"
              style={{ color: "#000", textDecoration: "none" }}
              className="navbarMainButtons2"
            >
              স্বাস্থ্য ও চিকিৎসা
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="category/islamicLife"
              style={{ color: "#000", textDecoration: "none" }}
              className="navbarMainButtons2"
            >
              ইসলামী জীবন
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="category/agriculture"
              style={{ color: "#000", textDecoration: "none" }}
              className="navbarMainButtons2"
            >
              কৃষি
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="category/allOverCountry"
              style={{
                color: "#000",
                textDecoration: "none",
              }}
              className="navbarMainButtons2"
            >
              সারাদেশ
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="category/sport"
              style={{ color: "#000", textDecoration: "none" }}
              className="navbarMainButtons2"
            >
              খেলাধুলা
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="category/others"
              style={{ color: "#000", textDecoration: "none" }}
              className="navbarMainButtons2"
            >
              অন্যান্য
            </Link>
          </Box>
        </Drawer>
      </Box>

      {/* Smooth Scroll */}
      <Box sx={scrollChange ? {} : { display: "none" }}>
        <a
          href="#"
          style={{
            textDecoration: "none",
            position: "fixed",
            bottom: "45px",
            right: "15px",
            zIndex: 9999,
          }}
        >
          <Button
            sx={{
              borderRadius: "100%",
              width: "50px",
              height: "60px",
              backgroundImage:
                "linear-gradient(to bottom, #1e262cb6, #1e262cb6),url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
            }}
            variant="contained"
          >
            <RocketIcon
              sx={{
                fontSize: "45px",
                transition: "400ms",
                "&:hover": {
                  mb: "20px",
                  transition: "400ms",
                },
              }}
            />
          </Button>
        </a>
      </Box>
    </Box>
  );
};

export default Navbar;
