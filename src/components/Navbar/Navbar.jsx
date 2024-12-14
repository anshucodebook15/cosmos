import React from "react";
import "./Navbar.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import { call, logo } from "../../assets";
import { Typo_Subtitle } from "../Typo/Typo";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Container maxWidth="lg">
        <Box sx={{ paddingBlock: 2, paddingInline:1.2 }}>
          <Grid container alignItems={"center"}>
            <Grid size={6}>
              <Box sx={{paddingTop: 0.2}}>
                <Link to={"/"}>
                  <img src={logo} alt="" className="logo" />
                </Link>
              </Box>
            </Grid>
            <Grid size={6}>
              <div className="floatright">
                <div className="avtarchip flx aic">
                  <div className="avtarchip_logo">
                    <img src={call} alt="" className="logo" />
                  </div>
                  <div className="avtarchip_text">
                    <Link to={"/Contact"}>
                      <Box sx={{ paddingRight: 1 }}>
                        <Typo_Subtitle text={"Contact"} fw="500" />
                      </Box>
                    </Link>
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
