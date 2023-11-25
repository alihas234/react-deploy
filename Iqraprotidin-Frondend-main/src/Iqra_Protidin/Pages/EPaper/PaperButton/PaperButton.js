import {
  CardActionArea,
  CardActions,
  Grid,
  Skeleton,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useEffect, useState } from "react";

const PaperButton = ({
  toggleDrawer,
  setState,
  state,
  date,
  setEPaperButton,
}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://server.eiqraprotidin.com/allEPaperNews")
      .then((result) => result.json())
      .then((data) => setNews(data));
  }, [news, date]);

  const ePaper = news.filter((newses) => newses.date === date.toDateString());
  return (
    <Box>
      <Box className="navItemRes">
        <Box
          sx={{
            textAlign: "center",
            mt: "30px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              display: "inline-block",
              backgroundColor: "#008264",
              color: "#fff",
              px: "20px",
              py: "8px",
              mb: "10px",
              borderBottomRightRadius: "15px",
              borderBottomLeftRadius: "15px",
              whiteSpace: "nowrap",
            }}
          >
            আজকের পত্রিকা
          </Typography>
        </Box>
        <Box
          sx={{
            mt: "7px",
            display: "flex",
            pl: "20px",
            justifyContent: "center",
          }}
        >
          {ePaper.length || news?.[0]?.image1 ? (
            <Grid
              container
              spacing={2}
              sx={{
                height: "980px",
                overflowY: "scroll",
              }}
            >
              {/* First  Page*/}
              <CardActionArea
                onClick={() =>
                  setEPaperButton(ePaper?.[0]?.image1 || news?.[0]?.image1)
                }
              >
                <CardActions>
                  {" "}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "500ms",
                        "&:hover": {
                          transform: "scale(1.05)",
                          transition: "500ms",
                        },
                      }}
                    >
                      <img
                        width="150px"
                        src={ePaper?.[0]?.image1 || news?.[0]?.image1}
                        alt=""
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          backgroundColor: "#124E6C",
                          fontWeight: "bold",
                          color: "#fff",
                          py: "5px",
                          borderBottomLeftRadius: "10px",
                          borderBottomRightRadius: "10px",
                        }}
                      >
                        প্রথম পাতা
                      </Typography>
                    </Box>
                  </Grid>{" "}
                </CardActions>
              </CardActionArea>

              {/* Second  Page*/}
              <CardActionArea
                onClick={() =>
                  setEPaperButton(ePaper?.[0]?.image2 || news?.[0]?.image2)
                }
              >
                <CardActions>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "500ms",
                        "&:hover": {
                          transform: "scale(1.05)",
                          transition: "500ms",
                        },
                      }}
                    >
                      <img
                        width="150px"
                        src={ePaper?.[0]?.image2 || news?.[0]?.image2}
                        alt=""
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          backgroundColor: "#124E6C",
                          fontWeight: "bold",
                          color: "#fff",
                          py: "5px",
                          borderBottomLeftRadius: "10px",
                          borderBottomRightRadius: "10px",
                        }}
                      >
                        দ্বিতীয় পাতা
                      </Typography>
                    </Box>
                  </Grid>
                </CardActions>
              </CardActionArea>

              {/* Third  Page*/}
              <CardActionArea
                onClick={() =>
                  setEPaperButton(ePaper?.[0]?.image3 || news?.[0]?.image3)
                }
              >
                <CardActions>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "500ms",
                        "&:hover": {
                          transform: "scale(1.05)",
                          transition: "500ms",
                        },
                      }}
                    >
                      <img
                        width="150px"
                        src={ePaper?.[0]?.image3 || news?.[0]?.image3}
                        alt=""
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          backgroundColor: "#124E6C",
                          fontWeight: "bold",
                          color: "#fff",
                          py: "5px",
                          borderBottomLeftRadius: "10px",
                          borderBottomRightRadius: "10px",
                        }}
                      >
                        তৃতীয় পাতা
                      </Typography>
                    </Box>
                  </Grid>
                </CardActions>
              </CardActionArea>

              {/* Fourth  Page*/}
              <CardActionArea
                onClick={() =>
                  setEPaperButton(ePaper?.[0]?.image4 || news?.[0]?.image4)
                }
              >
                <CardActions>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={12}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "500ms",
                        "&:hover": {
                          transform: "scale(1.05)",
                          transition: "500ms",
                        },
                      }}
                    >
                      <img
                        width="150px"
                        height="200px"
                        src={ePaper?.[0]?.image4 || news?.[0]?.image4}
                        alt=""
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          backgroundColor: "#124E6C",
                          fontWeight: "bold",
                          color: "#fff",
                          py: "5px",
                          borderBottomLeftRadius: "10px",
                          borderBottomRightRadius: "10px",
                        }}
                      >
                        শেষ পাতা
                      </Typography>
                    </Box>
                  </Grid>
                </CardActions>
              </CardActionArea>
              {/* image5  Page*/}
              {(ePaper?.[0]?.image5 ||
                news?.[0]?.image5 ||
                news?.[0]?.image5) && (
                <CardActionArea
                  onClick={() =>
                    setEPaperButton(ePaper?.[0]?.image5 || news?.[0]?.image5)
                  }
                >
                  <CardActions>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          textAlign: "center",
                          cursor: "pointer",
                          transition: "500ms",
                          "&:hover": {
                            transform: "scale(1.05)",
                            transition: "500ms",
                          },
                        }}
                      >
                        <img
                          width="150px"
                          src={ePaper?.[0]?.image5 || news?.[0]?.image5}
                          alt=""
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            backgroundColor: "#124E6C",
                            fontWeight: "bold",
                            color: "#fff",
                            py: "5px",
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px",
                          }}
                        >
                          ইসলামিক পাতা
                        </Typography>
                      </Box>
                    </Grid>
                  </CardActions>
                </CardActionArea>
              )}

              {/* image6  Page*/}
              {(ePaper?.[0]?.image6 ||
                news?.[0]?.image6 ||
                news?.[0]?.image6) && (
                <CardActionArea
                  onClick={() =>
                    setEPaperButton(ePaper?.[0]?.image6 || news?.[0]?.image6)
                  }
                >
                  <CardActions>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          textAlign: "center",
                          cursor: "pointer",
                          transition: "500ms",
                          "&:hover": {
                            transform: "scale(1.05)",
                            transition: "500ms",
                          },
                        }}
                      >
                        <img
                          width="150px"
                          src={ePaper?.[0]?.image6 || news?.[0]?.image6}
                          alt=""
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            backgroundColor: "#124E6C",
                            fontWeight: "bold",
                            color: "#fff",
                            py: "5px",
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px",
                          }}
                        >
                          হৃদকলমে সাহিত্য
                        </Typography>
                      </Box>
                    </Grid>{" "}
                  </CardActions>
                </CardActionArea>
              )}
            </Grid>
          ) : (
            <Grid
              container
              spacing={2}
              sx={{
                height: "980px",
                overflowY: "scroll",
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "80%", height: "230px" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "80%", height: "230px" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "80%", height: "230px" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "80%", height: "230px" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "80%", height: "230px" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{ width: "80%", height: "230px" }}
                />
              </Grid>
            </Grid>
          )}
        </Box>
      </Box>
      <Box>
        <Fragment>
          <SwipeableDrawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            onOpen={toggleDrawer("left", true)}
          >
            <Box
              sx={{
                height: "100%",
              }}
              role="presentation"
              onClick={() => setState(false)}
              onKeyDown={() => setState(false)}
            >
              <Box className="navItemResUp">
                <Box
                  sx={{
                    textAlign: "center",
                    mt: "30px",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      display: "inline-block",
                      backgroundColor: "#008264",
                      color: "#fff",
                      px: "20px",
                      py: "8px",
                      mb: "10px",
                      borderBottomRightRadius: "15px",
                      borderBottomLeftRadius: "15px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    আজকের পত্রিকা
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: "7px",
                    display: "flex",
                    pl: "20px",
                    justifyContent: "center",
                  }}
                >
                  {ePaper.length || news?.[0]?.image1 ? (
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        height: "980px",
                        overflowY: "scroll",
                      }}
                    >
                      {/* First  Page*/}
                      <CardActionArea
                        onClick={() =>
                          setEPaperButton(
                            ePaper?.[0]?.image1 || news?.[0]?.image1
                          )
                        }
                      >
                        <CardActions>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{
                                textAlign: "center",
                                cursor: "pointer",
                                transition: "500ms",
                                "&:hover": {
                                  transform: "scale(1.05)",
                                  transition: "500ms",
                                },
                              }}
                            >
                              <img
                                width="150px"
                                src={ePaper?.[0]?.image1 || news?.[0]?.image1}
                                alt=""
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  backgroundColor: "#124E6C",
                                  fontWeight: "bold",
                                  color: "#fff",
                                  py: "5px",
                                  borderBottomLeftRadius: "10px",
                                  borderBottomRightRadius: "10px",
                                }}
                              >
                                প্রথম পাতা
                              </Typography>
                            </Box>
                          </Grid>{" "}
                        </CardActions>
                      </CardActionArea>

                      {/* Second  Page*/}
                      <CardActionArea
                        onClick={() =>
                          setEPaperButton(
                            ePaper?.[0]?.image2 || news?.[0]?.image2
                          )
                        }
                      >
                        <CardActions>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{
                                textAlign: "center",
                                cursor: "pointer",
                                transition: "500ms",
                                "&:hover": {
                                  transform: "scale(1.05)",
                                  transition: "500ms",
                                },
                              }}
                            >
                              <img
                                width="150px"
                                src={ePaper?.[0]?.image2 || news?.[0]?.image2}
                                alt=""
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  backgroundColor: "#124E6C",
                                  fontWeight: "bold",
                                  color: "#fff",
                                  py: "5px",
                                  borderBottomLeftRadius: "10px",
                                  borderBottomRightRadius: "10px",
                                }}
                              >
                                দ্বিতীয় পাতা
                              </Typography>
                            </Box>
                          </Grid>
                        </CardActions>
                      </CardActionArea>

                      {/* Third  Page*/}
                      <CardActionArea
                        onClick={() =>
                          setEPaperButton(
                            ePaper?.[0]?.image3 || news?.[0]?.image3
                          )
                        }
                      >
                        <CardActions>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{
                                textAlign: "center",
                                cursor: "pointer",
                                transition: "500ms",
                                "&:hover": {
                                  transform: "scale(1.05)",
                                  transition: "500ms",
                                },
                              }}
                            >
                              <img
                                width="150px"
                                src={ePaper?.[0]?.image3 || news?.[0]?.image3}
                                alt=""
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  backgroundColor: "#124E6C",
                                  fontWeight: "bold",
                                  color: "#fff",
                                  py: "5px",
                                  borderBottomLeftRadius: "10px",
                                  borderBottomRightRadius: "10px",
                                }}
                              >
                                তৃতীয় পাতা
                              </Typography>
                            </Box>
                          </Grid>
                        </CardActions>
                      </CardActionArea>

                      {/* Fourth  Page*/}
                      <CardActionArea
                        onClick={() =>
                          setEPaperButton(
                            ePaper?.[0]?.image4 || news?.[0]?.image4
                          )
                        }
                      >
                        <CardActions>
                          <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            lg={12}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Box
                              sx={{
                                textAlign: "center",
                                cursor: "pointer",
                                transition: "500ms",
                                "&:hover": {
                                  transform: "scale(1.05)",
                                  transition: "500ms",
                                },
                              }}
                            >
                              <img
                                width="150px"
                                height="200px"
                                src={ePaper?.[0]?.image4 || news?.[0]?.image4}
                                alt=""
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  backgroundColor: "#124E6C",
                                  fontWeight: "bold",
                                  color: "#fff",
                                  py: "5px",
                                  borderBottomLeftRadius: "10px",
                                  borderBottomRightRadius: "10px",
                                }}
                              >
                                শেষ পাতা
                              </Typography>
                            </Box>
                          </Grid>
                        </CardActions>
                      </CardActionArea>
                      {/* image5  Page*/}
                      {ePaper?.[0]?.image5 ||
                        (news?.[0]?.image5 && (
                          <CardActionArea
                            onClick={() =>
                              setEPaperButton(
                                ePaper?.[0]?.image5 || news?.[0]?.image5
                              )
                            }
                          >
                            <CardActions>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Box
                                  sx={{
                                    textAlign: "center",
                                    cursor: "pointer",
                                    transition: "500ms",
                                    "&:hover": {
                                      transform: "scale(1.05)",
                                      transition: "500ms",
                                    },
                                  }}
                                >
                                  <img
                                    width="150px"
                                    src={
                                      ePaper?.[0]?.image5 || news?.[0]?.image5
                                    }
                                    alt=""
                                  />
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      backgroundColor: "#124E6C",
                                      fontWeight: "bold",
                                      color: "#fff",
                                      py: "5px",
                                      borderBottomLeftRadius: "10px",
                                      borderBottomRightRadius: "10px",
                                    }}
                                  >
                                    ইসলামিক পাতা
                                  </Typography>
                                </Box>
                              </Grid>
                            </CardActions>
                          </CardActionArea>
                        ))}

                      {/* image6  Page*/}
                      {ePaper?.[0]?.image6 ||
                        (news?.[0]?.image6 && (
                          <CardActionArea
                            onClick={() =>
                              setEPaperButton(
                                ePaper?.[0]?.image6 || news?.[0]?.image6
                              )
                            }
                          >
                            <CardActions>
                              <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={12}
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Box
                                  sx={{
                                    textAlign: "center",
                                    cursor: "pointer",
                                    transition: "500ms",
                                    "&:hover": {
                                      transform: "scale(1.05)",
                                      transition: "500ms",
                                    },
                                  }}
                                >
                                  <img
                                    width="150px"
                                    src={
                                      ePaper?.[0]?.image6 || news?.[0]?.image6
                                    }
                                    alt=""
                                  />
                                  <Typography
                                    variant="body2"
                                    sx={{
                                      backgroundColor: "#124E6C",
                                      fontWeight: "bold",
                                      color: "#fff",
                                      py: "5px",
                                      borderBottomLeftRadius: "10px",
                                      borderBottomRightRadius: "10px",
                                    }}
                                  >
                                    হৃদকলমে সাহিত্য
                                  </Typography>
                                </Box>
                              </Grid>{" "}
                            </CardActions>
                          </CardActionArea>
                        ))}
                    </Grid>
                  ) : (
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        height: "980px",
                        overflowY: "scroll",
                      }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Skeleton
                          variant="rectangular"
                          sx={{ width: "80%", height: "230px" }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Skeleton
                          variant="rectangular"
                          sx={{ width: "80%", height: "230px" }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Skeleton
                          variant="rectangular"
                          sx={{ width: "80%", height: "230px" }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Skeleton
                          variant="rectangular"
                          sx={{ width: "80%", height: "230px" }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Skeleton
                          variant="rectangular"
                          sx={{ width: "80%", height: "230px" }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Skeleton
                          variant="rectangular"
                          sx={{ width: "80%", height: "230px" }}
                        />
                      </Grid>
                    </Grid>
                  )}
                </Box>
              </Box>
            </Box>
          </SwipeableDrawer>
        </Fragment>
      </Box>
    </Box>
  );
};

export default PaperButton;
