import React, { useEffect } from "react";
import "./Commingsoon.scss";
import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { usePriceHook } from "../../hooks/usePriceHook";
import {
  addorSubTicket,
  addSingleTicket,
  checkoutTotalandTickects,
  fetchSeats,
  SelectBooking,
} from "../Booking/BookingSlice";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid2";
import {
  Typo_Basefont,
  Typo_Chip,
  Typo_Subheading,
  Typo_Subtitle,
} from "../../components/Typo/Typo";
import { beer } from "../../assets";
import Imgbox from "../../components/Imgbox/Imgbox";

// const TicketView = ({
//   id,
//   state = 0,
//   club,
//   price,
//   details,
//   ticketfn,
//   subTicket,
//   addTicket,
//   quantity,
//   status,
// }) => {
//   const { formatPrice, calSingleTicketTotal } = usePriceHook();
//   return (

//     <>
//       <h1>Ticket View</h1>
//     </>
//   );
// };

const ts = {
  g50: "#ffffff",
  g100: "#535353",
  g200: "#1B1B1B",
  g300: "#121212",
  p400: "#E32B7E",
};

const TicketAddBtn = ({ state, addTicket, subTicket }) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: `${ts.p400}`,
          borderRadius: 1,
          paddingInline: 1,
          marginBottom: 1.4,
        }}
      >
        <Stack direction={"row"}>
          <Button
            sx={{
              paddingInline: 1.4,
              margin: 0,
              minWidth: "fit-content",
              bgcolor: `${ts.p400}`,
              color: `${ts.g50}`,
              fontSize: 18,
              fontFamily: "Anton",
              "&:focus": {
                outline: "none",
              },
            }}
            onClick={subTicket}
          >
            -
          </Button>
          <Button
            sx={{
              paddingInline: 1.4,
              margin: 0,
              minWidth: "fit-content",
              bgcolor: `${ts.p400}`,
              color: `${ts.g50}`,
              fontSize: 16,
              fontFamily: "Anton",
              "&:focus": {
                outline: "none",
              },
            }}
          >
            {state}
          </Button>
          <Button
            sx={{
              paddingInline: 1.4,
              margin: 0,
              minWidth: "fit-content",
              bgcolor: `${ts.p400}`,
              color: `${ts.g50}`,
              fontSize: 18,
              fontFamily: "Anton",
              "&:focus": {
                outline: "none",
              },
            }}
            onClick={addTicket}
          >
            +
          </Button>
        </Stack>
      </Box>
    </>
  );
};

const TicketBtn = ({ ticketfn }) => {
  return (
    <>
      <Button
        sx={{
          width: "fit-content",
          bgcolor: `${ts.p400}`,
          color: `${ts.g50}`,
          fontSize: 16,
          paddingInline: 6,
          fontFamily: "Anton",
        }}
        onClick={ticketfn}
      >
        Add
      </Button>
    </>
  );
};

const Chip = ({ feature, icon }) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        border: "2px solid #C700FF",
        paddingRight: "1px",
        borderRadius: 25,
        marginBottom: 1,
        marginRight: 1,
        padding: { lg: 0.6, md: 0.4, sm: 0.4, xs: 0.4 },
      }}
    >
      <div className="flx aic">
        <Box sx={{ marginRight: 1 }}>
          <Imgbox url={icon} />
        </Box>
        <Box sx={{ paddingRight: 1.4 }}>
          <Typography
            sx={{
              fontSize: { lg: 14, md: 14, sm: 14, xs: 12 },
              fontWeight: 500,
              color: "white",
              fontFamily: "jost",
              letterSpacing: 1.1,
            }}
            variant={"body1"}
            color="initial"
          >
            {feature}
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

const TicketClass = ({ text }) => {
  return (
    <Typography
      sx={{
        fontSize: { lg: 24, md: 24, sm: 22, xs: 20 },
        fontWeight: 600,
        color: "white",
        fontFamily: "Anton",
        letterSpacing: 1.1,
      }}
      variant={"body1"}
      color="initial"
    >
      {text}
    </Typography>
  );
};

const TicketPrice = ({ text }) => {
  return (
    <Typography
      sx={{
        fontSize: { lg: 24, md: 24, sm: 22, xs: 20 },
        fontWeight: 600,
        color: "white",
        fontFamily: "Anton",
        letterSpacing: 1.1,
      }}
      variant={"body1"}
      color="initial"
    >
      {text}
    </Typography>
  );
};

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
      <Container maxWidth="lg">
        <Box
          sx={{
            border: 1,
            borderColor: `${ts.g100}`,
            borderRadius: 1,
            bgcolor: `${ts.g200}`,
            marginBottom: 4,
          }}
        >
          {/* Ticket price and Action */}
          <Box
            sx={{
              padding: { lg: 2.6, md: 2.4, sm: 2, xs: 2 },
              borderBottom: 1,
              borderColor: `${ts.g100}`,
              borderBottomStyle: "dashed",
            }}
          >
            <Grid container spacing={0} alignItems={"center"}>
              <Grid size={6}>
                {/* Ticket Content */}
                <Box
                  sx={{
                    bgcolor: `${ts.p400}`,
                    width: "fit-content",
                    marginBottom: 1,
                  }}
                >
                  <TicketClass text={club} />
                </Box>
                <Box sx={{ marginBottom: 0.4 }}>
                  <TicketClass text={"₹1,499 /-"} />
                </Box>
                <Box sx={{}}>
                  <Typo_Basefont
                    text="Mobile ticket | Valid for 1 person"
                    fs="1.4rem"
                    fw="300"
                  />
                </Box>
              </Grid>
              <Grid size={6}>
                {/* Ticket Action Btn */}
                <Box sx={{ float: "right" }}>
                  <Box>
                    {state > 0 ? (
                      <>
                        <TicketAddBtn
                          state={state}
                          subTicket={subTicket}
                          addTicket={addTicket}
                        />
                        <Box sx={{ textAlign: "center" }}>
                          <Typo_Subheading
                            text={`${calSingleTicketTotal(price, quantity)}`}
                            fs="1.4rem"
                          />
                        </Box>
                      </>
                    ) : (
                      <>
                        <TicketBtn ticketfn={ticketfn} />
                      </>
                    )}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Ticket details */}
          <Box sx={{ padding: { lg: 2, md: 2, sm: 2, xs: 1.6 } }}>
            {/* Inner Grey Box */}
            <Box
              sx={{
                padding: { lg: 2, md: 2, sm: 2, xs: 1.6 },
                bgcolor: `${ts.g300}`,
                borderRadius: 1,
              }}
            >
              <Box sx={{ marginBottom: 1 }}>
                <Typo_Basefont text="Details" fs="1.6rem" fw="600" />
              </Box>

              <Box>
                {/* <Chip feature="Entry Free" icon={beer} />
                <Chip feature="Entry Free" icon={beer} />
                <Chip feature="Entry Free" icon={beer} /> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

const Commingsoon = () => {
  const dispatch = useDispatch();
  const { seats, error, total } = useSelector(SelectBooking);

  // handle ticket Event
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
    <div className="Commingsoon">
      <Box sx={{ padding: { xs: 0, sm: 2, lg: 12 } }}>
        <Container>
          {/* Banner Box */}
          <Box></Box>

          {/* Ticket Pannel */}
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
                    ticketfn={() => handleSingleDispatch(item.areaID)}
                    addTicket={() =>
                      handleAddSubTicket("+", item.areaID, item.count)
                    }
                    subTicket={() =>
                      handleAddSubTicket("-", item.areaID, item.count)
                    }
                  />
                </div>
              ))}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Commingsoon;
