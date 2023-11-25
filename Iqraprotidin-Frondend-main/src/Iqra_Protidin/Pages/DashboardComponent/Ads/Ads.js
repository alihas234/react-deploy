import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const Ads = () => {
  const { register, handleSubmit, reset } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [adsImage, setAds] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/manageAds")
      .then((result) => result.json())
      .then((data) => setAds(data?.[0]));
  }, []);
  const onSubmit = (data) => {
    if (data.adsNavbar === "" || data.adsMiddle === "") {
      Swal.fire({
        icon: "error",
        title: "Click Text Field",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    }
    axios
      .put("https://server.eiqraprotidin.com/adsImage", data)
      .then((result) => {
        if (
          result.data.upsertedCount === 1 ||
          result.data.upsertedId ||
          result.data.matchedCount === 1
        ) {
          setIsLoading(true);
          setTimeout(() => {
            Swal.fire({
              icon: "success",
              title: "Ads Image Add Successful",
              showConfirmButton: false,
              timer: 3000,
            });
            setIsLoading(false);
            reset();
          }, 3000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Ads Image Add Error",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
  };

  const { adsNavbar, adsMiddle } = adsImage;
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
            fontSize: "20px",
          }}
        >
          <span
            style={{
              filter:
                "drop-shadow(0px 0px 0 #000) drop-shadow(-0px 1px 0 #000)drop-shadow(1px -0px 0 #000) drop-shadow(-1px -1px 0 #000)",
            }}
          >
            Advertisement
          </span>
        </Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        <Box
          sx={{
            backgroundColor: "#fff",
            p: "30px",
            borderRadius: "10px",
            mb: "50px",
          }}
        >
          <Box sx={{ mb: "40px" }}>
            <h6 style={{ fontWeight: "700" }}>Ads For Navbar</h6>
            <hr />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <h5 style={{ fontWeight: "700" }}>Upload Ads Image</h5>
            <input
              {...register("adsNavbar")}
              placeholder="Enter Ads Url"
              type="url"
              required
              defaultValue={adsNavbar}
              style={{
                borderRadius: "5px",
                width: "100%",
                height: "40px",
                border: "1px solid #a5a2a2",
              }}
            />
            <h6 style={{ marginTop: "10px", color: "red" }}>
              ⚠ Caution: Image/Gif Resolution Must Be 800x100
            </h6>
            <h6 style={{ marginTop: "20px" }}>
              Status: {adsNavbar !== "" ? "🟢Active" : "🔴Deactivate"}
            </h6>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            p: "30px",
            borderRadius: "10px",
            mb: "150px",
          }}
        >
          <Box sx={{ mb: "40px" }}>
            <h6 style={{ fontWeight: "700" }}>Ads For Middle</h6>
            <hr />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            {" "}
            <h5 style={{ fontWeight: "700" }}>Upload Ads Image</h5>
            <input
              {...register("adsMiddle")}
              placeholder="Enter Ads Url"
              type="url"
              required
              defaultValue={adsMiddle}
              style={{
                borderRadius: "5px",
                width: "100%",
                height: "40px",
                border: "1px solid #a5a2a2",
              }}
            />
            <h6 style={{ marginTop: "10px", color: "red" }}>
              ⚠ Caution: Image/Gif Resolution Must Be 370x290
            </h6>
            <h6 style={{ marginTop: "20px" }}>
              Status: {adsMiddle !== "" ? "🟢Active" : "🔴Deactivate"}
            </h6>
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
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Ads;
