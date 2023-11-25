import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useNavigate } from "react-router-dom";
import PreviewIcon from "@mui/icons-material/Preview";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";
import { useEffect, useState } from "react";

const DashboardHome = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/allNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, []);
  const [ePaper, setPaper] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/allEPaperNews")
      .then((result) => result.json())
      .then((data) => setPaper(data));
  }, []);

  const navigate = useNavigate();

  // Dashboard Cards
  const dashboardShort = [
    {
      number: news.length,
      title: "Total News",
      image: "https://img.icons8.com/ios/50/000000/news.png",
      color1: "#8757E9",
      color2: "#5171E6",
      degree: "0deg",
      link: "/admin/news",
    },
    {
      number: ePaper.length,
      title: "E-Paper",
      image: "https://img.icons8.com/dotty/80/000000/data-pending.png",
      color1: "#32E280",
      color2: "#129B8E",
      degree: "30deg",
      link: "/admin/manageEPaper",
    },
    {
      number: 0,
      title: "Drafts",
      image:
        "https://img.icons8.com/fluency-systems-regular/48/000000/bank-draft.png",
      color1: "#19299A",
      color2: "#4A6AB4",
      degree: "150deg",
      link: "/admin/drafts",
    },
  ];

  // Dashboard All Information Card
  return (
    <Box sx={{ mb: "200px" }}>
      <Box sx={{ mt: "50px", ml: "30px" }}>
        <h1 style={{ color: "#3a5775", fontWeight: "bold" }}>Dashboard</h1>
      </Box>
      <Container sx={{ my: "70px" }}>
        <Grid container spacing={10}>
          {dashboardShort.map(
            ({ number, title, image, color1, color2, degree, link }) => (
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box
                  sx={{
                    background: `linear-gradient(${degree}, ${color1}, ${color2})`,
                    p: "20px",
                    py: "30px",
                    borderRadius: "20px",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "end",
                      backgroundImage: `url(${image})`,
                      backgroundSize: "30%",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {" "}
                    {news.length ? (
                      <Typography
                        variant="h4"
                        sx={{ color: "#fff", fontWeight: "bold" }}
                      >
                        <VisibilitySensor>
                          {({ isVisible }) => (
                            <span>
                              {isVisible ? (
                                <CountUp end={number} duration={1} delay={0} />
                              ) : (
                                0
                              )}
                            </span>
                          )}
                        </VisibilitySensor>
                      </Typography>
                    ) : (
                      <Typography
                        variant="h4"
                        sx={{ color: "#fff", fontWeight: "bold" }}
                      >
                        <VisibilitySensor>
                          {({ isVisible }) => (
                            <span>
                              {isVisible ? (
                                <CountUp
                                  end={99999999}
                                  duration={20}
                                  delay={0}
                                />
                              ) : (
                                0
                              )}
                            </span>
                          )}
                        </VisibilitySensor>
                      </Typography>
                    )}
                    <Typography variant="h5" sx={{ color: "#fff" }}>
                      {title}
                    </Typography>
                    <Button
                      onClick={() => navigate(link)}
                      variant="contained"
                      sx={{
                        backgroundColor: "#fff",
                        color: "#000",
                        fontWeight: "bold",
                        mt: "10px",
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "#000",
                        },
                      }}
                    >
                      View All
                    </Button>
                  </Box>
                </Box>
              </Grid>
            )
          )}
        </Grid>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold", mt: "50px" }}>
            Viewers Report
          </Typography>
          <Grid container spacing={3} sx={{ mt: "30px" }}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box
                sx={{
                  textAlign: "center",
                  border: "1px solid #7367F0",
                  borderRadius: "10px",
                  p: "20px",
                }}
              >
                <RemoveRedEyeTwoToneIcon
                  sx={{
                    backgroundColor: "#7367F0",
                    color: "#fff",
                    fontSize: "100px",
                    p: "10px",
                    borderRadius: "100%",
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", mt: "20px" }}
                >
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <span>
                        {isVisible ? (
                          <CountUp end={999999} duration={5} delay={0} />
                        ) : (
                          0
                        )}
                      </span>
                    )}
                  </VisibilitySensor>
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Today Viewers
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box
                sx={{
                  textAlign: "center",
                  border: "1px solid #E91E63",
                  borderRadius: "10px",
                  p: "20px",
                }}
              >
                <VisibilityIcon
                  sx={{
                    backgroundColor: "#E91E63",
                    color: "#fff",
                    fontSize: "100px",
                    p: "10px",
                    borderRadius: "100%",
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", mt: "20px" }}
                >
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <span>
                        {isVisible ? (
                          <CountUp end={99999999} duration={8} delay={0} />
                        ) : (
                          0
                        )}
                      </span>
                    )}
                  </VisibilitySensor>
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Last Weak Viewers
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box
                sx={{
                  textAlign: "center",
                  border: "1px solid #4CAF50",
                  borderRadius: "10px",
                  p: "20px",
                }}
              >
                <PreviewIcon
                  sx={{
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    fontSize: "100px",
                    p: "10px",
                    borderRadius: "100%",
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", mt: "20px" }}
                >
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <span>
                        {isVisible ? (
                          <CountUp end={9999999999} duration={10} delay={0} />
                        ) : (
                          0
                        )}
                      </span>
                    )}
                  </VisibilitySensor>
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Total Viewers
                </Typography>
              </Box>{" "}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default DashboardHome;
