import React, { useState } from "react";
import "./Landing.scss";
import { SelectLanding } from "./LandingSlice";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid2";
import { Box, Stack } from "@mui/material";
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
  concertbg,
  discoglob,
  DOClogo,
  logo,
  paradox,
  stars,
} from "../../assets";
import Imgbox from "../../components/Imgbox/Imgbox";

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

const Landing = () => {
  return (
    <Box
      className="Landing"
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundImage: `url(${concertbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: 10,
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

      {/* Added Stars
       <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%", 
          zIndex: 1,
          width: "200px", 
          height: "200px",
          opacity: 0.8,
        }}
      >
        <Imgbox url={stars} cls="stars-img" />
      </Box> */}

      <Container maxWidth={"lg"}>
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

                <Box>
                  <Typo_Basefont text="Co-Powered By" sx={{ mb: 1 }} />
                  <Stack direction="row" justifyContent="center" spacing={1}>
                    <img src="src\assets\image 5.png" alt="Sponsor 1" />
                    <img src="src\assets\image 6.png" alt="Sponsor 2" />
                  </Stack>
                </Box>

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
      </Container>
    </Box>
  );
};

export default Landing;
