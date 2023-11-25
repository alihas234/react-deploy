import { Box } from "@mui/system";
import React from "react";

const NotFound = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", zIndex: 9999 }}>
      <Box sx={{ textAlign: "center", position: "fixed" }}>
        <img
          style={{ width: "100%" }}
          src="https://i.ibb.co/bbKwd0H/No-data-1.gif"
          alt=""
        />
      </Box>
    </Box>
  );
};

export default NotFound;
