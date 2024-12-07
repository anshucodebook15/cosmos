import React from "react";
import "./Typo.scss";
import Typography from "@mui/material/Typography";

export const Typo_Heading = ({
  v = "h1",
  fs = "3.8rem",
  fw = "700",
  fc = "#eee",
  text = "Heading",
}) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: `${fs}`,
          fontWeight: `${fw}`,
          color: `${fc}`,
          fontFamily: "anton",
          letterSpacing: 1,
          marginBottom: "1.4rem",
        }}
        variant={v}
        color="initial"
      >
        {text}
      </Typography>
    </>
  );
};

export const Typo_Subtitle = ({
  v = "h2",
  fs = "1.6rem",
  fw = "400",
  fc = "white",
  text = "Heading",
}) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: `${fs}`,
          fontWeight: `${fw}`,
          color: `${fc}`,
          fontFamily: "jost",
        }}
        variant={v}
        color="initial"
      >
        {text}
      </Typography>
    </>
  );
};

export const Typo_Subheading = ({
  v = "h2",
  fs = "2.4rem",
  fw = "500",
  fc = "white",
  text = "Heading",
}) => {
  return (
    <>
      <Typography
        sx={{ fontSize: `${fs}`, fontWeight: `${fw}`, color: `${fc}`, fontFamily: "Anton", letterSpacing: 1.1 }}
        variant={v}
        color="initial"
      >
        {text}
      </Typography>
    </>
  );
};

export const Typo_Basefont = ({
  v = "p",
  fs = "1.4rem",
  fw = "400",
  fc = "white",
  text = "Heading",
}) => {
  return (
    <>
      <Typography
        sx={{ fontSize: `${fs}`, fontWeight: `${fw}`, color: `${fc}`, fontFamily: "jost", }}
        variant={v}
        color="initial"
      >
        {text}
      </Typography>
    </>
  );
};


export const Typo_Smallfont = ({
  v = "p",
  fs = "1.2rem",
  fw = "400",
  fc = "white",
  text = "Heading",
}) => {
  return (
    <>
      <Typography
        sx={{ fontSize: `${fs}`, fontWeight: `${fw}`, color: `${fc}`, fontFamily: "jost", }}
        variant={v}
        color="initial"
      >
        {text}
      </Typography>
    </>
  );
};

// const Typo = ({ v = "body1", fs, fw, fc, text }) => {
//   return (
//     <div className="Typo">
//       <Typography
//         sx={{ fontSize: `${fs}`, fontWeight: `${fw}`, color: `${fc}` }}
//         variant={v}
//         color="initial"
//       >
//         {text}
//       </Typography>
//     </div>
//   );
// };

// export default Typo;
