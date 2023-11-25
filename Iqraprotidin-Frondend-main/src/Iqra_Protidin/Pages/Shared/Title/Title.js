import { AppBar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Clock from "react-live-clock";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Title = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/breakingTitleNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, []);

  const [scrollChange, setScrollChange] = useState(false);

  //  On Scroll Style Change Handler
  const onScrollHeader = () => {
    window.scrollY >= 5 ? setScrollChange(true) : setScrollChange(false);
  };
  window.addEventListener("scroll", onScrollHeader);
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={
          scrollChange
            ? {
                boxShadow: "1px 1px 10px #DD3333",
                borderTop: "2px solid #DD3333",
                backgroundImage:
                  "linear-gradient(to bottom, #1e262cb6, #1e262cb6),url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
                top: "auto",
                bottom: -5,
              }
            : {
                boxShadow: "1px 1px 10px #DD3333",
                borderTop: "2px solid #DD3333",
                backgroundImage:
                  "linear-gradient(to bottom, #1e262cb6, #1e262cb6),url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
                top: "auto",
                bottom: -5,
              }
        }
        className={
          scrollChange
            ? "animate__animated animate__fadeInUp"
            : "animate__animated animate__bounceInUp"
        }
      >
        <Grid container spacing={0}>
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                backgroundImage:
                  "linear-gradient(to bottom, #1e262cb6, #1e262cb6),url('https://i.ibb.co/sgrfrCk/bghd.jpg')",

                color: "#fff",
                fontWeight: "bold",
              }}
            >
              শিরোনাম :
            </Typography>
          </Grid>
          <Grid
            item
            xs={7}
            sm={7}
            md={7}
            lg={10}
            sx={{
              display: "flex",
              background: "#2f353a",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              {news.length ? (
                <marquee behavior="scroll" direction="left" scrollamount="7">
                  {news.map(({ _id, newsTitle }) => (
                    <span
                      key={_id}
                      onClick={() => navigate(`/news/${_id}`)}
                      style={{ cursor: "pointer" }}
                    >
                      {" "}
                      <HashLink
                        to="#"
                        style={{ textDecoration: "none", color: "#fff" }}
                      >
                        {newsTitle}{" "}
                        {
                          <img
                            src="https://i.ibb.co/wzBQbjk/favicon.png"
                            alt=""
                            width="20px"
                            height="20px"
                            style={{ position: "absolute" }}
                          />
                        }
                        {"ㅤㅤㅤ"}{" "}
                      </HashLink>
                    </span>
                  ))}
                </marquee>
              ) : (
                <marquee behavior="scroll" direction="left" scrollamount="5">
                  <span style={{ color: "red" }}>
                    সত্য প্রকাশে আপোষহীন দৈনিক ইকরা প্রতিদিন
                  </span>
                </marquee>
              )}{" "}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={1}>
            <Typography
              variant="body2"
              sx={{
                backgroundImage:
                  "linear-gradient(to bottom, #1e262cb6, #1e262cb6),url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
                py: "9px",
                color: "#fff",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              <Clock format={"h:mm:ss"} ticking={true} />
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
};

export default Title;
