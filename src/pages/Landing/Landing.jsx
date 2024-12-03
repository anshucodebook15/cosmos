import React, { useState } from "react";
import "./Landing.scss";
import { SelectLanding } from "./LandingSlice";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Navbar from "../../components/Navbar/Navbar";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import { Typo_Heading } from "../../components/Typo/Typo";
import { NavLink } from "react-router";
import { NavigateTo } from "../../routes/Routes";
import { discoglob, stars } from "../../assets";
import Imgbox from "../../components/Imgbox/Imgbox";

const HeadingBar = ({ title, caption, cityicon }) => {
  return (
    <>
      <Box
        className=""
        sx={{
          borderRadius: 2,
          padding: 1,
          backgroundImage:
            "url('https://b.zmtcdn.com/data/o2_assets/deda21ff223f475a14be83c3b6c344bc1722283072.png')",
        }}
      >
        <Grid container>
          <Grid size={6}>
            <h2>{title}</h2>
            <p>{caption}</p>
          </Grid>
          <Grid size={6}>
            <img src={cityicon} alt="" className="w100" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const Landing = () => {
  return (
    <div className="Landing">
      <Container maxWidth={"lg"}>
        <Typo_Heading text="Dunes Of Cosmos" />

        <button>
          <NavLink to={NavigateTo.Detail}>Event Details</NavLink>
        </button>


      </Container>
    </div>
  );
};

export default Landing;
