import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Grid from "@mui/material/Grid2";
import { TextField } from "@mui/material";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "#000000",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const InquiryModal = () => {
  const [open, setOpen] = useState(false);
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


          <Box>
            <label htmlFor="">Name</label>
            <TextField type="text"  sx={{background: "#eee"}} fullWidth/>
            <input type="name" placeholder="Full name" name="name" />
          </Box>

        </Box>
      </Modal>
    </div>
  );
};
