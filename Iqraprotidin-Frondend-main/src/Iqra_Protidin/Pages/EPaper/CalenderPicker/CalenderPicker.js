import { Box } from "@mui/system";
import { CalendarPicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Typography } from "@mui/material";

const CalenderPicker = ({ date, setDate }) => {
  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          mt: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            display: "inline-block",
            backgroundColor: "#008264",
            color: "#fff",
            px: "90px",
            py: "8px",
            mb: "10px",
            borderBottomRightRadius: "15px",
            borderBottomLeftRadius: "15px",
            whiteSpace: "nowrap",
          }}
        >
          পুরোনো সংখ্যা
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

export default CalenderPicker;
