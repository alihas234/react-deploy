import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";

const ManageEPaper = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { users } = useAuth();
  const [ePaper, setEPaper] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/allEPaperNews")
      .then((result) => result.json())
      .then((data) => setEPaper(data));
  }, [ePaper]);

  // Delete Single News
  const deleteNews = (id) => {
    Swal.fire({
      title: "Are You Sure ?",
      text: "You Won't Be Delete This !",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete It!",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        setTimeout(() => {
          axios
            .delete(`https://server.eiqraprotidin.com/deleteEPaper/${id}`)
            .then((result) => {
              if (result.data.deletedCount === 1) {
                setIsLoading(false);
                Swal.fire(
                  "Deleted!",
                  "This EPaper Has Been Deleted.",
                  "success"
                );
              } else {
                setIsLoading(false);
              }
            });
        }, 3000);
      }
    });
  };

  return (
    <Box>
      {isLoading && (
        <Box>
          <img
            style={{
              padding: "100px",
              display: "flex",
              top: "-35%",
              bottom: "0%",
              left: "0%",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              zIndex: 99999,
              background: "#fff",
              width: "100%",
            }}
            src="https://i.pinimg.com/originals/ca/a3/df/caa3df6a361bd55a3412cb60bb14aa7d.gif"
            alt=""
          />
        </Box>
      )}

      {/* Title */}
      <Box
        sx={{
          mt: "-120px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            display: "inline-block",
            pb: "90px",
            pt: "200px",
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
            Manage All E-Papers
          </span>
        </Typography>
      </Box>

      <Box>
        <Paper sx={{ width: "100%", overflow: "hidden", mb: "100px" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                    Date
                  </TableCell>
                  <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                    Time
                  </TableCell>

                  <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                    Author Address
                  </TableCell>

                  <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                    Options
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ePaper.map(({ _id, authorEmail, date, time }) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={_id}>
                    <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                      <h6 style={{ fontWeight: "bold" }}>{date}</h6>
                    </TableCell>
                    <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                      <h6 style={{ fontWeight: "bold" }}>{time}</h6>
                    </TableCell>
                    <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                      <small
                        style={{
                          backgroundColor: "#aaaaaa",
                          fontWeight: "bold",
                          padding: "3px 7px",
                        }}
                      >
                        {authorEmail}
                      </small>
                    </TableCell>
                    <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                      {users?.userRole === "Admin" ? (
                        <Box>
                          <Button
                            sx={{
                              py: "1px",
                              my: "5px",
                              textTransform: "initial",
                              backgroundColor: "red",
                              width: "100%",
                            }}
                            variant="contained"
                            onClick={() => deleteNews(_id)}
                          >
                            Delete
                          </Button>
                        </Box>
                      ) : (
                        <Box>
                          <Button
                            sx={{
                              py: "1px",
                              my: "5px",
                              textTransform: "initial",
                              width: "100%",
                            }}
                            variant="contained"
                            disabled
                          >
                            Delete
                          </Button>
                        </Box>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default ManageEPaper;
