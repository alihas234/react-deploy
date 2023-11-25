import { useState } from "react";
import { CalendarPicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Calender = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            backgroundImage:
              "linear-gradient(to top, #008264a2, #008264a2), url('https://i.ibb.co/sgrfrCk/bghd.jpg')",
            color: "#fff",
            mb: "10px",
            fontWeight: "bold",
            py: "5px",
          }}
        >
          আজকের তারিখ
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "5px",
          transition: "500ms",
          "&:hover": {
            backgroundColor: "#d6fff5",
            cursor: "pointer",
            transform: "scale(1.01)",
            transition: "500ms",
          },
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CalendarPicker
            date={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default Calender;
