import React from "react";
import "./Details.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import {
  Typo_Basefont,
  Typo_Heading,
  Typo_Smallfont,
  Typo_Subheading,
  Typo_Subtitle,
} from "../../components/Typo/Typo";
import { Box, Stack } from "@mui/material";
import IconTitle from "../../components/IconTitle/IconTitle";
import { calender, clock, map, ticket } from "../../assets";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { appcol } from "../../theme/apptheme";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { NavLink } from "react-router";
import { NavigateTo } from "../../routes/Routes";
import Glassmorph from "../../components/Glassmorph/Glassmorph";

const Details = () => {
  return (
    <div className="Details">
      <Glassmorph
        uri={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ladies-night-party-landscape-poster-flyer-design-template-cc9e9c66c4e308161db9c7dcaa27bffe_screen.jpg?ts=1601365829"
        }
      />

      <Container maxWidth="lg">
        <Breadcrumb />

        <Box sx={{ paddingBlock: "1rem" }}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Box
                sx={{
                  padding: {
                    lg: "3rem",
                  },
                  background: "white",
                  borderRadius: "10px",
                  margin: "1rem",
                }}
              >
                {/* Heading and event poster */}
                <Box sx={{ marginBottom: "2.8rem" }}>
                  <Grid
                    container
                    spacing={0}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Grid size={6}>
                      <Box
                        sx={{
                          overflow: "hidden",
                          borderRadius: "10px",
                          maxHeight: 300,
                          boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 60px -16px",
                        }}
                      >
                        <img
                          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ladies-night-party-landscape-poster-flyer-design-template-cc9e9c66c4e308161db9c7dcaa27bffe_screen.jpg?ts=1601365829"
                          alt=""
                          className="w100"
                        />
                      </Box>
                    </Grid>
                    <Grid size={6}>
                      <Box sx={{ paddingInline: 4 }}>
                        <Typo_Heading
                          text="Brunch Park"
                          fc={appcol.font_col_dark_blue}
                        />
                        <Typo_Subtitle
                          text="Curated by Maushi & The Daily All Day"
                          fc={appcol.font_col_dark_blue}
                        />

                        <Box sx={{ paddingBlock: 3.4 }}>
                          <Divider />
                        </Box>

                        <IconTitle icon={calender} text={"1st December"} />
                        <IconTitle icon={clock} text={"9:00 PM - 10:00 PM"} />
                        <IconTitle
                          icon={map}
                          text={
                            <>
                              <Link
                                href="#"
                                variant="body2"
                                sx={{ fontSize: "1.4rem", color: "#9c9c9c" }}
                              >
                                {
                                  'Pune International Airport Area, Lohegaon, Pune"'
                                }
                              </Link>
                            </>
                          }
                        />
                        {/* <Box sx={{ paddingBlock: 3.4 }}>
                        <Divider />
                      </Box> */}
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                {/* Price Bar  */}
                <Box
                  className="pricebar"
                  sx={{
                    borderRadius: 2,
                    background: "#f6f6f6",
                    padding: "1.8rem",
                    marginBottom: "2rem",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div className="gdeffect gdcol-1"></div>
                  <div className="gdeffect gdcol-2"></div>

                  <Stack justifyContent={"space-between"} direction={"row"}>
                    <Box>
                      <Typo_Subheading
                        text={<>₹1,500</>}
                        fw="400"
                        fc={appcol.font_col_dark_blue}
                      />
                      <Typo_Smallfont
                        text="Onwards"
                        fc={appcol.font_col_dark_blue}
                      />
                    </Box>
                    <Box sx={{ position: "relative", zIndex: 100 }}>
                      <NavLink to={NavigateTo.Booking}>
                        <button className="bookbtn flx aic">
                          Book Tickets
                          <img src={ticket} alt="" className="bookbtn_icon" />
                        </button>
                      </NavLink>
                    </Box>
                  </Stack>
                </Box>

                {/* About Event  */}
                <Grid container>
                  <Grid size={12}>
                    <Box sx={{ paddingBlock: "1rem" }}>
                      <Box sx={{ marginBottom: "1.6rem" }}>
                        <Typo_Subheading
                          text="About"
                          fc={appcol.font_col_dark_blue}
                        />
                      </Box>

                      <Box
                        sx={{
                          borderRadius: 2,
                          background: "#f6f6f6",
                          padding: "1.4rem",
                          marginBottom: "2rem",
                        }}
                      >
                        <Typo_Basefont
                          text="Gather your loved ones and step into Brunch Park – a celebration of food, fun, and family, brought to you by The Daily All Day x Maushi
For the Foodies: Dive into a mouthwatering spread featuring culinary delights from Tsuki, Bai Mu Dan, Mad House Grill, and Juju to name a few.
For the Music Lovers"
                          fc={appcol.font_col_dark_blue}
                          fw="500"
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid size={6}></Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Details;

{
  /* <div className="breadcrumb">
          <Box sx={{paddingLeft: 2}}> 
            <Typo_Subtitle text={"Live / Event in Ajmer / Paradox & Milind"} />
          </Box>
        </div> */
}
