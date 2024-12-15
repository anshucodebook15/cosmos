import React from "react";
import "./CheckoutBar.scss";
import { Box, Button, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Typo_Basefont, Typo_Subheading, Typo_Subtitle } from "../Typo/Typo";
import { usePriceHook } from "../../hooks/usePriceHook";
import { useNavigate, NavLink } from "react-router";
import ActionButton from "../ActionButton/ActionButton";
import { ts } from "../../theme/apptheme";

// const ts = {
//   g50: "#ffffff",
//   g100: "#535353",
//   g200: "#1B1B1B",
//   g300: "#121212",
//   p400: "#E32B7E",
// };
const CheckoutBar = ({ totalprice = 0, totaltickets = 0 }) => {
  const navigate = useNavigate();

  const { formatPrice, formatShowPrice } = usePriceHook();
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
              <Box textAlign={"right"} marginRight={{ lg: 2, xs: 3 }}>
                <Box>
                  <Typo_Subtitle
                    text={`₹ ${formatShowPrice(totalprice)}`}
                    fw="600"
                  />
                </Box>
                <Typo_Basefont
                  text={`${totaltickets} Tickets added`}
                  fc="white"
                />
              </Box>
              <Box>
                <ActionButton
                  text={"Pay To Proceed"}
                  disabled={false}
                  onclick={() => navigate("/checkout")}
                />

                {/* <Button
                  sx={{
                    width: "fit-content",
                    bgcolor: `${ts.p400}`,
                    color: `${ts.g50}`,
                    fontSize: 16,
                    paddingInline: { lg: 6, sm: 1.6, xs: 1.6 },
                    fontFamily: "Jost",
                    textTransform: "none",
                    "&:disabled": {
                      background: `${ts.g300}`,
                      color: `${ts.g100}`,
                      borderColor: `${ts.g100}`,
                      border: 1,
                    },
                  }}
                  onClick={() => navigate("/checkout")}
                  disabled={false}
                >
                  Proceed to Pay
                </Button> */}
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default CheckoutBar;
