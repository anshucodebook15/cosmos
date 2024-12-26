import React from "react";
import "./Sponserbar.scss";

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

import Imgbox from "../../components/Imgbox/Imgbox";
import {
  aeymann,
  artisan,
  bandhan,
  CarlsB,
  FI_MP,
  khanikaar,
  mh,
  nf,
  rt,
  tfn,
  Tuborg,
} from "../../assets";

const Sponserbar = () => {
  return (
    <Box
      sx={{
        paddingBlock: 4,
        background: {lg:"#00000082", sm:"#0000000", xs:"#000000"},
        border: 1,
        borderRadius: 2,
        borderColor: "#4a4545",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={0} justifyContent={"space-between"}>
          <Grid size={{ lg: 3, md: 3, xs: 12 }}>
            <Box sx={{ marginBottom: { xs: 4 } }}>
              <Box sx={{ textAlign: "center", marginBottom: 3 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { lg: 22, md: 22, sm: 18, xs: 18 },
                    fontWeight: 500,
                    fontFamily: "jost",
                    color: "white",
                  }}
                >
                  Owned And Managed By
                </Typography>
              </Box>
              <Stack direction={"row"} justifyContent={"center"}>
                <Box
                  sx={{
                    width: {
                      lg: 80,
                      md: 80,
                      sm: 80,
                      xs: 80,
                      marginInline: 2,
                    },
                  }}
                >
                  <Imgbox url={khanikaar} />
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ lg: 3, md: 3, xs: 12 }}>
            <Box sx={{ marginBottom: 4 }}>
              <Box sx={{ textAlign: "center", marginBottom: 3 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { lg: 22, md: 22, sm: 18, xs: 18},
                    fontWeight: 500,
                    fontFamily: "jost",
                    color: "white",
                  }}
                >
                  Event Organisers
                </Typography>
              </Box>
              <Stack direction={"row"} justifyContent={"center"}>
                <Box
                  sx={{
                    width: {
                      lg: 80,
                      md: 80,
                      sm: 80,
                      xs: 80,
                      marginInline: 2,
                    },
                  }}
                >
                  <Imgbox url={artisan} />
                </Box>

                <Box
                  sx={{
                    width: {
                      lg: 80,
                      md: 80,
                      sm: 80,
                      xs: 80,
                      marginInline: 2,
                    },
                  }}
                >
                  <Imgbox url={aeymann} />
                </Box>
                <Box
                  sx={{
                    width: {
                      lg: 80,
                      md: 80,
                      sm: 80,
                      xs: 80,
                      marginInline: 2,
                    },
                  }}
                >
                  <Imgbox url={rt} />
                </Box>
                <Box
                  sx={{
                    width: {
                      lg: 80,
                      md: 80,
                      sm: 80,
                      xs: 80,
                      marginInline: 2,
                    },
                  }}
                >
                  <Imgbox url={nf} />
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ lg: 3, md: 3, xs: 12 }}>
            <Box sx={{ marginBottom: { xs: 4 } }}>
              <Box sx={{ textAlign: "center", marginBottom: 3 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { lg: 22, md: 22, sm: 18, xs: 18 },
                    fontWeight: 500,
                    fontFamily: "jost",
                    color: "white",
                  }}
                >
                  Media Partner
                </Typography>
              </Box>
              <Stack direction={"row"} justifyContent={"center"}>
                <Box
                  sx={{
                    width: {
                      lg: 80,
                      md: 140,
                      sm: 120,
                      xs: 80,
                      marginInline: 2,
                    },
                  }}
                >
                  <Imgbox url={FI_MP} />
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={0} justifyContent={"center"}>
          <Grid size={{ lg: 6, md: 6, xs: 12 }}>
            <Box sx={{ marginBottom: { xs: 4 } }}>
              <Box sx={{ textAlign: "center", marginBottom: 3 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { lg: 22, md: 22, sm: 18, xs: 18 },
                    fontWeight: 500,
                    fontFamily: "jost",
                    color: "white",
                  }}
                >
                  Partnering With
                </Typography>
              </Box>
              <Stack direction={"row"} justifyContent={"space-around"}>
                <Box
                  sx={{
                    width: {
                      lg: 80,
                      md: 80,
                      sm: 80,
                      xs: 80,
                      marginInline: 2,
                    },
                  }}
                >
                  <Imgbox url={bandhan} />
                </Box>
                <Box
                  sx={{
                    width: {
                      lg: 80,
                      md: 80,
                      sm: 80,
                      xs: 80,
                      marginInline: 2,
                    },
                  }}
                >
                  <Imgbox url={mh} />
                </Box>
                <Box
                  sx={{
                    width: {
                      lg: 80,
                      md: 80,
                      sm: 80,
                      xs: 80,
                      marginInline: 2,
                    },
                  }}
                >
                  <Imgbox url={tfn} />
                </Box>
                <Box
                  sx={{
                    width: {
                      lg: 80,
                      md: 80,
                      sm: 80,
                      xs: 80,
                      marginInline: 2,
                    },
                  }}
                >
                  <Imgbox url={Tuborg} />
                </Box>
                <Box
                  sx={{
                    width: {
                      lg: 80,
                      md: 80,
                      sm: 80,
                      xs: 80,
                      marginInline: 2,
                    },
                  }}
                >
                  <Imgbox url={CarlsB} />
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Sponserbar;
