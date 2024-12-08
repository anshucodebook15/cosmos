import "./InquiryModal.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Avatar, Chip, Grid2, Stack, TextField } from "@mui/material";
import AppInput from "../AppInput/AppInput";
import { call } from "../../assets";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {lg: "50%", md: "60%", sm: "90%", xs: "90%"},
  bgcolor: "#000000",
  border: "2px solid #fff",
  boxShadow: 24,
  borderRadius: 2,
  p: {lg: 6, md: 4, sm: 2.4, xs: 2.4},
};

const CounterBtn = ({ state = 1, subTicket, addTicket }) => {
  return (
    <>
      <Box className="counterMBtn">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <button
            className="defaultBtn  counterTabsMBtn"
            onClick={subTicket}
            disabled={state > 0 ? false : true}
          >
            -
          </button>
          <button className="defaultBtn  counterTabsMBtn">{state}</button>
          <button className="defaultBtn  counterTabsMBtn" onClick={addTicket}>
            +
          </button>
        </Stack>
      </Box>
    </>
  );
};

export const InquiryModal = () => {
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box marginBottom={4}>
            <AppInput label="Full Name" placeholder="Ex: Anshul" />
            <AppInput label="Mobile Number" placeholder="Ex: 8058868555" />
            <AppInput label="Email " placeholder="Ex: xyz@gmail.com" />
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <Grid container spacing={0}>
              <Grid
                size={{ lg: 3, md: 6, sm: 6, xs: 6 }}
                padding={1}
                alignSelf={"center"}
              >
                <Box sx={{ marginBottom: 1 }}>
                  <Chip
                    label={"VIP 14,999 /-"}
                    sx={{
                      color: "white",
                      fontSize: 14,
                      fontFamily: "jost",
                      fontWeight: 600,
                      border: 1,
                      borderColor: "#4a4545",
                      background: "#000000c7",
                    }}
                    variant="outlined"
                  />
                </Box>
                <Box>
                  <CounterBtn />
                </Box>
              </Grid>
              <Grid
                size={{ lg: 3, md: 6, sm: 6, xs: 6 }}
                padding={1}
                alignSelf={"center"}
              >
                <Box sx={{ marginBottom: 1 }}>
                  <Chip
                    label={"SILVER 1499 /-"}
                    sx={{
                      color: "white",
                      fontSize: 14,
                      fontFamily: "jost",
                      fontWeight: 600,
                      border: 1,
                      borderColor: "#4a4545",
                      background: "#000000c7",
                    }}
                    variant="outlined"
                  />
                </Box>
                <Box>
                  <CounterBtn />
                </Box>
              </Grid>
              <Grid
                size={{ lg: 3, md: 6, sm: 6, xs: 6 }}
                padding={1}
                alignSelf={"center"}
              >
                <Box sx={{ marginBottom: 1 }}>
                  <Chip
                    label={"GOLD 2,999 /-"}
                    sx={{
                      color: "white",
                      fontSize: 14,
                      fontFamily: "jost",
                      fontWeight: 600,
                      border: 1,
                      borderColor: "#4a4545",
                      background: "#000000c7",
                    }}
                    variant="outlined"
                  />
                </Box>
                <Box>
                  <CounterBtn />
                </Box>
              </Grid>
              <Grid
                size={{ lg: 3, md: 6, sm: 6, xs: 6 }}
                padding={1}
                alignSelf={"center"}
              >
                <Box sx={{ marginBottom: 1 }}>
                  <Chip
                    label={"FANPIT 4,999 /-"}
                    sx={{
                      color: "white",
                      fontSize: 14,
                      fontFamily: "jost",
                      fontWeight: 600,
                      border: 1,
                      borderColor: "#4a4545",
                      background: "#000000c7",
                    }}
                    variant="outlined"
                  />
                </Box>
                <Box>
                  <CounterBtn />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box>
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: 20,
                paddingInline: 3,
                paddingBlock: 1,
                borderRadius: 8,
                fontFamily: "Anton",
                background: "#BE0472",
                ":hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Book Your Ticket with Us
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
