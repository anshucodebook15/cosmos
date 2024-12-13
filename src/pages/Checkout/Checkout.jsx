import React from "react";
import "./Checkout.scss";
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
import CheckoutBar from "../../components/CheckoutBar/CheckoutBar";
import { SelectBooking } from "../Booking/BookingSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePriceHook } from "../../hooks/usePriceHook";

const PaymentBar = () => {
  return (
    <>
      <div className="CheckoutBar">
        <Box sx={{ padding: 3.6 }}>
          <Container>
            <Box sx={{ marginRight: 4 }}>
              <Stack
                direction={"row"}
                justifyContent={"flex-end"}
                alignItems={"flex-end"}
              >
                <Box>
                  <button className=" defaultBtn checkoutbtn">
                    <NavLink to={"/checkout"}>
                      <Typo_Subtitle text={`Pay To Proceed`} fw="600" />
                    </NavLink>
                  </button>
                </Box>
              </Stack>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
};

const Checkout = () => {
  const { formatPrice } = usePriceHook();
  const dispatch = useDispatch();
  const { seats, error, total } = useSelector(SelectBooking);

  return (
    <div className="Details">
      {/* <Glassmorph
        uri={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ladies-night-party-landscape-poster-flyer-design-template-cc9e9c66c4e308161db9c7dcaa27bffe_screen.jpg?ts=1601365829"
        }
      /> */}

      <Container maxWidth="lg">
        {/* <Breadcrumb /> */}

        <Box sx={{ paddingBlock: "1rem" }}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Box
                sx={{
                  margin: "1rem",
                }}
              >
                {/* Heading and event poster */}
                <Box sx={{ marginBottom: "2.8rem" }}>
                  <Grid container spacing={1} justifyContent={"space-between"}>
                    <Grid size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
                      <Box sx={{ paddingTop: 1 }}>
                        <Typo_Heading text="Paradox In Ajmer | 2025" />
                        <Typo_Subtitle text="Full Of Energy and lots of fun" />

                        <Box sx={{ paddingBlock: 2.4 }}>
                          {/* <Divider sx={{ bgcolor: "#eeeeee" }} /> */}
                        </Box>

                        <Box>
                          <div className="IconTitle">
                            <Box sx={{ marginBottom: 2 }}>
                              <div className="flx aic">
                                <Box sx={{ paddingRight: 2 }}>
                                  <img
                                    src={calender}
                                    alt=""
                                    className="iconwidth20"
                                  />
                                </Box>
                                <Typo_Basefont
                                  text={"1st December"}
                                  fc="white"
                                  fw="500"
                                />
                              </div>
                            </Box>
                          </div>
                        </Box>

                        <Box>
                          <div className="IconTitle">
                            <Box sx={{ marginBottom: 2 }}>
                              <div className="flx aic">
                                <Box sx={{ paddingRight: 2 }}>
                                  <img
                                    src={clock}
                                    alt=""
                                    className="iconwidth20"
                                  />
                                </Box>
                                <Typo_Basefont
                                  text={"9:00 PM - 10:00 PM"}
                                  fc="white"
                                  fw="500"
                                />
                              </div>
                            </Box>
                          </div>
                        </Box>

                        {/* <IconTitle icon={calender} text={"1st December"} /> */}
                        {/* <IconTitle icon={clock} text={"9:00 PM - 10:00 PM"} /> */}
                        <IconTitle
                          icon={map}
                          text={
                            <>
                              <Link
                                href="#"
                                variant="body2"
                                sx={{ fontSize: "1.4rem", color: "#bcbcbc" }}
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
                    <Grid size={{ lg: 7, md: 7, sm: 12, xs: 12 }}>
                      <Box
                        sx={{
                          border: 1,
                          borderColor: "white",
                          overflow: "hidden",
                          borderRadius: "10px",
                          height: "100%",
                          padding: 2,
                        }}
                      >
                        <div className="flx flxdc jcsb h100">
                          <Box>
                            <Box sx={{ marginBottom: 2 }}>
                              <Typo_Subheading text={"Bill Summary"} />
                            </Box>

                            <Box>
                              <Stack
                                sx={{ marginBottom: 0.6 }}
                                direction={"row"}
                                justifyContent={"space-between"}
                              >
                                <Typo_Subtitle text="Total Ticket Price" />
                                <Typo_Subtitle
                                  text={`₹ ${formatPrice(total.price)}`}
                                />
                              </Stack>
                              <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                              >
                                <Typo_Subtitle text="Convenience fee ( inc. of GST )" />
                                <Typo_Subtitle text="₹117.94" />
                              </Stack>
                            </Box>
                          </Box>

                          <Box sx={{ borderTop: 1, paddingTop: 1 }}>
                            <Stack
                              direction={"row"}
                              justifyContent={"space-between"}
                            >
                              <Typo_Subtitle text={"To Be Paid"} fc="white" />
                              <Typo_Subtitle text={"1669.00"} fc="white" />
                            </Stack>
                          </Box>
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                {/* About Event  */}
                <Grid container>
                  <Grid size={12}>
                    <Box sx={{ paddingBlock: "1rem" }}>
                      <Box sx={{ marginBottom: "1.6rem" }}>
                        <Typo_Subheading text="About" />
                      </Box>

                      <Box
                        sx={{
                          borderRadius: 2,
                          background: "#141414",
                          padding: "1.4rem",
                          marginBottom: "2rem",
                        }}
                      >
                        <Typo_Basefont
                          text="Gather your loved ones and step into Brunch Park – a celebration of food, fun, and family, brought to you by The Daily All Day x Maushi
For the Foodies: Dive into a mouthwatering spread featuring culinary delights from Tsuki, Bai Mu Dan, Mad House Grill, and Juju to name a few.
For the Music Lovers"
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

      <div className="posab">
        <PaymentBar />
        {/* <CheckoutBar totalprice={""} totaltickets={""} /> */}
      </div>
    </div>
  );
};

export default Checkout;

{
  /* <div className="breadcrumb">
          <Box sx={{paddingLeft: 2}}> 
            <Typo_Subtitle text={"Live / Event in Ajmer / Paradox & Milind"} />
          </Box>
        </div> */
}
