import React, { useState } from "react";
import "./Booking.scss";

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
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import IconTitle from "../../components/IconTitle/IconTitle";
import { calender, clock, concertbg, map, ticket } from "../../assets";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { appcol } from "../../theme/apptheme";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { NavLink } from "react-router";
import { NavigateTo } from "../../routes/Routes";
import Glassmorph from "../../components/Glassmorph/Glassmorph";
import { seats } from "../../json/cosmosdata";
import CheckoutBar from "../../components/CheckoutBar/CheckoutBar";

const formatPrice = (price) => {
  let total = price;

  let formatNum = total.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  console.log(formatNum);

  return formatNum;
};

const calculateTotal = (price, quantity) => {
  const total = price * quantity;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(total);
};

const TotalCheckoutPrice = () => { };

const TicketView = ({
  id,
  state = 0,
  club,
  price,
  details,
  ticketfn,
  subTicket,
  addTicket,
  quantity,
}) => {
  return (
    <>
      <Box sx={{ padding: 2, bgcolor: "white", borderBottom: 1 }}>
        <Stack justifyContent={"space-between"} direction={"row"}>
          <Box sx={{ paddingRight: 2 }}>
            <Box
              sx={{ borderBottom: 1, paddingBottom: 0.4, marginBottom: 0.4 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: 16,
                  fontFamily: "jost",
                  fontWeight: 500,
                  color: appcol.font_col_dark_blue,
                  background: "#eee",
                  paddingInline: 1,
                }}
              >
                {club}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: 16,
                fontFamily: "jost",
                fontWeight: 600,
                color: appcol.font_col_dark_blue,
              }}
            >
              ₹ {formatPrice(price)}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: 14,
                fontFamily: "jost",
                fontWeight: 400,
                color: appcol.font_col_dark_blue,
              }}
            >
              Mobile ticket |{" "}
              <Link sx={{ textDecoration: "none", fontWeight: 500 }}>
                Valid for only 1 Person
              </Link>
            </Typography>

            <Box sx={{ paddingBlock: 0.2 }}>
              <button className="defaultBtn">Details</button>
            </Box>
          </Box>

          <Box>
            {state > 0 ? (
              <>
                <Box className="counterBtn">
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <button
                      className="defaultBtn  counterTabsBtn"
                      onClick={subTicket}
                      disabled={state > 0 ? false : true}
                    >
                      -
                    </button>
                    <button className="defaultBtn  counterTabsBtn">
                      {state}
                    </button>
                    <button
                      className="defaultBtn  counterTabsBtn"
                      onClick={addTicket}
                    >
                      +
                    </button>
                  </Stack>
                </Box>

                <Box sx={{ textAlign: "center", paddingBlock: 0.8 }}>
                  <Typo_Subtitle
                    text={calculateTotal(price, quantity)}
                    fc={appcol.font_col_dark_blue}
                    fw="600"
                  />
                </Box>
              </>
            ) : (
              <Box>
                <button className="defaultBtn addbtn" onClick={ticketfn}>
                  Add
                </button>
              </Box>
            )}
          </Box>
        </Stack>
      </Box>
    </>
  );
};

const Booking = () => {
  const [ticketCount, setTicketCount] = useState({
    Diamond: 0,
    Fanpit: 0,
    Gold: 0,
    Silver: 0,
  });
  const [totalTicketPrice, setTotalTicketPrice] = useState(0);

  const handleTicketCount = (ticketdata) => {
    // Write Steps to handle Ticket State
    setTicketCount({
      ...ticketCount,
      [ticketdata.area]: ticketCount[ticketdata.area] + 1,
    });
  };

  const handleMoreTicket = (sign, area) => {
    console.log("Btn Click");

    if (sign === "+") {
      console.log("Add click");

      setTicketCount({
        ...ticketCount,
        [area]: ticketCount[area] + 1,
      });
    } else if (sign === "-" && ticketCount[area] > 0) {
      setTicketCount({
        ...ticketCount,
        [area]: ticketCount[area] - 1,
      });

      console.log("sub click");
    }

    // if (sign === '+') {
    //   setTicketCount({
    //     ...ticketCount,
    //     [ticketCount.area]: ticketCount[ticketCount.area] + 1,
    //   });
    // } else if (sign === '-' && ticketCount[area] > 0) {

    //   setTicketCount({
    //     ...ticketCount,
    //     [ticketCount.area]: ticketCount[ticketCount.area] - 1,
    //   });
    // }

    console.log(sign, area);
  };

  console.log(ticketCount);

  return (
    <div className="Details">
      <Glassmorph
        uri={
          "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ladies-night-party-landscape-poster-flyer-design-template-cc9e9c66c4e308161db9c7dcaa27bffe_screen.jpg?ts=1601365829"
        }
      />

      <Container maxWidth="lg">
        {/* <Breadcrumb /> */}

        <Box sx={{ paddingBlock: "1rem" }}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Box
                sx={{
                  // padding: {
                  //   lg: "3rem",
                  // },
                  // background: "white",
                  borderRadius: "10px",
                  margin: "1rem",
                }}
              >
                {/*Poster & Tickect Slection Grid */}
                <Box sx={{ marginBottom: "2.8rem" }}>
                  <Grid container spacing={0} justifyContent={"space-between"}>
                    <Grid size={4}>
                      <Box
                        sx={{
                          overflow: "hidden",
                          borderRadius: "10px",
                          minHeight: 500,
                          boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 60px -16px",
                        }}
                      >
                        <img
                          src="https://b.zmtcdn.com/data/zomaland/4c99369f4183bf8027e77f0e9cdcba1d1731408176.jpeg"
                          alt=""
                          className="w100"
                        />
                      </Box>
                    </Grid>
                    <Grid size={8}>
                      <Box
                        sx={{
                          bgcolor: "#f1f1f1",
                          marginInline: 2,
                          borderRadius: 2,
                          padding: 2,
                          minHeight: 500,
                        }}
                      >
                        <Box sx={{ marginBottom: 2 }}>
                          <Typo_Subheading
                            text="Add Ticket"
                            fc={appcol.font_col_dark_blue}
                          />
                        </Box>

                        <Box>
                          {seats.map((item) => (
                            <div key={item.id}>
                              <TicketView
                                state={ticketCount[item.area]}
                                id={item.id}
                                club={item.area}
                                quantity={ticketCount[item.area]}
                                price={item.price}
                                ticketfn={() => handleTicketCount(item)}
                                addTicket={() =>
                                  handleMoreTicket("+", item.area)
                                }
                                subTicket={() =>
                                  handleMoreTicket("-", item.area)
                                }
                              />
                            </div>
                          ))}
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>


      <CheckoutBar />
    </div>
  );
};

export default Booking;
