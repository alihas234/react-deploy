import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Accident from "../HomeContainer/Accident/Accident";
import Agriculture from "../HomeContainer/Agriculture/Agriculture";
import AllNews from "../HomeContainer/AllNews/AllNews";
import AllOverCountry from "../HomeContainer/AllOverCountry/AllOverCountry";
import Education from "../HomeContainer/Education/Education";
import Entertainment from "../HomeContainer/Entertainment/Entertainment";
import HealthAndMedical from "../HomeContainer/HealthAndMedical/HealthAndMedical";
import IslamicLife from "../HomeContainer/IslamicLife/IslamicLife";
import LatestNews from "../HomeContainer/LatestNews/LatestNews";
import National from "../HomeContainer/National/National";
import Others from "../HomeContainer/Others/Others";
import Politics from "../HomeContainer/Politics/Politics";
import SidePanel from "../HomeContainer/SidePanel/SidePanel";
import Sports from "../HomeContainer/Sports/Sports";

const Home = () => {
  return (
    <Box>
      <LatestNews />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <National />
            <Politics />
            <Education />
            <Entertainment />
            <Accident />
            <Agriculture />
            <HealthAndMedical />
            <IslamicLife />
            <AllOverCountry />
            <Sports />
            <Others />
            <AllNews />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <SidePanel />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
