import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Landing from "./pages/Landing/Landing";
import Details from "./pages/Details/Details";
import { Box, Container } from "@mui/material";
import AppInput from "./components/AppInput/AppInput";
import Maintainance from "./components/Maintainance/Maintainance";

function App() {
  return (
    <>
      <div>
        {/* <Box
          sx={{
            padding: 2,
            background: "#ca1e6b",
            position: "relative",
            color: "#fff",
            zIndex: 200,
          }}
        >
          <h5>
            Site is in maintainance mode ... ticket booking will be start soon{" "}
          </h5>
        </Box> */}
        <Landing />
      </div>
    </>
  );
}

export default App;
