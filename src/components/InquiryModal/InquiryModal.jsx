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
import axios from "axios";
import { instance } from "../../api/ApiMethods";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: "50%", md: "60%", sm: "90%", xs: "90%" },
  bgcolor: "#000000",
  border: "2px solid #fff",
  boxShadow: 24,
  borderRadius: 2,
  p: { lg: 6, md: 4, sm: 2.4, xs: 2.4 },
};

const CounterBtn = ({ state = 0, subTicket, addTicket }) => {
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

export const InquiryModal = ({ open, handleClose }) => {
  const [Inquery, setInquery] = useState({
    name: "",
    email: "",
    mobile: "",
    ticket: [
      {
        seat: "VIP",
        price: 14999,
        count: 0,
      },
      {
        seat: "FANPIT",
        price: 4999,
        count: 0,
      },
      {
        seat: "GOLD",
        price: 2999,
        count: 0,
      },
      {
        seat: "SILVER",
        price: 1499,
        count: 0,
      },
    ],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmitInquery = async () => {
    try {
      setLoading(true);
      setError("");
      let response = await instance.post("inquiry", Inquery);
      setLoading(false);
      handleClose();
      return response.data;
    } catch (error) {
      setLoading(false);
      setError("something went wrong! Please try after sometime");
      return error;
    }
  };

  const handleInputChange = (e) => {
    // e.preventDefault()
    let { name, value } = e.target;
    setInquery({ ...Inquery, [name]: value });
  };

  const handleAddSubTicket = (sign, seat, count) => {
    console.log("works properly", sign, seat);

    if (sign === "+") {
      let updatedState = [...Inquery.ticket].map((item) =>
        item.seat === seat ? { ...item, count: item.count + 1 } : item
      );

      setInquery({ ...Inquery, ticket: updatedState });
    } else if (sign === "-" && count > 0) {
      let updatedState = [...Inquery.ticket].map((item) =>
        item.seat === seat ? { ...item, count: item.count - 1 } : item
      );

      setInquery({ ...Inquery, ticket: updatedState });
    }
  };

  console.log("thert", Inquery);
  

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box marginBottom={4}>
            <AppInput
              type="text"
              name="name"
              val={Inquery.name}
              handleChange={handleInputChange}
              label="Full Name"
              placeholder="Ex: Anshul"
            />
            <AppInput
              type="number"
              name="mobile"
              val={Inquery.mobile}
              handleChange={handleInputChange}
              label="Mobile Number"
              placeholder="Ex: 8058868555"
            />
            <AppInput
              type="email"
              name="email"
              val={Inquery.email}
              handleChange={handleInputChange}
              label="Email "
              placeholder="Ex: xyz@gmail.com"
            />
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <Grid container spacing={0}>
              {Inquery.ticket.map((item, i) => (
                <>
                  <Grid
                    key={i}
                    size={{ lg: 3, md: 6, sm: 6, xs: 6 }}
                    padding={1}
                    alignSelf={"center"}
                  >
                    <Box sx={{ marginBottom: 1 }}>
                      <Chip
                        label={`${item.seat} ${item.price} /-`}
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
                      <CounterBtn
                        state={item.count}
                        addTicket={() =>
                          handleAddSubTicket("+", item.seat, item.count)
                        }
                        subTicket={() =>
                          handleAddSubTicket("-", item.seat, item.count)
                        }
                      />
                    </Box>
                  </Grid>
                </>
              ))}
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
                ":disabled": {
                  background: "#171717",
                  color: "#c3c3c3",
                },
              }}
              disabled={loading}
              onClick={handleSubmitInquery}
            >
              Book Your Ticket with Us
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
