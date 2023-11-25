import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import EPaperAdvertisement from "../EPaperAdvertisement/EPaperAdvertisement";
import CalenderPicker from "../CalenderPicker/CalenderPicker";
import EPaperBody from "../EPaperBody/EPaperBody";
import Header from "../Header/Header";
import PaperButton from "../PaperButton/PaperButton";
import TodayNewspaper from "../TodayNewspaper/TodayNewspaper";

const EPaperContainer = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/allEPaperNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, []);

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

  const [date, setDate] = useState(new Date());
  const [ePaperButton, setEPaperButton] = useState({});
  return (
    <Box>
      <Header />
      <Box
        className="navItemResUp"
        sx={{
          position: "fixed",
          top: "300px",
          zIndex: 99999,
          paddingRight: "25px",
          paddingLeft: "15px",
          py: "5px",
          backgroundColor: "red",
          clipPath:
            "polygon(65% 0, 100% 50%, 65% 100%, 0% 100%, 10% 50%, 0% 0%)",
        }}
        onClick={toggleDrawer("left", true)}
      >
        <Box sx={{ textAlign: "center" }}>
          {" "}
          <span
            style={{ color: "white", display: "block", fontWeight: "bold" }}
          >
            সব <br /> পাতা
          </span>
        </Box>
      </Box>

      <Box>
        <Grid container spacing={3}>
          <Grid item xs={0} sm={0} md={0} lg={2}>
            <PaperButton
              toggleDrawer={toggleDrawer}
              setState={setState}
              state={state}
              date={date}
              setDate={setDate}
              setEPaperButton={setEPaperButton}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <EPaperBody date={date} ePaperButton={ePaperButton} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box sx={{ textAlign: "center", mt: "30px" }}>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fiqraprotidin&tabs=timeline&width=320px&height=131px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1370602773372546"
                width="320px"
                height="131px"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CalenderPicker date={date} setDate={setDate} />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <EPaperAdvertisement />
              <TodayNewspaper />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EPaperContainer;
