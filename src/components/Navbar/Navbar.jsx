import React from "react";
import "./Navbar.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import { logo } from "../../assets";
import { Typo_Subtitle } from "../Typo/Typo";



const Navbar = () => {
  return (
    <div className="Navbar">
      <Container maxWidth="lg">
        <Box sx={{ padding: 2 }}>
          <Grid container alignItems={"center"}>
            <Grid size={6}>
              <img src={logo} alt="" className="logo" />
            </Grid>
            <Grid size={6}>
              <div className="floatright">
                  <div className="avtarchip flx aic">
                    <div className="avtarchip_logo">

                    </div>
                    <div className="avtarchip_text">
                      <Typo_Subtitle text={"Anshu"} fw="500"/>
                    </div>

                  </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Navbar;
