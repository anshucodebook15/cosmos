import React from "react";
import "./AppInput.scss";
import { Box } from "@mui/material";
import { Typo_Subtitle } from "../Typo/Typo";

const AppInput = ({
  type = "text",
  name = "name",
  label = "Full Name",
  placeholder = "Placeholder",
  val,
  handleChange,
  maxlength = "",
}) => {
  return (
    <div className="AppInput">
      <Box marginBottom={2}>
        <Box marginBottom={1}>
          <Typo_Subtitle text={label} fw="500" />
        </Box>
        <Box marginBottom={2}>
          <input
            type={type}
            name={name}
            value={val}
            onChange={handleChange}
            placeholder={placeholder}
            className="AppInput_text"
          />
        </Box>
      </Box>
    </div>
  );
};

export default AppInput;
