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
          <Box sx={{ padding: 1.4 }}>
            <Typo_Subtitle
              text="DUNES-OF-COSMOS © 2024 ALL RIGHTS RESERVED"
              fw="300"
            />
          </Box>
        </Stack>
        <Stack direction={"row"} alignItems={""}>
          <Box sx={{ padding: 1.4 }}>
            <Link to={"contact"} className="tdn">
            <Typo_Subtitle text="Contact" fw="300" />
            </Link>
          </Box>
          <Box sx={{ padding: 1.4 }}>
            <Link to={"terms-and-condition"} className="tdn">
            <Typo_Subtitle text="Terms and Condition" fw="300" />
            </Link>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default Footer;
