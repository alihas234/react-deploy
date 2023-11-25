import { Button, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { Modal } from "react-bootstrap";
import { FacebookShareButton, TwitterShareButton } from "react-share";

const EPaperBody = ({ date, ePaperButton }) => {
  const [modalShow, setModalShow] = useState(false);
  const url = window.location;
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/allEPaperNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, [date, ePaperButton]);

  const ePaper = news.filter((newses) => newses.date === date.toDateString());

  const [noNews, setNoNews] = useState(false);
  useEffect(() => {
    setNoNews(false);
    setTimeout(() => {
      setNoNews(true);
    }, 20000);
  }, [date]);
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: "30px",
      }}
    >
      <Box>
        {ePaper.length || news?.[0]?.image1 ? (
          <Box
            sx={{
              cursor: "zoom-in",
              boxShadow: "1px 1px 10px #4c4c4c",
              padding: "15px",
            }}
            onClick={() => setModalShow(true)}
          >
            <h6>
              <small>Last ePaper Updated</small>
            </h6>
            <h5 style={{ fontWeight: "bold" }}>
              {ePaper?.[0]?.date || news?.[0].date}
            </h5>
            <img
              style={{
                width: "100%",
                height: "100%",
                padding: "15px",
              }}
              src={ePaperButton.length ? ePaperButton : news?.[0]?.image1}
              alt=""
            />
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <TwitterShareButton
                  url={url}
                  // title={newsTitle}
                  style={{
                    border: "none",
                    background: "none",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "unset",
                      backgroundColor: "#124E6C",
                      "&:hover": {
                        backgroundColor: "rgb(11, 181, 248)",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <i className="fab fa-twitter me-2 fs-4"></i>{" "}
                    <span style={{ fontWeight: "bold" }}>Twitter</span>
                  </Button>
                </TwitterShareButton>
                <FacebookShareButton
                  url={url}
                  // quote={newsTitle}
                  style={{
                    border: "none",
                    background: "none",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "unset",
                      backgroundColor: "#124E6C",
                      "&:hover": {
                        backgroundColor: "#087aea",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <i className="fab fa-facebook me-2 fs-4"></i>{" "}
                    <span style={{ fontWeight: "bold" }}>Facebook</span>
                  </Button>
                </FacebookShareButton>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box sx={{ textAlign: "center" }}>
            {noNews && (
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "gray",
                  textAlign: "center",
                  my: "40px",
                }}
              >
                No News Paper
              </Typography>
            )}
            <Skeleton
              variant="rectangular"
              sx={{ width: "100%", height: "700px" }}
            />
          </Box>
        )}
      </Box>

      {/* Modal */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <InnerImageZoom
            width="100%"
            src={ePaperButton.length ? ePaperButton : news?.[0]?.image1}
            zoomSrc={ePaperButton.length ? ePaperButton : news?.[0]?.image1}
            fullscreenOnMobile={true}
            zoomScale={1.1}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Box>
  );
};

export default EPaperBody;
