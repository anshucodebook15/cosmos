import React, { useEffect, useState } from "react";
import "./Landing.scss";
import { SelectLanding } from "./LandingSlice";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Card,
  CardContent,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

import {
  Typo_Basefont,
  Typo_Chip,
  Typo_Heading,
  Typo_Smallfont,
  Typo_Subheading,
  Typo_Subtitle,
} from "../../components/Typo/Typo";
import { Link, NavLink } from "react-router";
import { NavigateTo } from "../../routes/Routes";
import {
  aeymann,
  artisan,
  bandhan,
  beer,
  call,
  cardbg,
  concertbg,
  desidrop,
  discoglob,
  DOClogo,
  khanikaar,
  logo,
  mail,
  mh,
  overview,
  paradox,
  paradoxconcert,
  paradoxperforming,
  paradoxposter,
  savethedate,
  stage,
  stagenew,
  stars,
  table,
  tfn,
  ticketdetails,
  ultimate,
  nf,
  rt
} from "../../assets";
import Imgbox from "../../components/Imgbox/Imgbox";
import Glassmorph from "../../components/Glassmorph/Glassmorph";
import Footer from "../../components/Footer/Footer";
import { InquiryModal } from "../../components/InquiryModal/InquiryModal";
import Sponserbar from "../../components/Sponserbar/Sponserbar";
import { clearAppState } from "../Booking/BookingSlice";

