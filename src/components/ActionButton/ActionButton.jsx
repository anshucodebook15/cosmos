import React from "react";
import "./ActionButton.scss";
import { Button } from "@mui/material";
import { ts } from "../../theme/apptheme";

const ActionButton = ({ text, onclick, disabled }) => {
  return (
    <div className="ActionButton">
      <Button
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
        onClick={onclick}
        disabled={disabled}
      >
        {text}
      </Button>
    </div>
  );
};

export default ActionButton;
