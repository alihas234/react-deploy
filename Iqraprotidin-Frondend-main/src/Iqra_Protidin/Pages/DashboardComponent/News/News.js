import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./News.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const News = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const [newsAuthor, setNewsAuthor] = useState("");
  const handleChangeLocation = (event) => {
    setNewsAuthor(event.target.value);
  };

  const { users } = useAuth();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/allNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, [news]);

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
            .delete(`https://server.eiqraprotidin.com/deleteNews/${id}`)
            .then((result) => {
              if (result.data.deletedCount === 1) {
                setIsLoading(false);
                Swal.fire("Deleted!", "This News Has Been Deleted.", "success");
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
          mt: "10px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
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
            News
          </span>
        </Typography>
      </Box>

      {/* Filter */}
      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-evenly",
          mb: "20px",
        }}
      >
        <Box>
          <h6>Author</h6>
          <FormControl sx={{ width: "100%", mr: "45px" }} size="small">
            <InputLabel id="demo-select-small">Author</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={newsAuthor}
              label="Author"
              onChange={handleChangeLocation}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Author 1</MenuItem>
              <MenuItem value={20}>Author 2</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <h6>Category</h6>
          <FormControl sx={{ width: "100%", mr: "60px" }} size="small">
            <InputLabel id="demo-select-small2">Category</InputLabel>
            <Select
              labelId="demo-select-small2"
              id="demo-select-small2"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>জাতীয়</MenuItem>
              <MenuItem value={20}>রাজনীতি</MenuItem>
              <MenuItem value={30}>শিক্ষা</MenuItem>
              <MenuItem value={40}>বিনোদন</MenuItem>
              <MenuItem value={50}>দুর্ঘটনা</MenuItem>
              <MenuItem value={60}>মৃত্যু</MenuItem>
              <MenuItem value={70}>এনজিও</MenuItem>
              <MenuItem value={80}>কৃষি</MenuItem>
              <MenuItem value={90}>স্বাস্থ্য ও চিকিৎসা</MenuItem>
              <MenuItem value={100}>ইসলামী জীবন</MenuItem>
              <MenuItem value={110}>সারাদেশ</MenuItem>
              <MenuItem value={120}>খেলাধুলা</MenuItem>
              <MenuItem value={130}>অন্যান্য</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <h6>Search</h6>
          <TextField label="Search" type="Search" size="small" />
        </Box>

        <Box>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#124E6C", textTransform: "initial" }}
          >
            Apply Filter
          </Button>
        </Box>
      </Box>

      {/* News */}
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
                    authorEmail,
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
                            {authorEmail}
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
                            onClick={() => navigate(`/admin/updateNews/${_id}`)}
                          >
                            Edit
                          </Button>
                        </Box>
                        <Box>
                          {users?.userRole === "Admin" ? (
                            <Box>
                              <Button
                                sx={{
                                  py: "1px",
                                  my: "5px",
                                  textTransform: "initial",
                                  backgroundColor: "red",
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
                                  backgroundColor: "red",
                                }}
                                variant="contained"
                                disabled
                              >
                                Delete
                              </Button>
                            </Box>
                          )}
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

export default News;
