import React, { useState } from "react";
import "./Landing.scss";
import { SelectLanding } from "./LandingSlice";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid2";
import { Box, Card, CardContent, Stack } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  Typo_Basefont,
  Typo_Heading,
  Typo_Smallfont,
  Typo_Subheading,
  Typo_Subtitle,
} from "../../components/Typo/Typo";
import { NavLink } from "react-router";
import { NavigateTo } from "../../routes/Routes";
import {
  aeymann,
  artisan,
  bandhan,
  concertbg,
  discoglob,
  DOClogo,
  khanikaar,
  logo,
  mh,
  overview,
  paradox,
  paradoxconcert,
  paradoxoverview,
  paradoxposter,
  stage,
  stars,
  table,
  tfn,
  ticketdetails,
} from "../../assets";
import Imgbox from "../../components/Imgbox/Imgbox";
import Glassmorph from "../../components/Glassmorph/Glassmorph";

// const HeadingBar = ({ title, caption, cityicon }) => {
  
//   return (
//     <>
//       <Box
//         className=""
//         sx={{
//           borderRadius: 2,
//           padding: 1,
//           backgroundImage:
//             "url('https://b.zmtcdn.com/data/o2_assets/deda21ff223f475a14be83c3b6c344bc1722283072.png')",
//         }}
//       >
//         <Grid container>
//           <Grid size={6}>
//             <h2>{title}</h2>
//             <p>{caption}</p>
//           </Grid>
//           <Grid size={6}>
//             <img src={cityicon} alt="" className="w100" />
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

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
    features: ["Entry to event", "₹500 coupons redeemable for food or beverages."],
    price: "₹2,999",
  },
  {
    type: "Fan Pit",
    color: "#FFA500b0",
    features: ["Entry to event with access to the fan pit (closest to the stage).", "₹500 coupons redeemable for food or beverages", "4 pints of beer included."],
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
    <Box sx={{ backgroundColor: "#050505", color: "white", py: 6}}>
      <Container maxWidth= "lg">
        <Box sx={{textAlign:"center", marginBottom: 3}}>
          <Typo_Heading text="Ticket Pricing Plans" textAlign="center"/> 
        </Box>
        <Grid container spacing={2}>
          {plans.map((plan, index) => (
            <Grid size={{ xs:12, sm:6, md:3 }} key={index}>
              <Card
                sx={{
                  backgroundColor: "#1f1f1f87",
                  textAlign: "center",
                  color: "white",
                }}
              >
                <CardContent sx={{minHeight: "314px"}}>
                  <Box
                    sx={{
                      backgroundColor: plan.color,
                      color: plan.type === "Silver" ? "black" : "white",
                      py: 1,
                      borderRadius: 1,
                    }}
                  >
                    <Typo_Subheading text= {plan.type}/>
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
                            sx={{ color: "#4CAF50", marginRight: "8px"}}
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
        position: 'relative',
        height: '80vh', // Adjust as needed
        backgroundImage: `url(${paradoxposter})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      />

      {/* Content */}
      <Container sx={{ position: 'relative', zIndex: 1, color: 'white', py: 6 }}>
        <Grid container spacing={3} justifyContent={"right"}>
          <Grid size={{ xs:12, sm:6 }} >
            <Typo_Heading text="Overview"/>
            <Box sx={{marginBottom: 2}}>
              <Typo_Basefont text="PARADOX IS AN UNDERGROUND
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
                "/>
            </Box>
           <Box>
            <Typo_Basefont text="PARADOX CONCERT IS A BLEND OF
                TECHNICAL SKILL, EMOTIONAL
                DEPTH, AND A STRONG
                CONNECTION BETWEEN ARTIST AND
                FAN. WHETHER YOU’RE A LONGTIME
                LISTENER OR A NEWCOMER TO HIS
                MUSIC, YOU’RE LIKELY TO LEAVE
                WITH A DEEPER APPRECIATION FOR
                HIS ARTISTRY AND A MEMORABLE
                CONCERT EXPERIENCE.
                "/>
           </Box>
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const Landing = () => {
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
              bottom: "8%",
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
                  <Box>
                    <Typo_Smallfont text={"Kahanikaars Presents"} />
                  </Box>

                  <Box className="doc-logo">
                    <Imgbox url={logo}></Imgbox>
                  </Box>

                  <Box className="para-logo">
                    <Imgbox url={paradox}></Imgbox>
                  </Box>

                  <Stack
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
                  </Stack>

                  <Box className="spacing">
                    <Typo_Subheading text="30  DEC  2024" />
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

          <Box sx={{position:"relative", zIndex:100 }}>
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
            <Overview/>
        </Container>
      </Box>

      <Box>
        <Container maxWidth="lg">
          <PricingPlans/>
        </Container>
      </Box>

     
      
      


     
    </>
  );
};

export default Landing;
