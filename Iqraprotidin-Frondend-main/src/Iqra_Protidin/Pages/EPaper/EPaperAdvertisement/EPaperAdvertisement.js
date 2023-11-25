import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const EPaperAdvertisement = () => {
  const [adsImage, setAds] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/manageAds")
      .then((result) => result.json())
      .then((data) => setAds(data?.[0]));
  }, []);
  return (
    <Box>
      <Box sx={{ mt: "-50px" }}>
        <img width="320px" height="240px" src={adsImage.adsMiddle} alt="" />
      </Box>
    </Box>
  );
};

export default EPaperAdvertisement;
