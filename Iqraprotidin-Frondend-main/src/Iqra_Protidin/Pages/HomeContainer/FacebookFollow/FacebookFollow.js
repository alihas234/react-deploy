import { Box } from "@mui/system";
import React from "react";

const FacebookFollow = () => {
  return (
    <Box sx={{ mt: "15px" }}>
      <Box className="navItemRes">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fiqraprotidin&tabs=timeline&width=370px&height=131px&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=1370602773372546"
          width="370px"
          height="131px"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </Box>
      <Box
        className="navItemResUp"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fiqraprotidin%2F&tabs=timeline&width=300px&height=331&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=1370602773372546"
            width="100%"
            height="131px"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default FacebookFollow;
