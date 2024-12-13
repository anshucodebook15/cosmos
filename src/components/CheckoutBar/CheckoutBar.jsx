import React from "react";
import "./CheckoutBar.scss";
import { Box, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Typo_Basefont, Typo_Subheading, Typo_Subtitle } from "../Typo/Typo";
import { usePriceHook } from "../../hooks/usePriceHook";
import { NavLink } from "react-router";

const CheckoutBar = ({ totalprice = 0, totaltickets = 0 }) => {
  const { formatPrice } = usePriceHook();
  return (
    <div className="CheckoutBar">
      <Box sx={{ padding: 3.6 }}>
        <Container>
          <Box sx={{ marginRight: 4 }}>
            <Stack
              direction={"row"}
              justifyContent={"flex-end"}
              alignItems={"flex-end"}
            >
              <Box textAlign={"right"} marginRight={2}>
                <Box>
                  <Typo_Subtitle
                    text={`₹ ${formatPrice(totalprice)}`}
                    fw="600"
                  />
                </Box>
                <Typo_Basefont
                  text={`${totaltickets} Tickets added`}
                  fc="white"
                />
              </Box>
              <Box>
                <button className=" defaultBtn checkoutbtn">
                  <NavLink to={"/checkout"}>
                    <Typo_Subtitle text={`Pay To Proceed`} fw="600" />
                  </NavLink>
                </button>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default CheckoutBar;
