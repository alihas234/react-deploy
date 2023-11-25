import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Drafts = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://iqraprotidin-server.herokuapp.com/allNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <Box>
      {/* Title */}
      <Box
        sx={{
          mt: "10px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            display: "inline-block",
            pb: "90px",
            pt: "50px",
            backgroundImage:
              "url(https://i.ibb.co/hfxmNGW/Vector-Text-Banner-Transparent-Background.png)",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            color: "#fff",
            textShadow: "1px 1px 5px #000",
            fontSize: "50px",
          }}
        >
          <span
            style={{
              filter:
                "drop-shadow(0px 0px 0 #000) drop-shadow(-0px 1px 0 #000)drop-shadow(1px -0px 0 #000) drop-shadow(-1px -1px 0 #000)",
            }}
          >
            Drafts
          </span>
        </Typography>
      </Box>

      {/* Draft */}
      <Box>
        <Paper sx={{ width: "100%", overflow: "hidden", mb: "100px" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                    News
                  </TableCell>
                  <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                    Category{" "}
                  </TableCell>
                  <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                    Location
                  </TableCell>
                  <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                    Author Address
                  </TableCell>
                  <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                    Date
                  </TableCell>
                  <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                    Options
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {news.map(
                  ({
                    _id,
                    image,
                    newsTitle,
                    newsCategory,
                    newsLocation,
                    date,
                    time,
                  }) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={_id}>
                      <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                        <Box>
                          <h5
                            style={{
                              color: "#fff",
                              backgroundColor: "#000",
                              paddingRight: "50px",
                              paddingLeft: "10px",
                              borderRight: "10px solid #1565C0",
                              border: "5px solid #1565C0",
                              borderTopRightRadius: "200px",
                              display: "inline-block",
                              fontWeight: "bold",
                            }}
                          >
                            Id: {_id}
                          </h5>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Box
                            sx={{
                              mr: "10px",
                              borderRight: "10px solid #1565C0",
                              border: "5px solid #1565C0",
                              borderBottomRightRadius: "200px",
                            }}
                          >
                            <Box
                              sx={{
                                borderRight: "20px solid #1565C0",
                                borderTopRightRadius: "200px",
                              }}
                            >
                              <img
                                width="150px"
                                height="85px"
                                src={image}
                                alt=""
                              />{" "}
                            </Box>
                          </Box>
                          <Box>
                            <h6
                              style={{ width: "150px", wordWrap: "break-word" }}
                              className="newsTitle1"
                            >
                              {newsTitle}
                            </h6>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                        <h6>
                          <small
                            style={{
                              backgroundColor: "#124E6C",
                              fontWeight: "bold",
                              padding: "5px 10px",
                              color: "#fff",
                            }}
                          >
                            {newsCategory}
                          </small>
                        </h6>
                      </TableCell>
                      <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                        <h6>
                          <small
                            style={{
                              backgroundColor: "#000",
                              fontWeight: "bold",
                              padding: "5px 10px",
                              color: "#fff",
                            }}
                          >
                            {newsLocation}
                          </small>
                        </h6>
                      </TableCell>
                      <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                        <small>
                          <small
                            style={{
                              backgroundColor: "#aaaaaa",
                              fontWeight: "bold",
                              padding: "3px 7px",
                            }}
                          >
                            {"iqraprotidin@gmail.com"}
                          </small>
                        </small>
                      </TableCell>
                      <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                        <p>
                          <small>{date}</small>
                        </p>
                        <p>
                          <small>{time}</small>
                        </p>
                      </TableCell>
                      <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                        <Box>
                          <Button
                            sx={{
                              py: "1px",
                              my: "5px",
                              textTransform: "initial",
                              backgroundColor: "#008AAE",
                            }}
                            variant="contained"
                          >
                            Edit
                          </Button>
                        </Box>
                        <Box>
                          <Button
                            sx={{
                              py: "1px",
                              my: "5px",
                              textTransform: "initial",
                              backgroundColor: "red",
                            }}
                            variant="contained"
                          >
                            Delete
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default Drafts;
