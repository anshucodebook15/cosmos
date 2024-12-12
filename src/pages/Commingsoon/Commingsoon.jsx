import React, { useEffect } from "react";
import "./Commingsoon.scss";
import { Box, Button, Container, Grid2, Stack } from "@mui/material";
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

const TicketAddBtn = () => {
  return (
    <>
      <Box sx={{ bgcolor: `${ts.p400}`, borderRadius: 1, paddingInline:1, marginBottom:1}}>
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
            1
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
          >
            +
          </Button>
        </Stack>
      </Box>
    </>
  );
};

// const TicketBtn = () => {
//   return (
//     <>
//       <Button
//         sx={{
//           width: "fit-content",
//           bgcolor: `${ts.p400}`,
//           color: `${ts.g50}`,
//           fontSize: 16,
//           paddingInline: 6,
//           fontFamily: "Anton",
//         }}
//       >
//         Add
//       </Button>
//     </>
//   );
// };
const Chip = ({ feature, icon }) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        border: "2px solid #C700FF",
        paddingRight: "1px",
        borderRadius: 25,
        marginBottom: 1,
      }}
    >
      <div className="flx aic">
        <Box sx={{ marginRight: 1 }}>
          <Imgbox url={icon} />
        </Box>
        <Box sx={{ paddingRight: 1 }}>
          <Typo_Chip text={feature} fw="400" fs="1.4rem" />
        </Box>
      </div>
    </Box>
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
      <Container maxWidth="md">
        <Box
          sx={{
            border: 1,
            borderColor: `${ts.g100}`,
            borderRadius: 1,
            bgcolor: `${ts.g200}`,
          }}
        >
          {/* Ticket price and Action */}
          <Box
            sx={{
              padding: 2,
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
                    marginBottom: 1.8,
                  }}
                >
                  <Typo_Subheading text="VIP" fs="1.8rem" fw="600" />
                </Box>
                <Box sx={{ marginBottom: 0.2 }}>
                  <Typo_Subheading text="₹1499/-" fs="1.8rem" />
                </Box>
                <Box sx={{}}>
                  <Typo_Basefont
                    text="Mobile ticket | Valid for 1 Person"
                    fs="1.4rem"
                    fw="300"
                  />
                </Box>
              </Grid>
              <Grid size={6}>
                {/* Ticket Action Btn */}
                <Box sx={{ float: "right" }}>
                  {/* <TicketBtn /> */}
                  <TicketAddBtn />
                  <Box sx={{textAlign:"center"}}>
                    <Typo_Subheading text="₹1499/-" fs="1.8rem" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Ticket details */}
          <Box sx={{ padding: 1 }}>
            {/* Inner Grey Box */}
            <Box sx={{ padding: 1, bgcolor: `${ts.g300}`, borderRadius: 1 }}>
              <Box sx={{ marginBottom: 1 }}>
                <Typo_Basefont text="Details" fs="1.4rem" fw="600" />
              </Box>

              <Box>
                <Chip feature="Entry Free" icon={beer} />
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

  // useEffect(() => {
  //   dispatch(fetchSeats());
  // }, []);

  console.log("seats", total);

  return (
    <div className="Commingsoon">
      <Box sx={{padding: { xs: 0, sm: 2, lg: 12 }}}>
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
