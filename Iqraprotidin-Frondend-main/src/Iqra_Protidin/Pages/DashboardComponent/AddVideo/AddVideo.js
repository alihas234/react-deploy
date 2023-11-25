import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const Input = styled("input")({
  display: "none",
});

const AddVideo = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  // Send News Information
  const onSubmit = (data) => {
    axios
      .post("https://server.eiqraprotidin.com/addYoutubeVideo", data)
      .then((result) => {
        if (result.data.insertedId) {
          setIsLoading(true);
          setTimeout(() => {
            Swal.fire({
              icon: "success",
              title: "Video Add Successful",
              showConfirmButton: false,
              timer: 3000,
            });
            setIsLoading(false);
            reset();
          }, 3000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Video Add Error",
            showConfirmButton: false,
            timer: 3000,
          });
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
            Add Video
          </span>
        </Typography>
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {" "}
          <Box
            sx={{
              backgroundColor: "#fff",
              p: "30px",
              borderRadius: "10px",
              mb: "20px",
            }}
          >
            <Box sx={{ mb: "40px" }}>
              <h6 style={{ fontWeight: "700" }}>Youtube Video</h6>
              <hr />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              {" "}
              <h5 style={{ fontWeight: "700" }}>Youtube Embed Src Url</h5>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  {...register("youtubeEmbedURL")}
                  label="Youtube Embed Src Url"
                  type="url"
                  fullWidth
                  required
                />
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
              </form>
            </Box>
            <Box sx={{ mt: "20px" }}>
              <h6 style={{ fontWeight: "700", color: "red" }}>Example:</h6>
              <img
                width="100%"
                src="https://i.ibb.co/Kzf9b4y/Screenshot-1.png"
                alt=""
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mb: "150px" }}>
          {" "}
          <Box
            sx={{
              backgroundColor: "#fff",
              p: "30px",
              borderRadius: "10px",
              mb: "20px",
            }}
          >
            <Box sx={{ mb: "40px" }}>
              <h6 style={{ fontWeight: "700" }}>Direct Video</h6>
              <hr />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              {" "}
              <h5 style={{ fontWeight: "700" }}>Upload Main Video</h5>
              <label htmlFor="contained-button-file">
                <Input
                  accept="video/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button
                  variant="contained"
                  component="span"
                  sx={{
                    textTransform: "initial",
                    px: "50px",
                    py: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Upload <PhotoCamera sx={{ ml: "5px", fontSize: "20px" }} />
                </Button>
              </label>
              <Button
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddVideo;
