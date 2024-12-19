import React from "react";
import "./Footer.scss";
import { Box, Container, Stack } from "@mui/material";
import { Typo_Smallfont, Typo_Subtitle } from "../Typo/Typo";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <Stack alignItems={"center"}>
          <Box sx={{ padding: 1.4, textAlign: "center" }}>
            <Typo_Subtitle
              text="DUNES-OF-COSMOS © 2024 ALL RIGHTS RESERVED"
              fw="300"
            />
          </Box>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={{ xs: "center" }}
          justifyContent={"center"}
        >
          <Box sx={{ padding: 1.4 }}>
            <Link to={"contact"} className="tdn">
              <Typo_Subtitle text="Contact" fw="300" />
            </Link>
          </Box>
          <Box sx={{ padding: 1.4 }}>
            <Link to={"terms-and-condition"} className="tdn">
              <Typo_Subtitle text="Terms and Conditions" fw="300" />
            </Link>
          </Box>
          <Box sx={{ padding: 1.4 }}>
            <Link to={"#"} className="tdn">
              <Typo_Subtitle text="Owned By The Kahanikaars" fw="300" />
            </Link>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;