const plans = [
  {
    type: "Silver",
    color: "#d3d3d36b",
    features: ["Entry to event"],
    price: "₹1,499",
  },
  {
    type: "Gold",
    color: "#FFD700b0",
    features: [
      "Entry to event",
      "₹500 coupons redeemable for food or beverages.",
    ],
    price: "₹2,999",
  },
  {
    type: "Fan Pit",
    color: "#FFA500b0",
    features: [
      "Entry to event with access to the fan pit (closest to the stage).",
      "₹500 coupons redeemable for food or beverages",
      "4 pints of beer included.",
    ],
    price: "₹4,999",
  },
  {
    type: "VIP",
    color: "#FF6347b0",
    features: [
      "Entry to event",
      "Priority access",
      "Unlimited premium food & drinks",
    ],
    price: "₹14,999",
  },
];
const PricingPlans = () => {
  return (
    <Box sx={{ backgroundColor: "#050505", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", marginBottom: 3 }}>
          <Typo_Heading text="Ticket Pricing Plans" textAlign="center" />
        </Box>
        <Grid container spacing={2}>
          {plans.map((plan, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card
                sx={{
                  backgroundColor: "#1f1f1f87",
                  textAlign: "center",
                  color: "white",
                }}
              >
                <CardContent sx={{ minHeight: "314px" }}>
                  <Box
                    sx={{
                      backgroundColor: plan.color,
                      color: plan.type === "Silver" ? "black" : "white",
                      py: 1,
                      borderRadius: 1,
                    }}
                  >
                    <Typo_Subheading text={plan.type} />
                  </Box>
                  <Box sx={{ py: 2 }}>
                    <ul
                      style={{
                        listStyleType: "none",
                        padding: 0,
                        marginTop: 2,
                        textAlign: "left",
                      }}
                    >
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            justifyContent: "start",
                            marginBottom: "2rem",
                          }}
                        >
                          <CheckCircleIcon
                            sx={{ color: "#4CAF50", marginRight: "8px" }}
                          />
                          <Typo_Subtitle text={feature} />
                        </li>
                      ))}
                    </ul>
                  </Box>
                </CardContent>
                <Box sx={{ py: 2 }}>
                  <Typo_Subtitle text={plan.price} />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

const Overview = () => {
  return (
    <Box
      sx={{
        backgroundImage: {
          xs: "none",
          md: `url(${paradoxposter})`,
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      />

      {/* Content */}
      <Container
        sx={{ position: "relative", zIndex: 1, color: "white", px: 4 }}
      >
        <Grid container spacing={3} justifyContent={"right"}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typo_Heading text="Overview" />
            <Box sx={{ marginBottom: 2 }}>
              <Typo_Basefont
                text="PARADOX IS AN UNDERGROUND
                RAPPER AND ARTIST KNOWN FOR HIS
                INTRICATE LYRICISM, INTROSPECTIVE
                THEMES, AND INNOVATIVE APPROACH
                TO HIP-HOP. A PARADOX CONCERT
                TYPICALLY STANDS OUT FOR ITS RAW,
                ENERGETIC ATMOSPHERE AND DEEP
                CONNECTION WITH THE AUDIENCE.
                THE PERFORMANCE OFTEN BLENDS
                THOUGHT-PROVOKING, PERSONAL
                LYRICS WITH DYNAMIC BEATS AND
                HIGH-ENERGY DELIVERY, WHICH
                RESONATES WITH FANS WHO
                APPRECIATE COMPLEX STORYTELLING
                AND AUTHENTICITY IN HIP-HOP.
                "
              />
            </Box>
            <Box>
              <Typo_Basefont
                text="PARADOX CONCERT IS A BLEND OF
                TECHNICAL SKILL, EMOTIONAL
                DEPTH, AND A STRONG
                CONNECTION BETWEEN ARTIST AND
                FAN. WHETHER YOU’RE A LONGTIME
                LISTENER OR A NEWCOMER TO HIS
                MUSIC, YOU’RE LIKELY TO LEAVE
                WITH A DEEPER APPRECIATION FOR
                HIS ARTISTRY AND A MEMORABLE
                CONCERT EXPERIENCE.
                "
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const AasthaCode = () => {
  return (
    <>
      <Box
        className="Landing"
        sx={{
          position: "relative",
          minHeight: "100vh",
          backgroundImage: `url(${paradoxconcert})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: 10,
          paddingBottom: 10,
          "::before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            background: "linear-gradient(180deg, #000000, rgba(0, 0, 0, 0.57))",
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth={"lg"}>
          {/* Added Globe*/}
          <Box
            sx={{
              position: "absolute",
              top: "0%",
              right: "14%",
              zIndex: 2,
              width: "18vw",
              height: "18vw",
              maxWidth: "100px",
              maxHeight: "100px",
              transform: "translateX(50%)",
            }}
          >
            <Imgbox url={discoglob} cls="globe-img" />
          </Box>

          {/* Added Stars */}
          <Box
            sx={{
              position: "absolute",
              top: 26,
              left: "16%",
              zIndex: 1,
              width: "50px",
              height: "50px",
              opacity: 0.8,
            }}
          >
            <Imgbox url={stars} cls="stars-img" />
          </Box>

          <Box sx={{ zIndex: 100, position: "relative" }}>
            <Grid
              container
              justifyContent="center"
              textAlign="center"
              className="landing"
            >
              <Grid size={10}>
                <Stack direction="column" spacing={2} alignItems={"center"}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typo_Basefont text={"Kahanikaars Presents"} />
                  </Box>

                  <Box sx={{ width: 220 }}>
                    <Imgbox url={logo}></Imgbox>
                  </Box>

                  <Box sx={{ width: 460 }}>
                    <Imgbox url={paradox}></Imgbox>
                  </Box>

                  {/* <Stack
                  direction={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Typo_Smallfont text="PARTERNING WITH" />
                  <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={1}
                    className="sponsers"
                  >
                    <img src={bandhan} alt="Sponsor 1" />
                    <img src={mh} alt="Sponsor 2" />
                  </Stack>
                </Stack> */}

                  <Box sx={{ marginBottom: 0 }}>
                    <Typo_Heading text="30  DEC  2024" />
                  </Box>

                  <Box>
                    <Typo_Subtitle fw="600" text="7:00 PM ONWARDS" />
                  </Box>

                  <Box>
                    <Typo_Subtitle text="Star Queen Hotel, Ajmer, Rajasthan" />
                  </Box>

                  <Box className="spacing">
                    <NavLink to={NavigateTo.Detail}>
                      <button className="bookbtn btn">Book Tickets</button>
                    </NavLink>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ position: "relative", zIndex: 100 }}>
            <Grid container justifyContent={"space-between"}>
              <Grid size={2} sm={12}>
                <Stack
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  spacing={1}
                >
                  <Typo_Smallfont text="OWNED AND MANAGED BY" />
                  <Imgbox url={khanikaar} cls={"partners"}></Imgbox>
                </Stack>
              </Grid>
              <Grid size={3} sm={12}>
                <Stack direction={"column"} alignItems={"center"} spacing={1}>
                  <Typo_Smallfont text="EVENT ORGANIZERS" />
                  <Stack
                    direction="row"
                    spacing={4}
                    justifyContent={"space-between"}
                  >
                    <Imgbox url={artisan} cls={"partners"}></Imgbox>
                    <Imgbox url={aeymann} cls={"partners"}></Imgbox>
                    <Imgbox url={tfn} cls={"partners"}></Imgbox>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box>
        <Container>
          <Overview />
        </Container>
      </Box>

      <Box>
        <Container maxWidth="lg">
          <PricingPlans />
        </Container>
      </Box>
    </>
  );
};

const PriceCard = ({
  title,
  cardicon,
  details = [
    { icon: beer, feature: "Basic Entry" },
    { icon: beer, feature: "Snacks" },
  ],
  price,
}) => {
  return (
    <>
      <Grid size={{ lg: 4, md: 4 }}>
        <Box sx={{ padding: { sm: 2, xs: 2 } }}>
          <Box
            sx={{
              border: "1px solid transparent",
              borderImage: "linear-gradient(45deg, #C700FF, #FF5733) 1",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)",
              minHeight: 400,
              padding: 2.4,
            }}
          >
            <Box sx={{ backgroundImage: `url(${cardbg})` }}>
              {/* Card Title */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                  marginBottom: 2,
                }}
              >
                {/* Background Bar */}
                <Box
                  sx={{
                    width: "40%",
                    height: 14,
                    backgroundColor: "#A30000",
                    position: "absolute",
                    bottom: 0,
                    // zIndex: -1,
                  }}
                ></Box>

                {/* Text */}
                <Box sx={{ marginTop: -1, textAlign: "center" }}>
                  <Box sx={{ position: "relative", zIndex: 1 }}>
                    <Typo_Subheading text={cardicon} />
                  </Box>
                  <Box sx={{ position: "relative", zIndex: 1 }}>
                    <Typo_Subheading text={title} />
                  </Box>
                </Box>
              </Box>

              {/* Card Chips */}
              <Box
                sx={{
                  borderColor: "white",
                  overflow: "hidden",
                  borderRadius: "10px",
                  minHeight: 300,
                  padding: 2,
                }}
              >
                {details.map((item, i) => (
                  <>
                    <Box
                      sx={{
                        display: "inline-block",
                        border: "2px solid #1b1b1b",
                        backgroundColor: "#000000",
                        padding: 0.6,
                        borderRadius: 25,
                        marginBottom: 1,
                      }}
                    >
                      <div className="flx aic">
                        <Box sx={{ marginRight: 1, width: 30, minWidth: 30 }}>
                          <Imgbox url={item.icon} />
                        </Box>
                        <Box sx={{ paddingRight: 1 }}>
                          <Typo_Chip text={item.feature} fw="400" />
                        </Box>
                      </div>
                    </Box>
                  </>
                ))}
              </Box>

              {/* Card Btn */}
              <Box>
                <Stack direction={"row"} justifyContent={"center"}>
                  <Button
                    sx={{
                      background: "#C700FF",
                      color: "#fff",
                      borderRadius: 50,
                      fontSize: { lg: 16, sm: 18, xs: 18 },
                      border: "none",
                      paddingInline: 3.4,
                      textTransform: "none",
                      fontFamily: "Anton",
                      "&:hover": {
                        backgroundColor: "#A300E8",
                      },
                    }}
                  >
                    ₹ {price} /-
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

const Poster = () => {
  return (
    <Container maxWidth={"lg"}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
          <Imgbox url={ultimate}></Imgbox>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
          <Imgbox url={stagenew}></Imgbox>
        </Grid>
      </Grid>
    </Container>
  );
};

const Anshul = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    let modalTimer = setTimeout(() => {
      setOpen(false);
    }, 2000);
    return () => {
      if (modalTimer) clearTimeout(modalTimer);
    };
  }, []);

  return (
    <>
      {/* Hero Section  */}
      <Box
        className="Landing"
        sx={{
          position: "relative",
          minHeight: "100vh",
          backgroundImage: `url(${paradoxconcert})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: 4,
          paddingBottom: 8,
          "::before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            // background: "linear-gradient(180deg, #000000, rgba(0, 0, 0, 0.17))",
            zIndex: 0,
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 100 }}>
          <Container maxWidth="xl">
            {/* Contact Bar*/}
            <Box>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Box>
                  <Link to={"mailto:dunesofcosmos@gmail.com"}>
                    <Chip
                      avatar={<Avatar alt="Natacha" src={mail} />}
                      label="dunesofcosmos@gmail.com"
                      sx={{
                        color: "white",
                        fontSize: 12,
                        fontFamily: "jost",
                        border: 1,
                        borderColor: "#4a4545",
                        background: "#000000c7",
                      }}
                      variant="outlined"
                    />
                  </Link>
                </Box>
                <Box>
                  <Link to={"tel:+918690630405"}>
                    <Chip
                      avatar={<Avatar alt="Natacha" src={call} />}
                      label="+91-8690630405"
                      sx={{
                        color: "white",
                        fontSize: 12,
                        fontFamily: "jost",
                        border: 1,
                        borderColor: "#4a4545",
                        background: "#000000c7",
                      }}
                      variant="outlined"
                    />
                  </Link>
                </Box>
              </Stack>
            </Box>

            {/* Middle transaprent Box */}
            <Box
              sx={{
                padding: 4,
                background: "#000000c7",
                border: 1,
                borderRadius: 2,
                borderColor: "#4a4545",
                marginBlock: 1,
                minHeight: "90vh",
                marginBottom: 4,
              }}
            >
              {/* Spacer */}
              <Box sx={{ padding: { lg: 4, sm: 2, xs: 2 } }}></Box>

              {/* Logo */}
              <Box sx={{ marginBottom: { xs: 2 } }}>
                <Stack direction={"row"} justifyContent={"center"}>
                  <Box sx={{ width: 150 }}>
                    <Imgbox url={logo}></Imgbox>
                  </Box>
                </Stack>
              </Box>

              {/* Performing Paradox */}
              <Box sx={{ marginBottom: { lg: 4, xs: 6 } }}>
                <Stack direction={"row"} justifyContent={"center"}>
                  <Box sx={{ width: 460 }}>
                    <Imgbox url={paradoxperforming}></Imgbox>
                  </Box>
                </Stack>
              </Box>

              {/* Date And Time */}
              <Box sx={{ marginBottom: { lg: 2, xs: 2 } }}>
                {/* Date */}
                <Stack direction={"row"} justifyContent={"center"}>
                  <Box sx={{ marginBottom: 0 }}>
                    <Typography
                      sx={{
                        fontSize: { lg: 38, sm: 34, xs: 36 },
                        fontWeight: 500,
                        color: "#fff",
                        fontFamily: "anton",
                        letterSpacing: 1,
                        marginBottom: "1.4rem",
                      }}
                      variant={"body1"}
                      color="initial"
                    >
                      30th DEC 2024
                    </Typography>
                    {/* <Typo_Heading text="30th DEC 2024" /> */}
                  </Box>
                </Stack>

                {/* Time */}
                <Stack direction={"row"} justifyContent={"center"}>
                  <Box sx={{ marginBottom: 1 }}>
                    <Typo_Subtitle text="From 6:00 PM Onwards" fw="500" />
                  </Box>
                </Stack>
              </Box>

              {/* Address */}
              <Stack direction={"row"} justifyContent={"center"}>
                <Box
                  sx={{
                    marginBottom: { lg: 6, xs: 8 },
                    background: "#000",
                    paddingInline: 2,
                    paddingBlock: 1,
                    textDecoration: "underline",
                    borderRadius: 20,
                  }}
                >
                  <Link
                    to={
                      "https://www.google.com/maps/dir//Lohagal+Panchsheel+Rd,+C+Block,+Panchsheel+Nagar,+Ajmer,+Lohagal,+Rajasthan+305004/@26.5041369,74.5682678,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x396be630b27b083f:0x797a581420e1b4fc!2m2!1d74.6506772!2d26.5041396?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                    }
                    className="tdn"
                  >
                    <Stack direction={"row"}>
                      <Box
                        sx={{
                          paddingRight: { lg: 1, xs: 0 },
                          textAlign: "center",
                        }}
                      >
                        <Typo_Subtitle
                          text="Star Queen Resort, Lohagal Road, Ajmer"
                          fw="500"
                        />
                      </Box>
                      <Box>
                        <LocationOnIcon
                          sx={{
                            fontSize: { lg: 22, md: 22, sm: 22, xs: 28 },
                            fill: "white",
                          }}
                        />
                      </Box>
                    </Stack>
                  </Link>
                </Box>
              </Stack>

              {/* Book Your Tickets Now */}
              <Stack direction={"row"} justifyContent={"center"}>
                <Box sx={{ marginBottom: { lg: 12, xs: 8 } }}>
                  <Link to={"/booking"} color="white">
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        fontSize: 22,
                        paddingInline: { lg: 6, xs: 4 },
                        paddingBlock: { lg: 1.6, xs: 1 },
                        borderRadius: 8,

                        fontFamily: "Anton",
                        background: "#BE0472",
                        ":hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Book Your tickects Now
                    </Button>
                  </Link>
                </Box>
              </Stack>

              {/* Organisers */}
              <Sponserbar />
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Cards and Prices */}
      <Box
        sx={{
          paddingBlock: { lg: 10, md: 8, sm: 6, xs: 6 },
        }}
      >
        <Container maxWidth={"lg"}>
          <Box sx={{ marginBottom: { lg: 4 }, textAlign: "center" }}>
            <Typo_Heading text="Get In the Groove..." />
          </Box>

          <Grid container spacing={4} justifyContent={"center"}>
            <PriceCard
              title={"GOLD"}
              cardicon={<>🌟</>}
              price={"2499"}
              details={[
                {
                  icon: beer,
                  feature: "Entry On 30th",
                },
                {
                  icon: beer,
                  feature: "Free 31st Party Access ",
                },
                {
                  icon: beer,
                  feature: "Experience Lifestyle Area",
                },
                {
                  icon: beer,
                  feature: "Food Stalls and Photobooth Club",
                },
              ]}
            />
            <PriceCard
              title={"FANPIT"}
              cardicon={<>&#128131;</>}
              price={"4999"}
              details={[
                {
                  icon: beer,
                  feature: " Entry (Hottest spot closest to the stage)",
                },
                {
                  icon: beer,
                  feature: "Free ₹500 Food Coupon",
                },
                {
                  icon: beer,
                  feature: "Free 4 pints of beer",
                },
              ]}
            />
            <PriceCard
              title={"VIP"}
              cardicon={<>&#128081;</>}
              price={"14999"}
              details={[
                {
                  icon: beer,
                  feature: "Priority Access to the Event",
                },
                {
                  icon: beer,
                  feature: "Unlimited Premium Food",
                },
                {
                  icon: beer,
                  feature: "Unlimited Premium Liquor",
                },
                {
                  icon: beer,
                  feature:
                    "A night of luxury, comfort and unforgettable moments",
                },
              ]}
            />
          </Grid>
        </Container>
      </Box>

      {/* Overview */}
      <Box>
        <Overview />
      </Box>

      <Box
        sx={{
          paddingBlock: { lg: 2, sm: 4, xs: 4 },
          paddingInline: { sm: 2, xs: 2 },
        }}
      >
        <Poster />
      </Box>

      {/* Overview */}
      <InquiryModal open={open} handleClose={handleClose} />
    </>
  );
};

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearAppState());
  }, []);

  return (
    <>
      {/* <AasthaCode /> */}
      <Anshul />
      <Footer />
    </>
  );
};

export default Landing;
