import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const EPaperPanel = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUsers] = useState("");
  const { users } = useAuth();

  useEffect(() => {
    fetch(`https://server.eiqraprotidin.com/users/${users.email}`)
      .then((res) => res.json())
      .then((data) => setUsers(data?.[0]));
  }, [users]);

  // Send EPaper Information
  const onSubmit = (data) => {
    const date = new Date().toDateString();
    const time = new Date().toTimeString().slice(0, 8);
    data.authorEmail = user.email;
    data.date = date;
    data.time = time;

    axios
      .post("https://server.eiqraprotidin.com/ePaperNews", data)
      .then((result) => {
        setIsLoading(true);
        if (result.data.insertedId) {
          setTimeout(() => {
            Swal.fire({
              icon: "success",
              title: "News Add Successful",
              showConfirmButton: false,
              timer: 3000,
            });
            setIsLoading(false);
            reset();
          }, 3000);
        } else {
          Swal.fire({
            icon: "error",
            title: "News Add Error",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
  };

  return (
    <Box sx={{ mb: "100px" }}>
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
            fontSize: "35px",
          }}
        >
          <span
            style={{
              filter:
                "drop-shadow(0px 0px 0 #000) drop-shadow(-0px 1px 0 #000)drop-shadow(1px -0px 0 #000) drop-shadow(-1px -1px 0 #000)",
            }}
          >
            E-Paper
          </span>
        </Typography>
      </Box>

      <Box>
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "#276582",
              color: "#fff",
              py: "5px",
            }}
          >
            Pages Upload
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body2"
              sx={{
                mt: "20px",
                backgroundColor: "#23A8E0",
                display: "inline-block",
                borderRadius: "3px",

                px: "200px",
                py: "10px",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "red",
                  transform: "scale(0.9)",
                },
              }}
            >
              <a
                href="https://imgbb.com/"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontWeight: "bold",
                  fontSize: "14px",
                  textDecoration: "none",
                  color: "#fff",
                  display: "inline",
                }}
              >
                Image Host
              </a>
            </Typography>
          </Box>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          {" "}
          <Grid container spacing={0} sx={{ mt: "10px" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              sx={{ backgroundColor: "#fff", mt: "20px" }}
            >
              <Box sx={{ textAlign: "center", px: "50px", pb: "25px" }}>
                {" "}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                    my: "20px",
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "100px",
                    py: "5px",
                  }}
                >
                  প্রথম পাতা
                </Typography>
                <TextField
                  {...register("image1")}
                  label="Enter Image Url"
                  type="url"
                  fullWidth
                  required
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              sx={{ backgroundColor: "#fff", mt: "20px" }}
            >
              <Box sx={{ textAlign: "center", px: "50px", pb: "25px" }}>
                {" "}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                    my: "20px",
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "100px",
                    py: "5px",
                  }}
                >
                  দ্বিতীয় পাতা
                </Typography>{" "}
                <TextField
                  {...register("image2")}
                  label="Enter Image Url"
                  type="url"
                  fullWidth
                  required
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              sx={{ backgroundColor: "#fff", mt: "20px" }}
            >
              <Box sx={{ textAlign: "center", px: "50px", pb: "25px" }}>
                {" "}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                    my: "20px",
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "100px",
                    py: "5px",
                  }}
                >
                  তৃতীয় পাতা
                </Typography>{" "}
                <TextField
                  {...register("image3")}
                  label="Enter Image Url"
                  type="url"
                  fullWidth
                  required
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={6}
              sx={{ backgroundColor: "#fff", mt: "20px" }}
            >
              <Box sx={{ textAlign: "center", px: "50px", pb: "25px" }}>
                {" "}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                    my: "20px",
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "100px",
                    py: "5px",
                  }}
                >
                  শেষ পাতা
                </Typography>{" "}
                <TextField
                  {...register("image4")}
                  label="Enter Image Url"
                  type="url"
                  fullWidth
                  required
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{ backgroundColor: "#fff", borderRadius: "20px", mt: "20px" }}
            >
              <Box sx={{ textAlign: "center", my: "10px" }}>
                <h6 style={{ fontWeight: "bold" }}>Optional</h6>
              </Box>
              <Box sx={{ textAlign: "center", px: "50px", pb: "25px" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                    my: "20px",
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "100px",
                    py: "5px",
                  }}
                >
                  হৃদকলমে সাহিত্য পাতা
                </Typography>{" "}
                <TextField
                  {...register("image5")}
                  label="Enter Image Url"
                  type="url"
                  fullWidth
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{ backgroundColor: "#fff", borderRadius: "20px", mt: "20px" }}
            >
              <Box sx={{ textAlign: "center", my: "10px" }}>
                <h6 style={{ fontWeight: "bold" }}>Optional</h6>
              </Box>
              <Box sx={{ textAlign: "center", px: "50px", pb: "25px" }}>
                {" "}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "700",
                    my: "20px",
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "100px",
                    py: "5px",
                  }}
                >
                  ইসলামিক পাতা
                </Typography>{" "}
                <TextField
                  {...register("image6")}
                  label="Enter Image Url"
                  type="url"
                  fullWidth
                />
              </Box>
            </Grid>
          </Grid>
          <Container>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                textTransform: "initial",
                px: "50px",
                py: "10px",
                fontWeight: "bold",
                mt: "20px",
              }}
            >
              Publish
            </Button>
          </Container>
        </form>
      </Box>
    </Box>
  );
};

export default EPaperPanel;
