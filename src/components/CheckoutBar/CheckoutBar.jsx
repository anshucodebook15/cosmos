import React from "react";
import "./CheckoutBar.scss";
import { Box, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Typo_Basefont, Typo_Subheading, Typo_Subtitle } from "../Typo/Typo";

const CheckoutBar = () => {
  return (
    <div className="CheckoutBar">
      <Box sx={{ padding: 4 }}>
        <Container>
          <Stack alignItems={"flex-end"}>
            <Box textAlign={'right'}>
              <Box sx={{marginBottom: 1}}>

              <Typo_Subheading text={'$ 13490'} />
              </Box>
              <Typo_Basefont text={"2 Tickets added"} fc="white" />
            </Box>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default CheckoutBar;
