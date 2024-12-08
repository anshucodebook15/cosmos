import React, { useState } from "react";
import "./test.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
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
  Typo_Heading,
  Typo_Subheading,
  Typo_Subtitle,
} from "../../components/Typo/Typo";
import { beer, cardbg, mail } from "../../assets";

// const plans = [
//   {
//     type: "Silver",
//     color: "#d3d3d36b",
//     features: ["Entry to event"],
//     price: "₹1,499",
//   },
//   {
//     type: "Gold",
//     color: "#FFD700c7",
//     features: [
//       "Entry to event",
//       "₹500 coupons redeemable for food or beverages.",
//     ],
//     price: "₹2,999",
//   },
//   {
//     type: "Fan Pit",
//     color: "#FFA500c7",
//     features: [
//       "Entry to event with access to the fan pit (closest to the stage).",
//       "₹500 coupons redeemable for food or beverages",
//       "4 pints of beer included.",
//     ],
//     price: "₹4,999",
//   },
//   {
//     type: "VIP",
//     color: "#FF6347c7",
//     features: [
//       "Entry to event",
//       "Priority access",
//       "Unlimited premium food & drinks",
//     ],
//     price: "₹14,999",
//   },
// ];

// const PricingPlanstest = () => {
//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         backgroundColor: "#000000",
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         // backgroundColor: "#050505",
//         color: "white",
//         py: 5,
//       }}
//     >
//       <Container maxWidth="lg">
//         <Box sx={{ textAlign: "center", marginBottom: 3 }}>
//           <Typo_Heading text="Ticket Pricing Plans" textAlign="center" />
//         </Box>
//         <Grid container spacing={2}>
//           {plans.map((plan, index) => (
//             <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
//               <Card
//                 sx={{
//                   backgroundColor: "#FFFFFF1A",
//                   border: "1px solid rgba(255, 255, 255, 0.2)",
//                   backdropFilter: "blur(10px)",
//                   //   borderRadius: 2,
//                   // backgroundColor: "#1f1f1f87",
//                   textAlign: "center",
//                   color: "white",
//                   padding: 0,
//                 }}
//               >
//                 <CardContent sx={{ minHeight: "310px" }}>
//                   <Box
//                     sx={{
//                       backgroundColor: plan.color,
//                       color: plan.type === "Silver" ? "black" : "white",
//                       //   borderRadius: 1,
//                       paddingX: 1,
//                       paddingY: 0.5,
//                     }}
//                   >
//                     <Typo_Subheading text={plan.type} />
//                   </Box>
//                   <Box sx={{ py: 2 }}>
//                     <ul
//                       style={{
//                         listStyleType: "none",
//                         padding: 0,
//                         marginTop: 2,
//                         textAlign: "left",
//                       }}
//                     >
//                       {plan.features.map((feature, i) => (
//                         <li
//                           key={i}
//                           style={{
//                             display: "flex",
//                             justifyContent: "start",
//                             marginBottom: "2rem",
//                           }}
//                         >
//                           <Chip
//                       avatar={<Avatar alt="Natacha" src={mail} />}
//                       label="anshul@dunesofcosmos.com"
//                       sx={{
//                         color: "white",
//                         fontSize: 14,
//                         fontFamily: "jost",
//                         border: 1,
//                         borderColor: "#4a4545",
//                         background: "#000000c7",
//                       }}
//                       variant="outlined"
//                     />
//                           {/* <CheckCircleIcon
//                             sx={{
//                               color: "#92d695",
//                               marginRight: "8px",
//                               marginTop: "1.6px",
//                             }}
//                           />
//                           <Typo_Subtitle text={feature} /> */}
//                         </li>
//                       ))}
//                     </ul>
//                   </Box>
//                 </CardContent>
//                 <Box
//                   sx={{
//                     paddingY: 1,
//                     border: "1px solid rgba(255, 255, 255, 0.2)",
//                     backgroundColor: plan.color,
//                     borderRadius: 1,
//                     marginX: 1,
//                   }}
//                 >
//                   <Typo_Subtitle text={plan.price} fw="700" />
//                 </Box>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

const ChipExample = ({ labelname, icon }) => {
  return (
    <Chip
      label={labelname}
      icon={
        <Box
          sx={{
            width: 25,
            height: 25,
            backgroundImage: `url(${icon})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "50%",
          }}
        />
      }
      sx={{
        backgroundColor: "#000",
        border: "1px solid #C700FF",
        color: "#fff",
        fontWeight: 500,
        fontSize: "1.3rem",
        width: "fit-content",
        px: 0.5,
      }}
    />
  );
};

const CustomCard = () => {
  return (
    <Card
      sx={{
        width: "100%",
        minHeight: 400,
        position: "relative",
        backgroundColor: "#000",
        borderRadius: 2,
        color: "white",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Decorative Background (Wave) */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${cardbg})`,
          backgroundSize: "cover",
          zIndex: 0,
        }}
      ></Box>

      {/* Card Content */}
      <CardContent
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          flexGrow: 1,
        }}
      >
        {/* Card Title */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            width: "100%",
          }}
        >
          {/* Background Bar */}
          <Box
            sx={{
              width: "30%",
              height: 12,
              backgroundColor: "#A30000",
              position: "absolute",
              bottom: 0,
              zIndex: -1,
            }}
          ></Box>

          {/* Text */}
          <Typo_Subheading text="FANPIT" />
        </Box>

        {/* Features */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 2,
            alignItems: "flex-start",
            width: "75%",
          }}
        >
          <ChipExample labelname={"Snacks"} icon={beer} />
          <ChipExample labelname={"Entry to the event"} icon={beer} />
          <ChipExample labelname={"Priority Access"} icon={beer} />
        </Box>

        {/* Price */}
        <Box
          sx={{
            mt: "auto",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#C700FF",
              color: "#fff",
              px: 4,
              py: 1,
              textTransform: "none",
              //   border: "1px solid #FFF",
              borderRadius: 5,
              width: "50%",
              "&:hover": {
                backgroundColor: "#A300E8",
              },
            }}
          >
            <Typo_Subtitle text="₹1,499/-" fw="700" />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
