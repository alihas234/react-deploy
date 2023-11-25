import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TodayNewspaper = () => {
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          mt: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            display: "inline-block",
            backgroundColor: "#124E6C",
            color: "#fff",
            px: "90px",
            py: "8px",
            mb: "10px",
            borderBottomRightRadius: "15px",
            borderBottomLeftRadius: "15px",
            whiteSpace: "nowrap",
          }}
        >
          বিশেষ সংখ্যা
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ textAlign: "start" }}>
          <Typography
            variant="h6"
            sx={{
              border: "3px solid red",
              px: "20px",
              py: "5px",
              color: "red",
              borderRadius: "15px",
              "&:hover": { transform: "scale(1.05)" },
              cursor: "pointer",
            }}
          >
            {" "}
            <i
              className="fas fa-check-circle"
              style={{ marginRight: "5px" }}
            />{" "}
            হৃদকলমে সাহিত্য পাতা
          </Typography>
          <Typography
            variant="h6"
            sx={{
              border: "3px solid red",
              color: "red",
              px: "20px",
              py: "5px",
              borderRadius: "15px",
              "&:hover": { transform: "scale(1.05)" },
              mt: "10px",
              cursor: "pointer",
            }}
          >
            {" "}
            <i
              className="fas fa-check-circle"
              style={{ marginRight: "10px" }}
            />
            ইসলামিক পাতা
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TodayNewspaper;
