import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";

const PanelUsers = () => {
  const [usersInfo, setUsers] = useState([]);
  const [changeUsers, setChangeUsers] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/manageUsers")
      .then((result) => result.json())
      .then((data) => setUsers(data));
  }, [usersInfo]);

  const [userRole, setUserRole] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const { emailPasswordSignUp, users } = useAuth();

  async function changeUserRole() {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          Admin: "Admin",
          Moderator: "Moderator",
        });
      }, 500);
    });

    const { value: role } = await Swal.fire({
      title: "Select User Role",
      input: "radio",
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "You need to choose something!";
        }
      },
    });
    if (role) {
      setChangeUsers(role);
    }
  }
  async function selectUserRole() {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          Admin: "Admin",
          Moderator: "Moderator",
        });
      }, 1000);
    });
    const { value: role } = await Swal.fire({
      title: "Select User Role",
      input: "radio",
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "You need to choose something!";
        }
      },
    });
    if (role) {
      setUserRole(role);
    }
  }

  // Send User Information
  const onSubmit = (data) => {
    emailPasswordSignUp(data.email, data.password);
    const date = new Date().toDateString();
    data.date = date;
    data.userRole = userRole;
    axios
      .post("https://server.eiqraprotidin.com/makeUser", data)
      .then((result) => {
        if (result.data.insertedId) {
          setTimeout(() => {
            Swal.fire({
              icon: "success",
              title: `Make ${userRole} Successful`,
              showConfirmButton: false,
              timer: 3000,
            });
            reset();
          }, 3000);
        } else {
          Swal.fire({
            icon: "error",
            title: `Make ${userRole} Error`,
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
  };

  // Delete Single User
  const deleteSingleUser = (id) => {
    Swal.fire({
      title: "Are You Sure ?",
      text: "You Won't Be Delete User !",
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
            .delete(`https://server.eiqraprotidin.com/deleteUser/${id}`)
            .then((result) => {
              if (result.data.deletedCount === 1) {
                setIsLoading(false);
                Swal.fire("Deleted!", "User Has Been Baned.", "success");
              } else {
                setIsLoading(false);
              }
            });
        }, 3000);
      }
    });
  };

  const changeUsersRole = (id) => {
    axios
      .put(`https://server.eiqraprotidin.com/changeUserRole/${id}`, {
        userRole: changeUsers,
      })
      .then((result) => {
        if (result.data.modifiedCount === 1) {
          setTimeout(() => {
            Swal.fire({
              icon: "success",
              title: "News Update Successful",
              showConfirmButton: false,
              timer: 3000,
            });
            window.location.reload();
          }, 3000);
        } else {
          Swal.fire({
            icon: "error",
            title: "News Update Error",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
  };

  return (
    <Box sx={{ mb: "150px" }}>
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
            fontSize: "30px",
          }}
        >
          <span
            style={{
              filter:
                "drop-shadow(0px 0px 0 #000) drop-shadow(-0px 1px 0 #000)drop-shadow(1px -0px 0 #000) drop-shadow(-1px -1px 0 #000)",
            }}
          >
            Panel Users
          </span>
        </Typography>
      </Box>

      {/* Make Admin And Moderator */}
      <Box>
        <Grid container spacing={2} sx={{ p: "20px" }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              sx={{
                textAlign: "center",
                backgroundColor: "#fff",
                p: "50px",
                borderRadius: "10px",
              }}
            >
              <Box sx={{ marginBottom: "50px" }}>
                <h4 style={{ fontWeight: "bold" }}>Make Admin/Moderator</h4>
              </Box>
              <Box
                sx={{
                  backgroundColor: "#ECF0F5",
                  p: "30px",
                  display: "inline-block",
                  borderRadius: "10px",
                }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box>
                    <TextField
                      label="Email"
                      type="email"
                      variant="standard"
                      sx={{ my: "10px", width: "100%" }}
                      {...register("email")}
                      required
                    />
                  </Box>
                  <Box>
                    <TextField
                      label="Password"
                      type="password"
                      variant="standard"
                      sx={{ width: "100%" }}
                      {...register("password")}
                      required
                    />
                  </Box>
                  <Box sx={{ my: "20px", width: "100%" }}>
                    <Button
                      onClick={selectUserRole}
                      variant="outlined"
                      sx={{ textTransform: "initial" }}
                    >
                      Select User Role
                    </Button>
                  </Box>
                  <Box>
                    <Box>
                      {users?.userRole === "Admin" ? (
                        <Box>
                          <Button
                            type="submit"
                            variant="contained"
                            sx={{
                              textTransform: "initial",
                              width: "100%",
                              fontWeight: "bold",
                            }}
                          >
                            Make User
                          </Button>
                        </Box>
                      ) : (
                        <Box>
                          <Button
                            variant="contained"
                            sx={{
                              textTransform: "initial",
                              width: "100%",
                              fontWeight: "bold",
                            }}
                            disabled
                          >
                            Make User
                          </Button>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Users */}
      <Box
        sx={{
          backgroundColor: "#fff",
          p: "30px",
          borderRadius: "10px",
          mb: "150px",
        }}
      >
        <Box>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                      Id
                    </TableCell>

                    <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                      Username
                    </TableCell>
                    <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                      Role
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
                  {usersInfo.map(({ _id, email, userRole, date }) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={_id}>
                      <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                        <small style={{ fontWeight: "bold" }}>
                          {_id.slice(0, 8)}
                        </small>
                      </TableCell>
                      <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                        <h6
                          style={{
                            backgroundColor: "#1467BF",
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "#fff",
                          }}
                        >
                          {email}
                        </h6>
                      </TableCell>
                      <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                        <h5
                          style={{
                            backgroundColor: "#545454",
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "#fff",
                            textTransform: "uppercase",
                          }}
                        >
                          {userRole}
                        </h5>
                      </TableCell>
                      <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                        <h6>
                          <small>{date}</small>
                        </h6>
                      </TableCell>
                      <TableCell sx={{ borderRight: "1px solid #ECF0F5" }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          {users?.userRole === "Admin" ? (
                            <Box>
                              <Box>
                                {!changeUsers && (
                                  <Button
                                    onClick={changeUserRole}
                                    sx={{
                                      py: "1px",
                                      my: "5px",
                                      textTransform: "initial",
                                      backgroundColor: "#008AAE",
                                    }}
                                    variant="contained"
                                  >
                                    Change User Role
                                  </Button>
                                )}
                                {changeUsers && (
                                  <Button
                                    onClick={() => changeUsersRole(_id)}
                                    sx={{
                                      py: "1px",
                                      my: "5px",
                                      textTransform: "initial",
                                      backgroundColor: "green",
                                    }}
                                    variant="contained"
                                  >
                                    Click For Confirm
                                  </Button>
                                )}
                              </Box>

                              <Box>
                                <Button
                                  onClick={() => deleteSingleUser(_id)}
                                  sx={{
                                    py: "1px",
                                    my: "5px",
                                    textTransform: "initial",
                                    backgroundColor: "red",
                                  }}
                                  variant="contained"
                                >
                                  Ban User
                                </Button>
                              </Box>
                            </Box>
                          ) : (
                            <Box>
                              <Button
                                sx={{
                                  py: "1px",
                                  my: "5px",
                                  textTransform: "initial",
                                  backgroundColor: "#008AAE",
                                }}
                                variant="contained"
                                disabled
                              >
                                Change User Role
                              </Button>

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
                                  Ban User
                                </Button>
                              </Box>
                            </Box>
                          )}
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default PanelUsers;
