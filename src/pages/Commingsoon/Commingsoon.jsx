import React, { useEffect } from "react";
import "./Commingsoon.scss";
import { Box, Button, Container, Grid2 } from "@mui/material";
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
  p400: "#E32B7E"
}


const TicketBtn = () => {
  return (
    <>
      <Button sx={{ width: "fit-content" }}>Add</Button>
    </>
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
      <Box>
        {/* Ticket price and Action */}
        <Box sx={{ padding: 1, borderBottom: 1 }}>
          <Grid container spacing={0}>
            <Grid size={6}>{/* Ticket Content */}</Grid>
            <Grid size={6}>{/* Ticket Action Btn */}</Grid>
          </Grid>
        </Box>

        {/* Ticket details */}
        <Box sx={{ padding: 1 }}>
          {/* Inner Grey Box */}
          <Box sx={{ padding: 1 }}></Box>
        </Box>
      </Box>
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
      <Box sx={{ padding: 12 }}>
        <Container>
          {/* Banner Box */}
          <Box></Box>

          {/* Ticket Pannel */}
          <Box>
            <TicketView />
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Commingsoon;
