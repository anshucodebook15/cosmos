import React, { useEffect, useState } from "react";
import "./Commingsoon.scss";

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
import { usePriceHook } from "../../hooks/usePriceHook";
import { useDispatch, useSelector } from "react-redux";
import {
  addorSubTicket,
  addSingleTicket,
  checkoutTotalandTickects,
  fetchSeats,
  SelectBooking,
} from "./BookingSlice";

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
  status,
}) => {
  const { formatPrice, calSingleTicketTotal } = usePriceHook();
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
                    text={calSingleTicketTotal(price, quantity)}
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

const CS = () => {
  return (
    <>
      <h2>Comming Soon...</h2>
    </>
  );
};

const BookingState = () => {
  const dispatch = useDispatch();
  const { seats, error, total } = useSelector(SelectBooking);

  const [buytickets, setBuytickets] = useState([
    {
      id: "diamond@2024",
      area: "Diamond",
      price: 14999,
      count: 0,
      max: 300,
    },
    {
      id: "fanpit@2024",
      area: "Fanpit",
      price: 4999,
      count: 0,
      max: 300,
    },
  ]);

  const [checkoutTotal, setCheckoutTotal] = useState({
    totalPrice: 0,
    totalTicket: 0,
  });

  // New Approch for Ticket App
  const handleAddSingleTicket = (ticketdata) => {
    let newdatastate = [...buytickets].map((item) =>
      item.area === ticketdata.area ? { ...item, count: item.count + 1 } : item
    );
    setBuytickets(newdatastate);
  };

  const handleAddandSubTicket = (sign, area, count) => {
    if (sign === "+") {
      let newdatastate = [...buytickets].map((item) =>
        item.area === area ? { ...item, count: item.count + 1 } : item
      );
      setBuytickets(newdatastate);
    } else if (sign === "-" && count > 0) {
      let newdatastate = [...buytickets].map((item) =>
        item.area === area ? { ...item, count: item.count - 1 } : item
      );
      setBuytickets(newdatastate);
    }
  };

  const calTotalTicketsandPrice = (ticketarr = []) => {
    let totalTicket = 0;
    let totalPrice = 0;

    // Calculate total Price and total ticket
    ticketarr.map((item) => {
      totalTicket = totalTicket + item.count;
      totalPrice = totalPrice + item.count * item.price;
    });

    // Update state
    setCheckoutTotal({
      totalTicket: totalTicket,
      totalPrice: totalPrice,
    });
  };

  // Handle Redux state
  const handleSingleDispatch = (item) => {
    dispatch(addSingleTicket(item));
    dispatch(checkoutTotalandTickects());
  };

  const handleAddSubTicket = (sign, area, count) => {
    dispatch(addorSubTicket({ sign, area, count }));
    dispatch(checkoutTotalandTickects());
  };

  useEffect(() => {
    dispatch(fetchSeats());
  }, []);

  console.log("seats", total);

  return (
    <div className="Details posrel">
      <Container maxWidth="lg">
        <Box sx={{ paddingBlock: "1rem" }}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Box
                sx={{
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
                          {seats &&
                            seats.map((item) => (
                              <div key={item.areaID}>
                                <TicketView
                                  id={item.areaID}
                                  state={item.count}
                                  club={item.area}
                                  quantity={item.count}
                                  price={item.price}
                                  status={item.status}
                                  ticketfn={() =>
                                    handleSingleDispatch(item.areaID)
                                  }
                                  addTicket={() =>
                                    handleAddSubTicket(
                                      "+",
                                      item.areaID,
                                      item.count
                                    )
                                  }
                                  subTicket={() =>
                                    handleAddSubTicket(
                                      "-",
                                      item.areaID,
                                      item.count
                                    )
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

      {/* Checkoutbar */}
      <div className="posab">
        <CheckoutBar totalprice={total.price} totaltickets={total.tickets} />
      </div>
    </div>
  );
};

const Commingsoon = () => {
  return (
    <>
      <CS />
    </>
  );
};

export default Commingsoon;

/**
 * Archived
 * 
 *   const [ticketCount, setTicketCount] = useState({
    Diamond: 0,
    Fanpit: 0,
    Gold: 0,
    Silver: 0,
  });
 * 
 *   const handleAddSingleTicket = (ticketdata) => {
    // Write Steps to handle Ticket State
    setTicketCount({
      ...ticketCount,
      [ticketdata.area]: ticketCount[ticketdata.area] + 1,
    });
  };

  const handleAddSubTicket = (sign, area) => {
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


                              <TicketView
                                state={ticketCount[item.area]}
                                id={item.id}
                                club={item.area}
                                quantity={ticketCount[item.area]}
                                price={item.price}
                                ticketfn={() => handleAddSingleTicket(item)}
                                addTicket={() =>
                                  handleAddSubTicket("+", item.area)
                                }
                                subTicket={() =>
                                  handleAddSubTicket("-", item.area)
                                }
                              /> 



 */
