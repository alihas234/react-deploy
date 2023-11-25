import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Footer.css";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const [logoImage, setLogo] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/manageLogo")
      .then((result) => result.json())
      .then((data) => setLogo(data?.[0]));
  }, []);

  // Footer Shared Component
  return (
    <Box>
      <Box className="footerContainer2" sx={{ pb: "15px" }}>
        <Box className="footerContainer" sx={{ pb: "20px" }}>
          <Box className="container">
            <Box>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={5}
                  sx={{ borderRight: "3px solid #fff" }}
                  className="footerResponsive"
                >
                  <Box
                    sx={{
                      textAlign: "start",
                      mb: "10px",
                      "&:hover": {
                        transform: "scale(0.9)",
                      },
                    }}
                  >
                    <img
                      style={{
                        filter:
                          "drop-shadow(0px 0px 0 #fff) drop-shadow(-0px 1px 0 #ffffff)drop-shadow(1px -0px 0 #fff) drop-shadow(-1px -1px 0 #fff)",
                      }}
                      width="80%"
                      src={logoImage.websiteLogo}
                      alt=""
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ textAlign: "start", fontWeight: "bold" }}
                  >
                    নেত্রকোণা অফসেট প্রিন্টিং প্রেস , সাকুয়া বাজার, চল্লিশা,
                    নেত্রকোণা থেকে মুদ্রিত ও প্রকাশিত |
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  sx={{ borderRight: "3px solid #fff" }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      className="fontTeko"
                      sx={{ fontWeight: "bold", color: "#f44b4b" }}
                    >
                      <span style={{ marginRight: "10px" }}>আলহাজ্ব</span>
                      <span style={{ marginRight: "10px" }}>অধ্যক্ষ</span>
                      <span style={{ marginRight: "10px" }}>শফিকুজ্জামান</span>
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      <small>সম্পাদক ও প্রকাশক</small>
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{ "&:hover": { transform: "scale(1.1)" } }}
                    >
                      <a
                        href="tel:+8801715-882363"
                        className="fontTeko phoneNumber"
                      >
                        <i className="fas fa-phone-alt me-3"></i>
                        01715-882363
                      </a>
                    </Typography>{" "}
                    <Typography
                      variant="h6"
                      sx={{ "&:hover": { transform: "scale(1.1)" } }}
                    >
                      <a
                        href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                        className="phoneNumber"
                      >
                        <EmailIcon sx={{ fontSize: "30px", mr: "7px" }} />
                        iqraprotidin@gmail.com
                      </a>
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        my: "3px",
                        backgroundColor: "#04a8d6",
                        borderRadius: "10px",
                        color: "#fff",
                        p: "2px",
                      }}
                    >
                      প্রভাষক, সাওদা আক্তার পান্না
                      <br /> <small>সহকারী সম্পাদক</small>
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        my: "3px",
                        backgroundColor: "#007b9e",
                        borderRadius: "10px",
                        color: "#fff",
                        p: "2px",
                      }}
                    >
                      জান্নাতুন নাঈম ইরফান
                      <br /> <small>নির্বাহী সম্পাদক</small>
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        my: "3px",
                        backgroundColor: "#00536b",
                        borderRadius: "10px",
                        color: "#fff",
                        p: "2px",
                      }}
                    >
                      মোঃ কামরুজ্জামান
                      <br /> <small> বার্তা সম্পাদক</small>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box className="footer-icon text-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/iqraprotidin/"
              >
                {" "}
                <i className="fab fa-facebook fbf pe-3"></i>{" "}
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/"
              >
                <i className="fab fa-instagram ins pe-3"></i>
              </a>
              <a target="_blank" rel="noreferrer" href="https://twitter.com/">
                <i className="fab fa-twitter twt pe-3"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCYjpxLJR0pJqR_b7YdjoQWw"
              >
                <i className="fab fa-youtube ytf"></i>
              </a>
            </Box>

            <Box>
              <hr />

              <Box className="py-2">
                <a
                  href="https://j-n-erfan.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                    className="copyright"
                  >
                    <i className="far fa-copyright"></i> Developed By
                    <p style={{ fontWeight: "bold" }} className="copyrightName">
                      {" "}
                      J.N.Erfan
                    </p>
                  </Typography>
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
