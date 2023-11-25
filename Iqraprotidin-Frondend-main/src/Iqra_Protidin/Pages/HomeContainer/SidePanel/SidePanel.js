import { Box } from "@mui/system";
import React from "react";
import Advertisement from "../Advertisement/Advertisement";
import Calender from "../Calender/Calender";
import EPaper from "../EPaper/EPaper";
import FacebookFollow from "../FacebookFollow/FacebookFollow";
import FeaturedNews from "../FeaturedNews/FeaturedNews";
import ImportantNews from "../ImportantNews/ImportantNews";
import IqraTV from "../IqraTV/IqraTV";
import Videos from "../Videos/Videos";
import LiteraryPage from "../LiteraryPage/LiteraryPage";
import IslamicPage from "../IslamicPage/IslamicPage";

const SidePanel = () => {
  return (
    <Box>
      <Calender />
      <Advertisement />
      <EPaper />
      <FacebookFollow />
      <FeaturedNews />
      <ImportantNews />
      <IqraTV />
      <Videos />
      <LiteraryPage />
      <IslamicPage />
    </Box>
  );
};

export default SidePanel;
