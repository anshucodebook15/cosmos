import React from "react";
import { Box, Avatar, Stack } from "@mui/material";
import { Typo_Basefont, Typo_Smallfont } from "../../components/Typo/Typo";

const ProfileChip = ({ title, name, avatarColor }) => {
  return (
    <Stack>
      <Box sx={{ marginBottom: 1 }}>
        <Typo_Basefont text={title} />
      </Box>

      <Box
        sx={{
          display: "inline-flex", 
          alignItems: "center",
          backgroundColor: "#323232",
          padding: "0.6rem",
          borderRadius: "25px",
          marginRight: "auto", 
        }}
      >
        {/* Avatar */}
        <Avatar
          sx={{
            width: "2.2rem",
            height: "2.2rem",
            backgroundColor: avatarColor || "#6ac1df", // Default avatar color
            marginRight: "1rem",
          }}
        />

        {/* Text */}
        <Typo_Smallfont
         text={name} />
      </Box>
    </Stack>
  );
};

export default ProfileChip;
