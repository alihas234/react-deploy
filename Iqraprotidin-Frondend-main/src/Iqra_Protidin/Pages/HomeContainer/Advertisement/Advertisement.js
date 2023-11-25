import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { Carousel } from "react-bootstrap";
import "./Advertisement.css";

const Advertisement = () => {
  const [adsImage, setAds] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/manageAds")
      .then((result) => result.json())
      .then((data) => setAds(data?.[0]));
  }, []);
  return (
    <Box>
      {/* Advertisement */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(to top, #276582a2, #276582a2), url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ py: "5px", color: "white", fontWeight: "bold" }}
        >
          বিজ্ঞাপন
        </Typography>
      </Box>
      <Box sx={{ mt: "10px" }}>
        <img width="370px" height="290px" src={adsImage.adsMiddle} alt="" />
      </Box>
    </Box>
  );
};

export default Advertisement;

// <Carousel fade indicators={false} interval={1000}>
//   <Carousel.Item>
//     <img
//       width="370px"
//       height="290px"
//       src={adsImage.adsMiddle}
//       alt=""
//     />
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       width="370px"
//       height="290px"
//       src="https://i.ibb.co/NmfrVSG/POSTER.jpg"
//       alt=""
//     />
//   </Carousel.Item>
// </Carousel>
