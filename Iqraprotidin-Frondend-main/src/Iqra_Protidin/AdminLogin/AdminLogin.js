import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";

const AdminLogin = () => {
  const [values, setValues] = React.useState(false);

  // Security Codes Creator
  const code1 = Math.floor(Math.random() * 10);
  const code2 = Math.floor(Math.random() * 10);
  const code3 = Math.floor(Math.random() * 10);
  const code4 = Math.floor(Math.random() * 10);

  const { register, handleSubmit } = useForm();
  const { emailPasswordLogin, resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  //  Submit Email Password Admin Login Information
  const onSubmit = (data) => {
    if (Number(data.code03) === code3) {
      emailPasswordLogin(data.email, data.password, navigate, location);
    } else {
      Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      }).fire({
        icon: "error",
        title: "Captcha Code Didn't Match",
      });
    }
  };

  //  Password Reset Button Handler
  async function resetPasswordInput() {
    const { value: email } = await Swal.fire({
      title: "Email address",
      input: "email",
      inputLabel: "Enter Current Account Email Address",
      inputPlaceholder: "Enter Email Address",
    });
    if (email) {
      resetPassword(email);
    }
  }

  //  Login Information Form
  return (
    <Box>
      <Container>
        <Box
          sx={{
            textAlign: "center",
            boxShadow: "1px 1px 10px gray",
            borderRadius: "10px",
            mt: "50px",
            py: "50px",
            pb: "100px",
          }}
        >
          <Typography
            variant="h3"
            sx={{ color: "#363636", fontWeight: "bold" }}
          >
            Admin <span style={{ color: "#006ef2" }}>Panel</span>
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "50px",
              }}
            >
              <Box>
                <ContactMailOutlinedIcon
                  sx={{
                    mt: "8px",
                    borderBottom: "1px solid #969696",
                    fontSize: "40px",
                    p: "5px",
                  }}
                />
              </Box>

              <TextField
                sx={{
                  width: "50%",
                }}
                type="email"
                id="standard-textarea"
                label="Email"
                placeholder="Enter Email"
                multiline
                variant="standard"
                required
                {...register("email")}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
              <Box>
                <VpnKeyIcon
                  sx={{
                    mt: "8px",
                    borderBottom: "1px solid #969696",
                    fontSize: "40px",
                    p: "5px",
                  }}
                />
              </Box>{" "}
              <FormControl variant="standard" sx={{ width: "50%" }}>
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  {...register("password")}
                  required
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          setValues({
                            showPassword: !values.showPassword,
                          })
                        }
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Box sx={{ width: "138%", mt: "20px" }}>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "revert",
                  py: "1px",
                  borderRadius: "50px",
                  fontWeight: "bold",
                }}
                onClick={resetPasswordInput}
              >
                Reset Password ?
              </Button>
            </Box>
            <Box sx={{ textAlign: "center", mt: "20px" }}>
              <Box
                className="codes"
                sx={{
                  fontFamily: "'Monsieur La Doulaise', cursive",
                  backgroundColor: "#0099FF",
                  display: "inline-block",
                  width: "54%",
                  my: "20px",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    color: "#a0a0a0",
                    marginRight: "-9px",
                  }}
                  className="firstCode"
                >
                  {code1}
                </span>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    color: "#a0a0a0",
                    marginRight: "-7px",
                  }}
                >
                  {code2}
                </span>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    color: "#1565C0",
                    marginRight: "-6px",
                  }}
                >
                  {code3}
                </span>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    color: "#a0a0a0",
                    marginRight: "-5px",
                  }}
                >
                  {code4}
                </span>
              </Box>

              <h6
                style={{
                  color: "#1565C0",
                  textAlign: "center",
                }}
              >
                Enter Colored Code
              </h6>

              <TextField
                sx={{
                  width: "54%",
                  fontWeight: "bold",
                }}
                id="standard-search"
                label="Enter Code"
                type="number"
                variant="standard"
                {...register("code03")}
                required
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "54%", mt: "30px", py: "15px", fontWeight: "bold" }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminLogin;
