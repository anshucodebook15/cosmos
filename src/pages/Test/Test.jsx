import React from "react";
import "./Test.scss";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  Typo_Basefont,
  Typo_Smallfont,
  Typo_Subheading,
  Typo_Subtitle,
} from "../../components/Typo/Typo";
import Navbar from "../../components/Navbar/Navbar";
import ProfileChip from "./ProfileChip";

const TicketBooking = () => {
  return (
    <div className="glassmorph">
      <Box sx={{ marginY: 2 }}>
        <Container maxWidth="lg">
          <Grid container justifyContent={"space-between"}>
            <Grid size={{ xs: 12, sm: 4, md: 4 }}>
              <Box
                sx={{
                  overflow: "hidden",
                  borderRadius: "10px",
                  minHeight: 500,
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 60px -16px",
                }}
              >
                <img
                  src="https://b.zmtcdn.com/data/zomaland/4c99369f4183bf8027e77f0e9cdcba1d1731408176.jpeg"
                  alt=""
                  className="w100"
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 8, md: 8 }}>
              <Box
                sx={{
                  bgcolor: "#000000",
                  marginInline: 2,
                  borderRadius: 2,
                  padding: 2,
                  minHeight: 500,
                }}
              >
                {/* Ticket booking component starts here */}
                <Box
                  sx={{
                    bgcolor: "#121212",
                    borderRadius: "10px",
                    padding: "12px",
                    color: "white",
                    border: "1px solid #535353",
                  }}
                >
                  <Grid container spacing={0} alignItems="center">
                    {/* Header Section */}
                    {/* Left Section (Text) */}
                    <Grid size={10}>
                      <Stack spacing={1}>
                        <Box
                          sx={{
                            display: "inline-block",
                            backgroundColor: "purple",
                            color: "white",
                            padding: "0 2px",
                            fontSize: "12px",
                            fontWeight: "bold",
                            width: "fit-content",
                          }}
                        >
                          VIP
                        </Box>
                        <Typo_Basefont
                          sx={{fw: "800"}}
                          text="₹599/-"
                        />
                        <Typo_Smallfont text=" Mobile ticket | Valid for 1 person" />
                      </Stack>
                    </Grid>

                    {/* Right Section (Button) */}
                    <Grid size={2}>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "hotpink",
                          color: "white",
                          "&:hover": { bgcolor: "deeppink" },
                          textTransform: "none",
                          fontWeight: "bold",
                          padding: "6px 20px",
                          fontSize: "14px",
                          borderRadius: "5px",
                        }}
                      >
                        Add
                      </Button>
                    </Grid>

                    <Divider
                      sx={{
                        borderBottom: "2px dashed #4A4A4A",
                        width: "100%",
                        margin: "0",
                        my: 2,
                      }}
                    />

                    {/* Details Section */}
                    <Grid size={12}>
                      <Box
                        sx={{
                          bgcolor: "#1B1B1B",
                          padding: 1,
                          borderRadius: 1,
                        }}
                      >
                        <ProfileChip title={"Details"} text={"Entry point"} />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default TicketBooking;
